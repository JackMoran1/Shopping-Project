import React, { useState} from 'react';
import Item from './Item'; // import the Item component
import '../../css/Items.css';
import NewItem from './NewItem';

function Items({ items, setItems }) {
    const [showNewItemForm, setShowNewItemForm] = useState(false);

    const handleNewItem = newItem => {
        setItems(prevItems => [newItem, ...prevItems]);
        setShowNewItemForm(false);
    };

    const handleEditItem = editedItem => {
        setItems(prevItems => prevItems.map(item => item.itemId === editedItem.itemId ? editedItem : item));
    };

    return (
        <div className="items">
            <h1>Items</h1>
            <div style={{display: 'inline-block'}}>
            <button onClick={() => setShowNewItemForm(!showNewItemForm)} className="itemsButton">
                {showNewItemForm ? 'Cancel' : 'New Item'}
            </button>
            </div>
            {showNewItemForm && <NewItem onNewItem={handleNewItem} />}
            <div>
            {items && items.map(item => <Item key={item.itemId} item={item} onEditItem={handleEditItem} />)}
            </div>
        </div>
    );
}

export default Items;