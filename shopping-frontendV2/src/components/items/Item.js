import React, {useState} from 'react';
import '../../css/Item.css';
import api from '../../api/axiosConfig'
import EditItem from './EditItem';

const Item = ({ item, onEditItem }) => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="item-card">
            {isEditing ? (
                <EditItem item={item} onEditItem={updatedItem => {
                    onEditItem(updatedItem);
                    setIsEditing(false);
                }} />
            ) : (
                <>
                    <img src={item.imageURL} alt={item.name} className="item-image" />
                    <h2>{item.name}</h2>
                    <p>Quantity: {item.quantity}</p>
                    <h3>${item.price}</h3>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </>
            )}
        </div>
    );
}

export default Item;
