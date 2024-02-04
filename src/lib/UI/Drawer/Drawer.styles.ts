import styled, {css} from 'styled-components';
import {motion} from 'framer-motion';
import FlexBox from "../FlexBox";

/**
 * Drawer Base Styles
 */

const BaseDrawerStyles = css`
  flex: 1 0 auto;
  display: flex;
  outline: 0;
  z-index: 9999;
  position: fixed;
  overflow-y: auto;
  flex-direction: column;
`;

const Drawer__Header = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  border-bottom: 1px solid ${({theme}) => theme.borderColor};
`;

const Drawer__Header__Title = styled.div`
  color: ${({theme}) => theme.color};
  font-size: 18px;
  padding: 0 5px;
`;

const Drawer__Header__CloseBtn = styled.div`
  color: ${({theme}) => theme.color};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 40px;
  height: 40px;
  transition: all .1s ease-in;
`;

const Drawer__Content = styled.div`
  overflow: auto;
  flex-grow: 1;
`;

const Drawer__Controls = styled.div`
  display: flex;
  flex-shrink: 0;
  min-height: 50px;
  border-top: 1px solid ${({theme}) => theme.borderColor};
`;

const Drawer = styled(motion.div)`
  ${BaseDrawerStyles}
  background-color: ${({theme}) => theme.backgroundColor};
  box-shadow: 0px 12px 10px 10px rgb(0 0 0 / 15%);
  overflow: hidden;
`;
const Drawer__Header__Title__Holder = styled(FlexBox)`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: 50px;
`
export const Styled = {
    Drawer,
    Drawer__Header,
    Drawer__Header__Title,
    Drawer__Header__CloseBtn,
    Drawer__Content,
    Drawer__Controls,
    Drawer__Header__Title__Holder,
};
