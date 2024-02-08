import styled from "styled-components";
import FlexBox from "../../../lib/UI/FlexBox";
import Image from "../../../lib/UI/Image";
import {rgba} from "polished";
import Text from "../../../lib/UI/Text";

const Image__Gallery__Holder = styled(FlexBox)`
  position: relative;
  width: 100%;
  height: auto;

`
const Swiper__Image = styled(Image)`
  width: 100%;
  height: 550px;
  @media (max-width: 1100px) {
    height: 50vw;
  }
`
const Swipe__Slide__Content__Holder = styled(FlexBox)`
  width: 100%;
  height: auto;
  position: relative;
  flex-wrap: nowrap;
  cursor: pointer;
`
const Images__Navigation__Dots = styled(FlexBox)`
  position: absolute;
  flex-wrap: nowrap;
  gap: 0 5px;
  padding: 5px 5px;
  z-index: 1;
  left: calc(50% - 50px);
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  cursor: pointer;
  bottom: 0px;
  background-color: ${({theme}) => rgba(theme.backgroundColor, 0.3)};
`
const Image__Navigation__Dot = styled(FlexBox)<{ isFocused: boolean }>`
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background-color: ${({theme, isFocused}) => rgba(theme.color, isFocused ? 1.0 : 0.6)};

  &:hover {
    transform: scale(1.05);
  }
`
const Slide__Additional__Content__Holder = styled(FlexBox)`
  position: absolute;
  flex-direction: column;
  flex-wrap: nowrap;
  bottom: 0px;
  border-top-right-radius: 15px;
  text-shadow: black 2px 2px 2px;
  padding: 25px;
  left: 0px;
`
const Image__Slide__Title = styled(Text)`
  color: ${({theme}) => theme.color};
  font-size: 4vw;
  font-weight: bold;
  cursor: pointer;

  @media (min-width: 1100px) {
    font-size: 44px;
  }
  @media (max-width: 800px) {
    font-size: 30px;
  }
  @media (max-width: 400px) {
    font-size: 20px;
  }
`
const Image__Slide__Description = styled(Text)`
  font-size: 2vw;
  @media (min-width: 1100px) {
    font-size: 22px;
  }
  @media (max-width: 800px) {
    font-size: 20px;
  }
  @media (max-width: 400px) {
    font-size: 15px;
  }
`
const Image__SEO = styled.a`
  visibility: hidden;
  width: 0px;
  height: 0px;
  z-index: -9999;

`


export const Styled = {
    Image__SEO,
    Image__Slide__Description,
    Image__Slide__Title,
    Slide__Additional__Content__Holder,
    Image__Navigation__Dot,
    Images__Navigation__Dots,
    Swipe__Slide__Content__Holder,
    Swiper__Image,
    Image__Gallery__Holder
}