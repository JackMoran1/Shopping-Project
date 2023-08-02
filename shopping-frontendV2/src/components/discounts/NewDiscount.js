import React, { useState } from 'react';
import api from '../../api/axiosConfig';

function NewDiscount({ onNewDiscount }) {
    const [discount, setDiscount] = useState({
        discountId: '',
        discountName: '',
        discountAmount: 0.0,
    });

    const handleChange = e => {
        setDiscount({
            ...discount,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await api.post("/discounts", discount);
        onNewDiscount(response.data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="discountId" type="text" placeholder="Discount ID" onChange={handleChange} required />
            <input name="discountName" type="text" placeholder="Discount Name" onChange={handleChange} required />
            <input name="discountAmount" type="number" placeholder="Discount Amount" step="0.01" onChange={handleChange} required />
            <button type="submit">Submit</button>
        </form>
    );
}

export default NewDiscount;
