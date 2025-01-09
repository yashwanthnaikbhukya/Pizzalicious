import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { placeOrder } from "../redux/slices/pizzaSlice";

const PizzaOrder = () => {

  const dispatch = useDispatch();
  const orders = useSelector((state) => state.pizza.orders);

  const [order, setOrder] = useState({ type: "Veg", size: "Small", base: "Thin" });

  const activeOrders = orders.filter((order) =>
    ["Order Placed", "Order in Making", "Order Ready"].includes(order.stage)
  );

  const handlePlaceOrder = () => {
    if (activeOrders.length < 10) {
      dispatch(placeOrder(order));
    } else {
      alert("Not taking any more orders for now");
    }
  };

  return (
    <div className='container mt-4'>
    <h1 className="text-center mb-4 display-4 font-weight-bold" style={{ color: '#d9534f' }}><i className="fas fa-pizza-slice" style={{ color: '#d9534f', marginRight: '10px' }}></i>Pizzalicious</h1>
    <h3 className="text-center mb-4">Order Your Pizza</h3>
    <div className='row'>

    <div className='col-md-4 mb-3'>
      <label htmlFor="exampleFormControlInput1" className="form-label">Pizza Type</label>
      <select className="form-select" aria-label="Pizza Type" onChange={(e)=>{setOrder((prevOrder) => ({ ...prevOrder, type: e.target.value }));}}>
        <option value="Veg">Veg</option>
        <option value="Non-Veg">Non-Veg</option>
      </select>
    </div>

    <div className='col-md-4 mb-3'>
      <label htmlFor="exampleFormControlInput2" className="form-label">Pizza Size</label>
      <select className="form-select" aria-label="Pizza Size" onChange={(e)=>{setOrder((prevOrder) => ({ ...prevOrder, size: e.target.value }));}}>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
    </div>

    <div className='col-md-4 mb-3'>
      <label htmlFor="exampleFormControlInput3" className="form-label">Pizza Base</label>
      <select className="form-select" aria-label="Pizza Base" onChange={(e)=>{setOrder((prevOrder) => ({ ...prevOrder, base: e.target.value }));}}>
        <option value="Thin">Thin</option>
        <option value="Thick">Thick</option>
      </select>
    </div>

    </div>
    <button className='btn btn-primary' type="button" onClick={handlePlaceOrder}>Order</button>
    </div>
  )
}

export default PizzaOrder