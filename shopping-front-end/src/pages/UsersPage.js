import React, {useEffect} from 'react';
import UsersPopup from './UsersPopup';

const UsersPage = ({fetchData, users, setUsers, userPopupOpen, openUserPopup, closeUserPopup, selectedUserId}) => {
    
  
  useEffect(() => {
    fetchData("users", setUsers)
  }, [])
  
      return (
        <div>
          {userPopupOpen && <UsersPopup onClose = {closeUserPopup} selectedUserId = {selectedUserId} users = {users}/>}
          <table className="page-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              { users !== null && users !== undefined ? (
                users.map((user, idx) =>
                  <tr key = {idx} style={{height: '100px'}}>
                    <td>{user.userId}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <button onClick = {() => openUserPopup(user.userId)}>Edit</button>
                    </td>
                  </tr>
                )
              ) : (
                <tr>
                  <td colSpan="4">Loading...</td>
                </tr>
              )
              }
            </tbody>
          </table>
        </div>
      );
  };

  export default UsersPage;