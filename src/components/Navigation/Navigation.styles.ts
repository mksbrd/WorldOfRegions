import styled from "styled-components";
import FlexBox from "../../lib/UI/FlexBox";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Text from "../../lib/UI/Text";

const Navigation__Place__Holder = styled(FlexBox)`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid transparent;
`
const Navigation__Fixed__Holder = styled(FlexBox)`
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 60px;
  background-color: ${({theme}) => theme.backgroundColor};
  border-bottom: 1px solid ${({theme}) => theme.color};
`
const Navigation__Content__Holder = styled(FlexBox)`
  padding: 0 10px;
  height: 100%;
`
const Navigation__Wide__Screen__Holder = styled(FlexBox)`
  display: none;
  height: 100%;
  @media (min-width: 800px) {
    display: flex;
    gap: 0 35px;
    margin-left: 65px;
  }
`
const Navigation__Small__Screen__Holder = styled(FlexBox)`
  display: flex;
  height: 100%;
  margin-left: auto;
  @media (min-width: 800px) {
    display: none;
  }
`
const Logo__Positioner = styled(FlexBox)`
  margin: auto 0;
`
const Menu__Bars__Icon = styled(FontAwesomeIcon)`
  color: ${({theme}) => theme.color};
  cursor: pointer;
  height: 30px;
  width: 30px;
  margin: auto 0;
`
const Navigation__Wide__Screen__Option = styled(Text)`
  font-size: 18px;
  margin: auto 0;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
const Navigation__Drawer__Content__Holder = styled(FlexBox)`
  flex-direction: column;
  min-width: 380px;
  padding: 10px;
  @media (max-width: 400px) {
    min-width: 100vw;
  }

`

export const Styled = {
    Navigation__Drawer__Content__Holder,
    Navigation__Wide__Screen__Option,
    Menu__Bars__Icon,
    Logo__Positioner,
    Navigation__Small__Screen__Holder,
    Navigation__Wide__Screen__Holder,
    Navigation__Place__Holder,
    Navigation__Fixed__Holder,
    Navigation__Content__Holder
}