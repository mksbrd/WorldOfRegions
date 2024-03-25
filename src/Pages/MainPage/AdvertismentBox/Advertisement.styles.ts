import styled from "styled-components";
import FlexBox from "../../../lib/UI/FlexBox";
import Image from "../../../lib/UI/Image";

const Advertisement__Box__Holder = styled(FlexBox)`
  width: calc(100% - 10px);
  height: 219px;
  margin: 0 5px;
  @media (max-width: 1100px) {
    height: calc((100vw - 231px) / 4);
    width: calc(100vw - 231px);
  }
  @media (max-width: 900px) {
    width: 100vw;
    height: 25vw;
  }
`
const Advert__Image = styled(Image)`
  width: 100%;
  height: 100%;
`
const Advertisement__Anchor = styled.a`
  width: 100%;
  height: 100%;
`

export const Styled = {
    Advertisement__Anchor,
    Advert__Image,
    Advertisement__Box__Holder
}