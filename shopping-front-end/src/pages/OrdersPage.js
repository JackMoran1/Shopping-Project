import React, {useEffect} from 'react';

const OrdersPage = ({fetchData, orders, setOrders, sortedOrders, sortOrders}) => {
  let fetched = false;
    
  useEffect(() => {
    fetchData("/orders", setOrders);
  }, [sortedOrders]);
  
      return (
        <div>
          <>
          Sort By:
          <button onClick={() => sortOrders("date")}>Date</button>
          <button onClick={() => sortOrders("user")}>Customer</button>
          <button onClick={() => sortOrders("price")}>Price</button>
          </>
          <table className="page-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>User ID</th>
                <th>Date</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              { sortedOrders !== null && sortedOrders !== undefined ? (
                sortedOrders.map((order, idx) =>
                  <tr key = {idx}  style={{height: '100px'}}>
                    <td>{order.orderId}</td>
                    <td>{order.userId}</td>
                    <td>{order.date}</td>
                    <td>{order.price}</td>
                  </tr>
                )
              ) : (
                <tr>
                  <td colSpan="4">Loading...</td>
                </tr>
              )
              }
            </tbody>
          </table>
        </div>
      );
};

export default OrdersPage;