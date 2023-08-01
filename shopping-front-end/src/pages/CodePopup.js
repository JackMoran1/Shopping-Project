import React from 'react';

const CodePopup = ({ onClose }) => {

    return (
        <div className="popup">
          <div className="popup-content">
            <h1>IMPLEMENT CODE CREATION HERE</h1>
            <button onClick={onClose}>Close Pop-up</button>
          </div>
        </div>
      );
}

export default CodePopup;