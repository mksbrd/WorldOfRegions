import React from 'react';

import { Styled } from './ModalOverlay.styles';

const ModalOverlay = () => {
  const onClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <Styled.ModalOverlay onClick={onClickHandler}/>
  );
};

export default ModalOverlay;
