import styled from "styled-components";
import FlexBox from "../../lib/UI/FlexBox";

const Main__Page__Content__Holder = styled(FlexBox)`
  flex-direction: column;
  padding: 0 10px;
  width: 100%;
`
const Main__Page__Lower__Content__Holder = styled(FlexBox)`
  flex-wrap: nowrap;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`
const Main__Page__Content__left__Side = styled(FlexBox)`
  flex-direction: column;
  width: available;
`

export const Styled = {
    Main__Page__Content__left__Side,
    Main__Page__Lower__Content__Holder,
    Main__Page__Content__Holder
}