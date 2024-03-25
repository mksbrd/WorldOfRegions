import styled from "styled-components";
import FlexBox from "../../../../lib/UI/FlexBox";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Text from "../../../../lib/UI/Text";

const Social__Media__Content__Holder = styled(FlexBox)`
  flex-wrap: nowrap;
  padding: 10px 0;
  justify-content: space-between;

  @media (max-width: 900px) {
    gap: 35px;
    justify-content: normal;
    flex-wrap: wrap;
    margin: 0 auto;
  }
`
const Social__Media__Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  width: 25px;
  height: 25px;
  color: ${({theme}) => theme.color};
  @media (max-width: 900px) {
    width: 32px;
    height: 32px;
    margin: 0 auto 10px auto;
  }
`
const Social__Media__Anchor = styled.a`
  display: flex;
  text-decoration: none;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`
const Social__Media__Title = styled(Text)`
  text-align: center;
  font-size: 17px;
  font-weight: bold;
  text-decoration: none;
  display: none;
  @media (max-width: 900px) {
    display: flex;
  }
`


export const Styled = {
    Social__Media__Title,
    Social__Media__Anchor,
    Social__Media__Icon,
    Social__Media__Content__Holder
}