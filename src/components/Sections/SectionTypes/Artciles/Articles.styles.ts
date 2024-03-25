import styled from "styled-components";
import FlexBox from "../../../../lib/UI/FlexBox";
import Button from "../../../../lib/UI/Button";

const Articles__Section__Content__Holder = styled(FlexBox)`
  flex-direction: column;
  gap: 10px;
  flex-wrap: nowrap;

`

const Articles__Button = styled(Button)`
  margin: 0 auto;
  padding: 0 15px;
  min-width: 150px;
`

export const Styled = {
    Articles__Button,
    Articles__Section__Content__Holder
}