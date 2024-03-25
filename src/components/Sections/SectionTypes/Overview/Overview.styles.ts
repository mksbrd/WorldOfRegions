import styled from "styled-components";
import FlexBox from "../../../../lib/UI/FlexBox";
import Text from "../../../../lib/UI/Text";

const Overview__Content__Holder = styled(FlexBox)`
  flex-direction: column;
  width: 100%;
  gap: 8px;
  height: auto;
`
const Overview__Option__Holder = styled(Text)`

`
const Overview__Quick__Description = styled(Text)`
  line-height: 20px;
`
const Anchor = styled.a`
  cursor: pointer;
  font-weight: bold;
  text-decoration: underline;
  color: ${({theme}) => theme.color};
`

export const Styled = {
    Overview__Quick__Description,
    Anchor,
    Overview__Content__Holder,
    Overview__Option__Holder
}