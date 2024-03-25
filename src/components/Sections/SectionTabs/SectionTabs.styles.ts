import styled from "styled-components";
import FlexBox from "../../../lib/UI/FlexBox";
import Text from "../../../lib/UI/Text";
import {rgba} from "polished";

const Section__Tabs__Holder = styled(FlexBox)`
  flex-direction: initial;
  padding: 10px 0;
  flex-wrap: nowrap;
  overflow: auto;
`
const Section__Tab = styled(Text)`
  padding: 10px 20px;
  margin: auto 0;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  border-right: 1px solid ${({theme}) => theme.color};
  transition: color 200ms;

  &:hover {
    color: ${({theme}) => rgba(theme.color, 0.7)};
  }

  &:last-of-type {
    border-right: none;
  }
`
export const Styled = {
    Section__Tab,
    Section__Tabs__Holder
}