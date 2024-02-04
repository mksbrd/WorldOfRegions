import styled from "styled-components";
import FlexBox from "../FlexBox";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {rgba} from "polished";
import Text from "../Text";

const DropFilePlaceHolder = styled(FlexBox)<{ elementHeight: number }>`
  flex-direction: column;
  padding: 10px;
  border-radius: 5px;
  height: calc(${({elementHeight}) => elementHeight}px - 20px);
  cursor: pointer;
  border: 1px solid ${({theme}) => theme.color};

  &:hover {
    outline: 1px solid ${({theme}) => theme.color};
  }
`
const Elements__Positioner = styled(FlexBox)`
  flex-direction: column;
  margin: auto;
`
const Drop__File__Icon = styled(FontAwesomeIcon)`
  color: ${({theme}) => rgba(theme.color, 0.6)};
  height: 60px;
  width: 60px;
  margin: auto;
`

const Drop__File__Label = styled(Text)`
  margin: 0 auto;
  margin-top: 10px;
  color: ${({theme}) => rgba(theme.color, 0.6)};
`
const Drop__File__Types = styled(Text)`
  color: ${({theme}) => rgba(theme.color, 0.6)};
  font-size: 12px;
  margin: 0 auto;
  margin-top: 4px;
`
const Selected__File = styled(Text)`
  text-align: center;
`
const Filed__Drop__Input = styled.input<{ elementHeight: number }>`
  opacity: 0;
  visibility: hidden;
  z-index: -999;
  width: 100%;
`
const Delete__File__Button = styled(FontAwesomeIcon)`
  color: red;
  height: 14px;
  width: 14px;
  margin: 3px 0 0 5px;

  &:hover {
    background-color: #797979;
    border-radius: 15px;
  }
`
const Selected__File__Holder = styled(FlexBox)`
  padding: 10px;
  background-color: ${({theme}) => rgba(theme.color, 0.1)};
  border-radius: 15px;
  border: 1px solid ${({theme}) => rgba(theme.color, 0.6)};
  z-index: 100;
  flex-wrap: nowrap;
`
export const Styled = {
    Selected__File__Holder,
    Delete__File__Button,
    Filed__Drop__Input,
    Selected__File,
    Drop__File__Types,
    Drop__File__Label,
    Drop__File__Icon,
    DropFilePlaceHolder,
    Elements__Positioner
}