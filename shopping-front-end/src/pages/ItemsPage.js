import React, { useEffect } from 'react';
import ItemPopup from './ItemPopup';

const ItemsPage = ({fetchData, items, setItems, itemPopupOpen, openItemPopup, closeItemPopup, selectedItemId}) => {
  
  useEffect(() => {
    fetchData("/items", setItems);
  }, [])

      return (
        <div>
          {itemPopupOpen && <ItemPopup onClose = {closeItemPopup} selectedItemId = {selectedItemId} items = {items}/>}
          <table className="page-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Image</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items !== null && items !== undefined ? (
                items.map((item, idx) => (
                  <tr key={idx} style={{height: '100px'}}>
                    <td>{item.itemId}</td>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td>
                      <img src={item.imageURL} alt={`Image of ${item.name}`} style={{ width: '100px' }} />
                    </td>
                    <td>
                      <button onClick={() => openItemPopup(item.itemId)}>Edit</button>
                    </td>
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