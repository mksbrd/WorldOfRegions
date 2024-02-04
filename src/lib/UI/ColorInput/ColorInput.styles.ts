import styled from "styled-components";
import FlexBox from "../FlexBox";
import Text from "../Text";

const Input__Holder = styled(FlexBox)`
  max-width: 400px;
  width: 100%;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 80px;
`
const Color__Input = styled.input`
  border: 1px solid ${({theme}) => theme.color};
  background-color: inherit;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    outline: 1px solid ${({theme}) => theme.color};
  }
`
const Color__Presenter = styled(FlexBox)<{ color: string | undefined }>`

`
const Input__Title = styled(Text)`
  font-size: 13px;
  margin-bottom: 2px;
`


export const Styled = {
    Input__Title,
    Color__Presenter,
    Input__Holder,
    Color__Input
}