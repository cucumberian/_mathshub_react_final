import React from "react";

import ReactDOM from "react-dom";

import "./Modal.css";

function Modal({ children }) {
  const modalOverlay = document.getElementById("modal-overlay");

  return (
    <>
      {ReactDOM.createPortal(
        <div className="modal_overlay">
          <div className="modal">{children}</div>
        </div>,
        modalOverlay
      )}
    </>
  );
}

export default Modal;
