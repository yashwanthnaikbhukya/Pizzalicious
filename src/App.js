import './App.css';
import React from 'react';
import PizzaOrder from './components/PizzaOrder';
import OrderStatus from './components/OrderStatus';
import MainSection from './components/MainSection';

function App() {
  return (
    <div className="App">
    <PizzaOrder/>
    <OrderStatus/>
    <MainSection/>
    </div>
  );
}

export default App;
