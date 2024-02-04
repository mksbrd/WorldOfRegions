import styled, {css} from 'styled-components';
import {motion} from 'framer-motion';
import {isNumber} from 'lodash-es';

/**
 * Modal Base Styles
 */

const BaseModalStyles = css`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  min-width: 150px;
  z-index: 9999;
  transform: translate(-50%, -50%);
`;

/**
 * Wait Modal Styles
 */

const WaitModal = styled.div<{ width: number }>`
  ${BaseModalStyles};
  align-items: center;
  justify-content: center;
  min-height: 150px;
  max-width: ${(props) => `${props.width}px`};
  background-color: ${({theme}) => theme.color};
`;

/**
 * Default Modal Styles
 */

const Modal__Header = styled.div<{ themeType?: string }>`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  justify-content: space-between;
  background-color: ${({theme}) => theme.backgroundColor};
  color: ${({theme}) => theme.color};
  padding-left: 10px;
  border-bottom: 1px solid;
  border-color: ${({theme}) => theme.separatorColor};
  height: 50px;
  user-select: none;
`;

const Modal__Title = styled.div`
  font-size: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: calc(100% - 40px);
  overflow: hidden;
`;

const Modal__CloseIcon = styled.div`
  ${(props) => (props.hidden ? '' : 'display: flex;')};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 40px;
  height: 100%;
  transition: all .3s ease-in;
`;

const Modal__Content = styled.div`
  position: relative;
  overflow: auto;

  input, select {
    height: auto;
  }
`;

const Modal__Controls = styled.div<{ isConfirmModal?: boolean }>`
  display: flex;
  align-items: center;
  border-top: 1px solid #dedede;
  flex-shrink: 0;
  height: 50px;

  ${({isConfirmModal, theme}) => isConfirmModal && `
      justify-content: flex-end;
    `}
`;

const Modal = styled(motion.div)<{ ref: any, width: any, maxHeight: number | undefined, themeType?: string }>`
  ${BaseModalStyles};
  box-shadow: ${({
                   themeType,
                   theme
                 }) => themeType === 'transparent' ? undefined : `0px 0px 6px 0px ${theme.isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.5)'}`};
  max-height: ${(props) => (props.maxHeight ? `${props.maxHeight}px` : '100%')};
  max-width: ${(props) => (isNumber(props.width) ? `${props.width}px` : props.width)};
  background-color: ${({
                         theme,
                         themeType
                       }) => (themeType === 'white' ? theme.backgroundColor : themeType === 'transparent' ? 'transparent' : theme.backgroundColor)};

  ${Modal__CloseIcon} {
    color: ${({theme, themeType}) => themeType !== 'white' ? theme.color : theme.color};

    &:hover {
      color: ${({theme, themeType}) => themeType !== 'white' ? theme.color : theme.color};
    }
  }
`;

export const Styled = {
    Modal,
    Modal__Header,
    Modal__Title,
    Modal__CloseIcon,
    Modal__Content,
    Modal__Controls,
    WaitModal,
};
