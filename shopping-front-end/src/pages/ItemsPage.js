const ItemsPage = (props) => {
    const items = props;
    //console.log("Items in ItemsPage:", items);

      return (
        <div {...props}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {items !== null && items !== undefined ? (
                items.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.itemId}</td>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">Loading...</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      );
};

export default ItemsPage;