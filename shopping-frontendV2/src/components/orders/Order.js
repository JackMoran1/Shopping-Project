import React from 'react';
import '../../css/Order.css';

const Order = ({ order }) => {
  return (
    <div className="order">
      <h3>Order ID: {order.orderId}</h3>
      <p>User ID: {order.userId}</p>
      <p>Date: {new Date(order.date).toLocaleDateString()}</p>
      <p>Completed: {order.completed ? "Yes" : "No"}</p>
      <p>Price: ${order.price.toFixed(2)}</p>
      {/* Add more fields as required by your order schema */}
    </div>
  );
}

export default Order;
