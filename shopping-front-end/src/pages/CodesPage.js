const CodesPage = (props) => {
    const codes = props;
    //console.log("Codes in CodesPage:", codes);
  
    return (
        <div {...props}>
          <table className="page-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {codes !== null && codes !== undefined ? (
                codes.map((code, idx) =>
                  <tr key = {idx}  style={{height: '100px'}}>
                    <td>{code.discountId}</td>
                    <td>{code.discountName}</td>
                    <td>{code.discountAmount}</td>
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

export default CodesPage;