import React, { useState, useEffect } from 'react';
import Order from './Order';
import '../../css/Orders.css';

const Orders = ({ orders }) => {
  const [sortedOrders, setSortedOrders] = useState([]);
  const [sortState, setSortState] = useState('none'); // 'none', 'price', 'date', 'userId'
  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(() => {
    setSortedOrders(orders);
  }, [orders]);

  const sortByPrice = () => {
    if (sortState !== 'price') {
      const sorted = [...sortedOrders].sort((a, b) => a.price - b.price);
      setSortedOrders(sorted);
      setSortState('price');
    } else {
      setSortedOrders(orders);
      setSortState('none');
    }
  };

  const sortByDate = () => {
    if (sortState !== 'date') {
      const sorted = [...sortedOrders].sort((a, b) => new Date(a.date) - new Date(b.date));
      setSortedOrders(sorted);
      setSortState('date');
    } else {
      setSortedOrders(orders);
      setSortState('none');
    }
  };

  const sortByUserId = () => {
    if (sortState !== 'userId') {
      const sorted = [...sortedOrders].sort((a, b) => a.userId.localeCompare(b.userId));
      setSortedOrders(sorted);
      setSortState('userId');
    } else {
      setSortedOrders(orders);
      setSortState('none');
    }
  };

  const toggleCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  let displayedOrders = sortedOrders;
  if (!showCompleted) {
    displayedOrders = sortedOrders.filter(order => !order.completed);
  }

  if(!displayedOrders) return <p>Loading orders...</p>

  return (
    <div className="orders">
      <h1>Orders</h1>
      <div>
      <button onClick={sortByPrice}>{sortState === 'price' ? "Unsort" : "Sort by Price"}</button>
      <button onClick={sortByDate}>{sortState === 'date' ? "Unsort" : "Sort by Date"}</button>
      <button onClick={sortByUserId}>{sortState === 'userId' ? "Unsort" : "Sort by User ID"}</button>
      <button onClick={toggleCompleted}>{showCompleted ? "Hide Completed" : "Show Completed"}</button>
      </div>
      <div>
      {displayedOrders.map(order => <Order key={order.orderId} order={order} />)}
      </div>
    </div>
  );
}

export default Orders;




