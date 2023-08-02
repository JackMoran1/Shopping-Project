import React from 'react';
import '../../css/Discount.css';

const Discount = ({ discount }) => {
    return (
        <div className="discount">
            <h3>Discount ID: {discount.discountId}</h3>
            <p>Discount Name: {discount.discountName}</p>
            <p>Discount Amount: {(discount.discountAmount * 100).toFixed(2)}%</p>
        </div>
    );
}

export default Discount;
