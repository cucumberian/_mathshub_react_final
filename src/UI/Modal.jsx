import React from "react";

import ReactDOM from "react-dom";

import "./Modal.scss";

function Modal({ children, closeHandler }) {
  const modalOverlay = document.getElementById("modal-overlay");

  return (
    <>
      {ReactDOM.createPortal(
        <div className="modal_overlay" onClick={closeHandler}>
          <div className="modal">
            {children}
            <button className="close_modal" onClick={closeHandler}>
              Закрыть
            </button>
          </div>
        </div>,
        modalOverlay
      )}
    </>
  );
}

export default Modal;
