import React, { useState, useEffect } from 'react';
import Discount from './Discount';
import '../../css/Discount.css';
import NewDiscount from './NewDiscount';
import api from '../../api/axiosConfig';

function Discounts() {
    const [discounts, setDiscounts] = useState([]);
    const [showNewDiscount, setShowNewDiscount] = useState(false);

    const fetchDiscounts = async () => {
        const response = await api.get('/discounts');
        setDiscounts(response.data);
    };

    useEffect(() => {
        fetchDiscounts();
    }, []);

    const handleNewDiscount = (newDiscount) => {
        setDiscounts([...discounts, newDiscount]);
    };

    return (
        <div>
            <button onClick={() => setShowNewDiscount(!showNewDiscount)}>
                {showNewDiscount ? 'Cancel' : 'New Discount Code'}
            </button>
            {showNewDiscount && <NewDiscount onNewDiscount={handleNewDiscount} />}
            {discounts.map((discount) => (
                <Discount key={discount.discountId} discount={discount} />
            ))}
        </div>
    );
}

export default Discounts;
