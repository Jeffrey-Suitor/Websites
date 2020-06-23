import React from "react";
import "./ModalComponent.css";
import PropTypes from "prop-types";

export default function ModalComponent(props) {
  const onClose = (e) => {
    props.onClose && props.onClose(e);
  };

  if (!props.modal) {
    return null;
  }

  return (
    <div className="modal-container">
      <div className="modal">
        <h1>{props.title}</h1>
        <div className="modal-content">{props.content}</div>
        <div className="modal-actions">
          <button className="modal-actions-togbtn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

ModalComponent.propTypes = {
  onClose: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};
