const OrdersPage = (props) => {
    const orders = props;
  
      return (
        <div {...props}>
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
              { orders !== null && orders !== undefined ? (
                orders.map((order, idx) =>
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