import React, {useState, useEffect} from 'react';
import User from './User';
import '../../css/Users.css';
import api from '../../api/axiosConfig';

function Users() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const response = await api.get('/users');
        setUsers(response.data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleUserUpdate = (updatedUser) => {
        const newUsers = users.map(user => 
            user.userId === updatedUser.userId ? updatedUser : user
        );
        setUsers(newUsers);
    };

    // const handleEditItem = editedItem => {
    //     setItems(prevItems => prevItems.map(item => item.itemId === editedItem.itemId ? editedItem : item));
    // };

    return (
        <div>
            {users.map((user) => (
                <User key={user.userId} user={user} onEditUser={handleUserUpdate} />
            ))}
        </div>
    );
}

export default Users;
