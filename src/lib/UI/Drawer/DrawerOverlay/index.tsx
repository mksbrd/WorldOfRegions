import React from 'react';
import { AnimatePresence } from 'framer-motion';

import { Styled } from './DrawerOverlay.styles';

type DrawerOverlayProps = {
  onClick?: () => void
}

const defaultProps = {
  onClick: undefined,
};

const DrawerOverlay = ({ onClick }: DrawerOverlayProps) => (
  <AnimatePresence>
    <Styled.ModalOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
      onClick={onClick}
    />
  </AnimatePresence>

);

DrawerOverlay.defaultProps = defaultProps;

export default DrawerOverlay;
