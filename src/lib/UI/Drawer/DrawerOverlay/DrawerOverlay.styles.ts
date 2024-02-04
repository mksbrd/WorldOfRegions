import styled from 'styled-components';
import {motion} from 'framer-motion';

const ModalOverlay = styled(motion.div)`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.25);
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  z-index: 9688;
`;

export const Styled = {
    ModalOverlay,
};
