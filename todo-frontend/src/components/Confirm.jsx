import React from "react";
import "./styles/Confirm.css";

export default function Confirm({ message, onConfirm, onCancel }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-card">
        <p className="modal-message">{message}</p>
        <div className="modal-buttons">
          <button className="modal-confirm" onClick={onConfirm}>Yes</button>
          <button className="modal-cancel" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
