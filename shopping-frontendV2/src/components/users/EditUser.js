import React, { useState, useEffect } from 'react';
import api from '../../api/axiosConfig';

function EditUser({ user: initialUser, onEditUser }) {
    const [user, setUser] = useState(initialUser);
    useEffect(() => {
        setUser(initialUser);
    }, [initialUser]);

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const payload = {
        name: user.name,
        email: user.email,
        };
        console.log("Payload:", payload);
        const response = await api.put(`/users/${user.userId}`, payload);
        onEditUser(response.data);
    };

    // useEffect(() => {
    //     setCurrentUser(user);
    // }, [user]);

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Name" onChange={handleChange} value={user.name}required />
            <input name="email" type="email" placeholder="Email" onChange={handleChange} value={user.email}required />
            <button type="submit">Update</button>
        </form>
    );
}

export default EditUser;
