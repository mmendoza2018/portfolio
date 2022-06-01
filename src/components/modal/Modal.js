import React from "react";
import "./modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export const Modal = ({ children,isOpen, openModal, closeModal,size }) => {
  const handlePropagation = (e) => {
    e.stopPropagation();
}
  return (
    <div className={`container-modal ${isOpen && "show-modal"}`} onClick={closeModal}>
      <div className={`modal-content ${size}`} onClick={handlePropagation}>
      <div className="modal-header">
        <FontAwesomeIcon icon={faClose} onClick={closeModal} size='lg' color="white"/>
      </div>
      {children}
      </div>
    </div>
  );
};
