import styled from "styled-components";
import FlexBox from "../../lib/UI/FlexBox";
import Image from "../../lib/UI/Image";

const Country__Title = styled.h2`
  text-align: center;
  margin: 0;
  padding: 10px 0;
  background-color: ${({theme}) => theme.backgroundColor};
  color: ${({theme}) => theme.color};
  font-size: 4vw;
  font-weight: bold;

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
const Country__Image = styled(Image)`
  width: 100%;
  padding: 15px 0;
  background-color: ${({theme}) => theme.backgroundColor};
  height: 50vw;

  @media (min-width: 1100px) {
    height: 550px;
  }
  @media (max-width: 800px) {
    height: 75vw;
  }
`
const Country__Separator = styled(FlexBox)`
  width: 100%;
  border-bottom: 1px solid ${({theme}) => theme.color};
`
const Country__Section__Background = styled(FlexBox)`
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  height: auto;
  background-color: ${({theme}) => theme.backgroundColor};
`
const Country__Left__Background = styled(FlexBox)<{ src: string }>`
  display: none;
  background-image: url(${({src}) => src});
  background-position: right;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  @media (min-width: 1100px) {
    display: flex;
    position: fixed;
    left: 0px;
    width: calc(calc(100vw - 1100px) / 2);
    top: 60px;
    bottom: 0px;
  }
`

const Country__Right__Background = styled(FlexBox)<{ src: string }>`
  display: none;
  background-image: url(${({src}) => src});
  background-position: left;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  @media (min-width: 1100px) {
    display: flex;
    position: fixed;
    right: 0px;
    width: calc(calc(100vw - 1100px) / 2);
    top: 60px;
    bottom: 0px;
  }
`


export const Styled = {
    Country__Right__Background,
    Country__Left__Background,
    Country__Section__Background,
    Country__Separator,
    Country__Image,
    Country__Title,
}