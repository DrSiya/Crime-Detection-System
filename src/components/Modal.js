// Modal.js
import React from 'react';
import './Modal.css'; // Make sure you add styles for the modal

const Modal = ({ message, onOkay }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{message}</h3>
        <button onClick={onOkay}>Okay</button>
      </div>
    </div>
  );
};

export default Modal;
