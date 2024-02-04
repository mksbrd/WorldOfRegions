import React from 'react';
import { createPortal } from 'react-dom';

const DrawerContainer = () => (
  <>
    {createPortal(
      <div className="drawer-root"/>, document.querySelector('body') as HTMLBodyElement,
    )}
  </>
);

export default DrawerContainer;
