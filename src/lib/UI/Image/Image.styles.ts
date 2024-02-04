import styled from "styled-components";
import FlexBox from "../FlexBox";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Image__Holder = styled(FlexBox)<{ srcEmpty: boolean }>`
  flex-wrap: nowrap;
  position: relative;
  outline: none !important;
  border: ${({theme, srcEmpty}) => srcEmpty ? `1px solid  ${theme.color}` : undefined};
  box-sizing: border-box;
  overflow: hidden;
`
const Img = styled.img`
  margin: 0 !important;
  user-select: none;
  -webkit-user-drag: none;
  min-width: 100%;
  background-color: ${({theme}) => theme.optionHoverColor};
`
const Empty__Src = styled(FlexBox)`
  min-width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.optionHoverColor};
`

const Image__Loader__Holder = styled(FlexBox)`
  overflow: hidden;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
`
const Custom__Icon = styled(FontAwesomeIcon)`
  height: 30px;
  width: 30px;
  margin: auto;
  color: ${({theme}) => theme.color};
`

export const Styled = {
    Empty__Src,
    Custom__Icon,
    Image__Holder,
    Img,
    Image__Loader__Holder
}