import styled from "styled-components";
import Image from "../../lib/UI/Image";
import FlexBox from "../../lib/UI/FlexBox";
import {rgba} from "polished";
import Text from "../../lib/UI/Text";

const Continent__Page__Title = styled.h1`
  text-align: center;
  margin: 10px 0;
  padding: 0;
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
const Continent__InterActice__Image = styled(Image)`
  width: 100%;
  margin: 15px 0;
  background-color: transparent;
  height: 50vw;

  @media (min-width: 1100px) {
    height: 550px;
  }
  @media (max-width: 800px) {
    height: 75vw;
  }
`
const Continent__Content__Holders = styled(FlexBox)`
  width: 100%;
  height: auto;
  flex-direction: column;
  padding-bottom: 20px;
  flex-wrap: nowrap;
`
const Continent__Separator = styled(FlexBox)`
  width: 100%;
  border-bottom: 1px solid ${({theme}) => theme.color};
`
const Continent__Countries__Title = styled.h2`
  margin: 10px 0;
  padding: 0 10px;
  padding-top: 10px;
  color: ${({theme}) => theme.color};
  text-align: left;
`
const Countries__Holder = styled(FlexBox)`
  flex-direction: initial;
  margin: 0 10px;
  gap: 10px;
`
const Country__Box = styled.a`
  display: flex;
  text-decoration: none;
  cursor: pointer;
  width: calc(25vw - 12.5px);
  height: 80px;
  border-radius: 5px;
  box-sizing: border-box;
  border: 1px solid ${({theme}) => theme.color};
  transition: background-color 200ms;
  @media (min-width: 1100px) {
    width: 262.5px;
  }
  @media (max-width: 800px) {
    width: calc(33.33vw - 14px)
  }
  @media (max-width: 650px) {
    width: calc(50vw - 15px)
  }
  @media (max-width: 450px) {
    width: calc(100vw - 10px)
  }

  &:hover {
    background-color: ${({theme}) => rgba(theme.color, 0.3)};
  }
`
const Country__Flag__Image = styled(Image)`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin: auto 10px;
  object-fit: cover;
  object-position: center;

`
const Country__Name = styled.h3`
  margin: auto 0;
  padding: 0;
  color: ${({theme}) => theme.color};
`
const Country__ToolTip__Content = styled(FlexBox)`
  min-height: 250px;
  padding: 5px;
  width: 100%;
  flex-wrap: nowrap;
  max-width: 600px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`
const Country__Image__Positioner = styled(FlexBox)`
  position: relative;
  width: 250px;
  height: 250px;
  min-width: 250px;
  margin: auto;
  @media (max-width: 600px) {
    margin: 0;
    width: calc(100% - 10px);
  }
`
const Country__Image = styled(Image)`
  height: 100%;
  object-fit: cover;
  object-position: center;
  width: 100%;

  border-radius: 10px;
`
const Country__ToolTip__Country__Flag = styled(Image)`
  width: 80px;
  position: absolute;
  top: 5px;
  object-fit: scale-down;
  object-position: center;
  background-color: transparent;
  right: 5px;
  height: 40px;
`
const Country__ToolTip__Content__Holder = styled(FlexBox)`
  flex-direction: column;
  padding: 0 10px;
  min-width: 200px;
  flex-wrap: nowrap;
  flex-grow: 1;
  @media (max-width: 600px) {
    padding-left: 0;
    margin-top: 10px;
  }
`
const Country__ToolTip__Country__Name = styled(Text)`
  font-size: 24px;
  font-weight: bold;
`
const Country__ToolTip__Detail = styled(Text)`
`
const Country__Details__Holder = styled(FlexBox)`
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 8px;
  padding: 10px 0;
`
const About__Continent__Title = styled.h2`
  margin: 10px 0;
  padding: 0 10px;
  padding-top: 10px;
  color: ${({theme}) => theme.color};
  text-align: left;
`
const About__Contient__Description = styled(Text)`
  padding: 0 10px;
`
const Continent__Filter__Holder = styled(FlexBox)`
  max-width: 400px;
  margin: 0 10px;
  margin-bottom: 15px;
`
const Continent__Search__Input = styled(Text)`
  padding: 0 10px;
  font-weight: bold;
  margin-bottom: 5px;
`

export const Styled = {
    Continent__Search__Input,
    Continent__Filter__Holder,
    About__Contient__Description,
    About__Continent__Title,
    Country__Details__Holder,
    Country__ToolTip__Detail,
    Country__ToolTip__Country__Flag,
    Country__ToolTip__Country__Name,
    Country__ToolTip__Content__Holder,
    Country__Image__Positioner,
    Country__Image,
    Country__ToolTip__Content,
    Country__Name,
    Country__Flag__Image,
    Country__Box,
    Countries__Holder,
    Continent__Countries__Title,
    Continent__Separator,
    Continent__Content__Holders,
    Continent__InterActice__Image,
    Continent__Page__Title
}