import React, { Children, useState } from "react";
import { ModalOverlay } from "./styles/modal.style";

const Modal = ({ display, children }) => {
  return (
    <ModalOverlay show={display}>
      <div className="modalContent">{children}</div>
    </ModalOverlay>
  );
};

export default Modal;
