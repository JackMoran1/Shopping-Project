import React, { useEffect } from 'react';

const CodesPage = ({fetchData, codes, setCodes}) => {
  
  useEffect(() => {
    fetchData("/discount-code", setCodes);
  }, [])
    
  
    return (
        <div>
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