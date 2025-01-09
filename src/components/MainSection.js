import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cancelOrder, updateOrderTime } from '../redux/slices/pizzaSlice';

const MainSection = () => {
  const orders = useSelector((state) => state.pizza.orders);
  const dispatch = useDispatch();

  const pizzasDeliveredCount = orders.filter((order) => order.stage === 'Order Picked').length;

  useEffect(() => {
    const interval = setInterval(() => {
      orders.forEach((order) => {
        if (order.stage !== 'Order Picked') {
          dispatch(updateOrderTime({ orderId: order.orderId, time: order.time + 1 }));
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch, orders]);

  const handleCancelOrder = (orderId) => {
    dispatch(cancelOrder(orderId));
  };

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">Order Summary</h3>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Stage</th>
            <th>Total Time Spent</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.stage}</td>
              <td>{Math.floor(order.time / 60)} min {Math.floor(order.time % 60)} sec</td>
              <td>
                {order.stage !== 'Order Picked' && order.stage !== 'Order Ready' && (
                  <button 
                    className="btn btn-danger btn-sm"
                    onClick={() => handleCancelOrder(order.orderId)}
                  >
                    Cancel
                  </button>
                )}
              </td>
            </tr>
          ))}
          <tr className="table-primary">
            <td colSpan="3">Total Orders Delivered</td>
            <td>{`00${pizzasDeliveredCount}`}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MainSection