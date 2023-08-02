import React, { useState } from 'react';
import api from '../../api/axiosConfig';

function NewItem({ onNewItem }) {
    const [item, setItem] = useState({
        itemId: '',
        name: '',
        quantity: 0,
        price: 0.0,
        imageURL: '',
    });

    const handleChange = e => {
        setItem({
            ...item,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await api.post("/items", item);
        onNewItem(response.data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="itemId" type="text" placeholder="Item ID" onChange={handleChange} required />
            <input name="name" type="text" placeholder="Name" onChange={handleChange} required />
            <input name="quantity" type="number" placeholder="Quantity" onChange={handleChange} required />
            <input name="price" type="number" placeholder="Price" step="0.01" onChange={handleChange} required />
            <input name="imageURL" type="text" placeholder="Image URL" onChange={handleChange} required />
            <button type="submit">Submit</button>
        </form>
    );
}

export default NewItem;
