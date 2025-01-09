import { createSlice } from '@reduxjs/toolkit';

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: {
    orders: [],
    orderIdCounter: 0,
  },
  reducers: {
    placeOrder: (state, action) => {
      const orderId = `00${++state.orderIdCounter}`;
      state.orders.push({
        ...action.payload,
        orderId,
        stage: 'Order Placed',
        time: 0,
        prevTime: 0,
      });
    },
    updateOrderStage: (state, action) => {
      const { orderId, newStage } = action.payload;
      const orderIndex = state.orders.findIndex((order) => order.orderId === orderId);

      if (orderIndex !== -1) {
        const order = state.orders[orderIndex];
        // Update prevTime before changing stage
        order.prevTime = order.time;
        order.stage = newStage; // Update the stage
      }
    },
    cancelOrder: (state, action) => {
      state.orders = state.orders.filter(
        (order) => order.orderId !== action.payload
      );
    },
    updateOrderTime: (state, action) => {
      const { orderId, time } = action.payload;
      const order = state.orders.find((o) => o.orderId === orderId);
      if (order) {
        order.time = time;
      }
    },
  },
});

export const {
  placeOrder,
  updateOrderStage,
  cancelOrder,
  updateOrderTime,
} = pizzaSlice.actions;

export default pizzaSlice.reducer;
