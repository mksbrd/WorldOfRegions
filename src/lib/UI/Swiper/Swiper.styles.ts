import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FlexBox from "../FlexBox";
import {rgba} from "polished";

const Direction__Button__Icon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  margin: auto;
  color: ${({theme}) => theme.color};
  transition: 200ms;
`
const Prev__Button = styled(FlexBox)<{ isDark: boolean }>`
  height: 36px;
  width: 36px;
  min-width: 36px;
  position: absolute;
  left: 0;
  top: calc(50% - 18px);
  z-index: 2;
  border-radius: 50%;
  border: 1px solid ${({theme}) => theme.color};
  background-color: ${({theme, isDark}) => isDark ? rgba(theme.backgroundColor, 1.0) : rgba(theme.color, 0.05)};
  cursor: pointer;

  &:hover ${Direction__Button__Icon} {
    transform: scale(1.2);
  }
`
const Next__Button = styled(FlexBox)<{ isDark: boolean }>`
  height: 36px;
  width: 36px;
  min-width: 36px;
  right: 0;
  top: calc(50% - 18px);
  position: absolute;
  z-index: 2;
  border-radius: 50%;
  border: 1px solid ${({theme}) => theme.color};
  background-color: ${({theme, isDark}) => isDark ? rgba(theme.backgroundColor, 1.0) : rgba(theme.color, 0.05)};
  cursor: pointer;

  &:hover ${Direction__Button__Icon} {
    transform: scale(1.2);
  }
`
export const Styled = {
    Prev__Button,
    Next__Button,
    Direction__Button__Icon
}