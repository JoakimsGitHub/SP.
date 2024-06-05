import React from "react";
import "./modalStyle.css";

function Modal({ headings, paragraphs, setModal }) {
  return (
    <div className="modal">
      <div className="overlay" onClick={() => setModal(false)}></div>
      <div className="modalContent">
        <h2>{headings[1]}</h2>
        <h3>{headings[2]}</h3>
        <p>{paragraphs[1]}</p>
        <h3>{headings[3]}</h3>
        <p>{paragraphs[2]}</p>
        <h3>{headings[4]}</h3>
        <p>{paragraphs[3]}</p>
        <button className="closeModal" onClick={() => setModal(false)}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
