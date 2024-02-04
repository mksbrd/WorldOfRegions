import React from 'react';
import { createPortal } from 'react-dom';

const ModalContainer = () => (
  <>
    {createPortal(
      <div className="modal-root"/>, document.querySelector('body') as HTMLBodyElement,
    )}
  </>
);

export default ModalContainer;
