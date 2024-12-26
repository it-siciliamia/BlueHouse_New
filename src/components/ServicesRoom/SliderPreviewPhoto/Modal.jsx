import React from "react";
import PropTypes from "prop-types";
import { IoClose } from "react-icons/io5";
import s from "./Modal.module.scss";

const Modal = ({ children, onClose }) => {
  return (
    <div className={s.modalOverlay}>
      <div className={s.modalContent}>
        <button className={s.closeButton} onClick={onClose}>
          <IoClose size="30px" color="#2E3A59" />
        </button>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
