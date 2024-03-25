import styled from "styled-components";
import FlexBox from "../../../lib/UI/FlexBox";
import {rgba} from "polished";
import Text from "../../../lib/UI/Text";

const Side__Data__Holder = styled(FlexBox)`
  flex-direction: column;
  min-width: 190px;
  width: 170px;
  border-left: 1px solid ${({theme}) => rgba(theme.color, 0.6)};
  padding: 25px 10px 25px 20px;
  margin: 25px 0;
  flex-wrap: nowrap;
  @media (max-width: 900px) {
    width: calc(100% - 20px);
    margin: 0;
    padding: 0 10px;
    border-left: none
  }
`

const Section__Titles = styled(Text)`
  font-size: 22px;
  padding-top: 0;
  padding-bottom: 10px;
  font-weight: bold;
  text-align: center;

  @media (max-width: 900px) {
    text-align: left;
    padding-top: 15px;
  }
`
const Social_Media__Title = styled(Text)`
  font-size: 22px;
  padding-top: 20px;
  padding-bottom: 10px;
  font-weight: bold;
  text-align: center;

  @media (max-width: 900px) {
    text-align: center;
  }
`

export const Styled = {
    Social_Media__Title,
    Side__Data__Holder,
    Section__Titles
}