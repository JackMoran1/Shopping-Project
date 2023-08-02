import React, { useState, useEffect } from 'react';
import api from '../../api/axiosConfig';

function EditItem({ item: initialItem, onEditItem }) {
    const [item, setItem] = useState(initialItem);
    useEffect(() => {
        setItem(initialItem);
    }, [initialItem]);

    const handleChange = e => {
        setItem({
            ...item,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const payload = {
        itemId: item.itemId,
        name: item.name,
        quantity: item.quantity.toString(),
        price: item.price.toString(),
        imageURL: item.imageURL,
        };
        console.log("Payload:", payload);
        const response = await api.put(`/items/${item.itemId}`, payload);
        onEditItem(response.data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="itemId" type="text" placeholder="Item ID" onChange={handleChange} value={item.itemId} required />
            <input name="name" type="text" placeholder="Name" onChange={handleChange} value={item.name} required />
            <input name="quantity" type="number" placeholder="Quantity" onChange={handleChange} value={item.quantity} required />
            <input name="price" type="number" placeholder="Price" step="0.01" onChange={handleChange} value={item.price} required />
            <input name="imageURL" type="text" placeholder="Image URL" onChange={handleChange} value={item.imageURL} required />
            <button type="submit">Submit</button>
        </form>
    );
}

export default EditItem;