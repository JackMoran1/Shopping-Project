import React, { useEffect } from 'react';
import CodePopup from './CodePopup';

const CodesPage = ({fetchData, codes, setCodes, codePopupOpen, openCodePopup, closeCodePopup }) => {
  
  useEffect(() => {
    fetchData("/discount-code", setCodes);
  }, [])
    
  
    return (
        <div>
          <button onClick={() => {openCodePopup()}}>Create New Item</button>
          {codePopupOpen && <CodePopup onClose = {closeCodePopup} ></CodePopup>}
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