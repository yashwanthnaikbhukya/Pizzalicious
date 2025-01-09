import { configureStore } from '@reduxjs/toolkit';
import pizzaReducer from '../slices/pizzaSlice';

const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
  },
});

export default store;
