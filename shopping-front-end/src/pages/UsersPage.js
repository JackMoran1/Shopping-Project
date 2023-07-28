const UsersPage = (props) => {
    const users = props;
  
      return (
        <div {...props}>
          <table>
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
                  <tr key = {idx}>
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