import React, { useState } from 'react';
import EditUser from './EditUser';
import '../../css/User.css';

const User = ({ user, onEditUser }) => {
    const [isEditing, setIsEditing] = useState(false);

    // const handleUserUpdate = updatedUser => {
    //     setEditing(false);
    //     onEditUser(updatedUser);
    // };

    return (
        <div className="user">
            {isEditing ? (
                <EditUser user={user} onEditUser={updatedUser => {
                    onEditUser(updatedUser);
                    setIsEditing(false);
                }} />
            ) : (
                <>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </>
            )}
        </div>
    );
}

export default User;
