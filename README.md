# Pizzalicious

**Pizzalicious** is a pizza shop simulation application designed to mimic the behavior of a real-world pizza restaurant. The application allows users to place orders, track their status, and visualize the progress of each order. Developed using **React**, **Redux**, **Bootstrap**, and **Font Awesome**, the app delivers a seamless and responsive experience for both desktop and mobile users.

### [Live Demo](https://yashwanthnaikbhukya.github.io/Pizzalicious/)
## Features

### Core Features
1. **Placing Orders**: A form to configure and place pizza orders with options:
   - **Type**: Veg or Non-Veg
   - **Size**: Large, Medium, Small
   - **Base**: Thin or Thick

2. **Order Limit**: Restricts the restaurant to handle a maximum of 10 active orders. Displays a message "Not taking any order for now" when the limit is reached.

3. **Order Stages**:
   - Order Placed
   - Order in Making
   - Order Ready
   - Order Picked

4. **Highlight Delayed Orders**: Orders remaining in the same stage for more than the specified preparation time are highlighted in **red**.
   - Preparation times:
     - Small: 3 minutes
     - Medium: 4 minutes
     - Large: 5 minutes

5. **Time Tracking**:
   - Displays the time spent in each stage for every pizza.
   - Tracks the total time since the order was placed.

6. **Interactive Actions**:
   - Move orders manually between stages using action buttons: `Next`, `Picked`, or `Cancel`.
   - Cancel orders at any stage before they are marked as Ready.

7. **Order Display**:
   - Each stage is displayed in separate columns.
   - Pizzas are shown as cards, categorized by their current stage.

8. **Main Dashboard**:
   - Displays all orders in progress with their remaining preparation time and Order ID.
   - Shows the total number of pizzas delivered today.

### Bonus Features
1. **Sorting Orders**:
   - Orders are sorted based on delays at each stage for better visualization.

2. **Dynamic Preparation Times**:
   - Different pizza sizes have unique preparation times. Orders are highlighted in red based on their respective delays.

3. **Icons for Clarity**:
   - Veg and Non-Veg pizzas are marked with distinct icons for better differentiation.

4. **Responsive Design**:
   - The application is fully responsive and optimized for both desktop and mobile devices.

## Technologies Used
- **React.js**: For building the user interface.
- **Redux**: For state management.
- **Bootstrap**: For responsive styling.
- **Font Awesome**: For icons.

## Installation

Follow these steps to run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/yashwanthnaikbhukya/pizzalicious.git
   ```

2. Navigate to the project directory:
   ```bash
   cd pizzalicious
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Deployment
The application is deployed online and can be accessed [here](https://yashwanthnaikbhukya.github.io/Pizzalicious/).

## Future Enhancements
- Implement real-time notifications for delayed orders.
- Add support for customizing toppings and sides.
- Enhance the UI with more animation effects.
