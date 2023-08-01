import React from 'react';

const ItemPopup = ({ onClose, selectedItemId, items }) => {
    const selectedItem = items.find(item => item.itemId === selectedItemId);
    //console.log('Item ID:' + selectedItemId);
    //console.log('Item selected:' + selectedItem);

    return (
        <div className="popup">
          <div className="popup-content">
            <h3>Edit Item</h3>
            {selectedItem && (
                <>
                    <p>Item ID: {selectedItem.itemId}</p>
                    <p>Name: {selectedItem.name}</p>
                    <p>Quantity: {selectedItem.quantity}</p>
                    <p>Price: {selectedItem.price}</p>
                </>
            )}
            <button onClick={onClose}>Close Pop-up</button>
          </div>
        </div>
      );
}

export default ItemPopup;