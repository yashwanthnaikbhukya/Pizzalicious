import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateOrderStage, updateOrderTime } from "../redux/slices/pizzaSlice";

const OrderStatus = () => {

  const orders = useSelector((state) => state.pizza.orders || []);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      orders.forEach((order) => {
        dispatch(
          order.stage !== 'Order Picked'
           ? updateOrderTime({ orderId: order.orderId, time: order.time + 1 })
           : updateOrderTime({ orderId: order.orderId, time: order.time})
        );
      });
    }, 1000);
  
    return () => clearInterval(interval);
  }, [dispatch, orders]);
  

  const handleNextButtonClick = (orderId, currentStage) => {
    let newStage = "";
    switch (currentStage) {
      case "Order Placed":
        newStage = "Order in Making";
        break;
      case "Order in Making":
        newStage = "Order Ready";
        break;
      case "Order Ready":
        newStage = "Order Picked";
        break;
      default:
        console.error("Error: Invalid Stage", currentStage);
        return; // Exit if no valid stage
    }
  
    dispatch(updateOrderStage({ orderId, newStage }));
  };
  

  const cardHighlight = (order) => {
    if (order.size === 'Small' && (order.time - (order.prevTime || 0)) > 180){
      return true;
    }
    else if (order.size === 'Medium' && (order.time - (order.prevTime || 0)) > 240){
      return true;
    }
    else if (order.size === 'Large' && (order.time - (order.prevTime || 0)) > 300){
      return true;
    }
  }

  const stages = [
    "Order Placed",
    "Order in Making",
    "Order Ready",
    "Order Picked",
  ];

  return (
    <>
      <div className="container mt-4">
      <h3 className="text-center mb-4">Pizza Stages Section</h3>
      <div className="row">
        {stages.map((stage) => (
          <div key={stage} className="col-md-3 mb-4">
            <div className="card shadow-sm">
              <div className="card-header text-white" style={{ backgroundColor: "#d32f2f" }}>
                <h5 className="card-title text-center mb-0">{stage}</h5>
              </div>
              <div className="card-body">
                {orders.filter((order) => order.stage === stage).length === 0 ? (
                  <div className="text-center text-muted">No orders in this stage</div>
                ) : (
                  orders
                  .filter((order) => order.stage === stage)
                  .sort((a, b) => (b.time - (b.prevTime || 0)) - (a.time - (a.prevTime || 0)))
                  .map((order) => (
                    <div
                      key={order.orderId}
                      className={`p-3 mb-3 rounded ${
                        cardHighlight(order) ? "bg-danger text-white" : "bg-light"
                      }`}
                    >
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <p className="mb-0">
                          <strong>Order ID:</strong> {order.orderId}
                        </p>
                        <div>
                          {order.type === "Veg" && (
                            <i className="fa-solid fa-leaf" style={{ color: "#10e529" }}></i>
                          )}
                          {order.type === "Non-Veg" && (
                            <i className="fa-solid fa-drumstick-bite" style={{ color: "#d76565" }}></i>
                          )}
                        </div>
                      </div>
                      {order.stage !== "Order Picked" && (
                        <p className="mb-1">
                          <strong>Time Elapsed:</strong>{" "}
                          {Math.floor((order.time - (order.prevTime || 0)) / 60)}{" "}
                          min{" "}
                          {Math.floor((order.time - (order.prevTime || 0)) % 60)}{" "}
                          sec
                        </p>
                      )}
                      <div className="d-flex justify-content-between">
                        {order.stage !== "Order Picked" && (
                          <button
                            className="btn btn-sm btn-warning"
                            onClick={() =>
                              handleNextButtonClick(order.orderId, order.stage)
                            }
                          >
                            Next Stage
                          </button>
                        )}
                        {order.stage === "Order Picked" && (
                          <span className="badge bg-success">Picked</span>
                        )}
                      </div>
                    </div>
                  )))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default OrderStatus