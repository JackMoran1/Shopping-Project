import React, {useEffect} from 'react';

const UsersPage = ({fetchData, users, setUsers}) => {
    
  
  useEffect(() => {
    fetchData("users", setUsers)
  }, [])
  
      return (
        <div>
          <table className="page-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              { users !== null && users !== undefined ? (
                users.map((user, idx) =>
                  <tr key = {idx} style={{height: '100px'}}>
                    <td>{user.userId}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
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