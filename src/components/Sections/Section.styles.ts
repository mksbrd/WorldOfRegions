import styled from "styled-components";
import FlexBox from "../../lib/UI/FlexBox";

const Section__Holder = styled(FlexBox)`
  width: calc(100% - 20px);
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 10px;
`
const Section__Title = styled.h3`
  margin: 0;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  color: ${({theme}) => theme.color};
`


export const Styled = {
    Section__Title,
    Section__Holder
}