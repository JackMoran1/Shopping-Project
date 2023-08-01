import React from 'react';

const UsersPopup = ({ onClose, selectedUserId, users }) => {
    const selectedUser = users.find(user => user.userId === selectedUserId);
    //console.log('Item ID:' + selectedItemId);
    //console.log('Item selected:' + selectedItem);

    return (
        <div className="popup">
          <div className="popup-content">
            <h3>Edit User</h3>
            {selectedUser && (
                <>
                    <p>User ID: {selectedUser.userId}</p>
                    <p>Name: {selectedUser.name}</p>
                    <p>Email: {selectedUser.email}</p>
                </>
            )}
            <button onClick={onClose}>Close Pop-up</button>
          </div>
        </div>
      );
}

export default UsersPopup;