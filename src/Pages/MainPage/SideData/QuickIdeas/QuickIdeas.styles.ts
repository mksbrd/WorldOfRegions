import styled from "styled-components";
import FlexBox from "../../../../lib/UI/FlexBox";
import Image from "../../../../lib/UI/Image";
import Text from "../../../../lib/UI/Text";
import {rgba} from "polished";

const Quick__Ideas__Holder = styled(FlexBox)`
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 15px 0
`
const Quick__Idea__Box = styled(Image)`
  width: 100%;
  height: 100px;
  border-radius: 5px;
  @media (max-width: 900px) {
    height: 140px;
  }
`

const Quick__Idea__Title = styled(Text)`
  text-overflow: ellipsis;
  display: -webkit-box;
  max-height: 4em;
  -webkit-line-clamp: 4;
  overflow: hidden;
  line-height: 18px;
  -webkit-box-orient: vertical;
  font-size: 18px;
  font-weight: bold;
  flex-grow: 0;
  margin-top: 4px;
`
const SEO__Box__Holder = styled.a`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  cursor: pointer;
  text-decoration: none;

  &:hover ${Quick__Idea__Title} {
    text-decoration: underline;
  }

  @media (max-width: 900px) {
  }
`
const Quick__Idea__Location = styled(Text)`
  margin-top: 4px;
  color: ${({theme}) => rgba(theme.color, 0.6)};
`
const Quick__Ideas__PoweredBy = styled(Text)`
  text-align: center;
  font-size: 14px;
  margin-bottom: 5px;
  @media (max-width: 900px) {
    margin-top: -10px;
  }
`
const Content__On__Side__Holder = styled(FlexBox)`
  flex-direction: column;
  gap: 15px 0;
  @media (max-width: 900px) {
    display: none;
  }
`
const Content__Small__Screen = styled(FlexBox)`
  position: relative;
  width: 100%;
  display: none;
  @media (max-width: 900px) {
    display: flex;
  }
`


export const Styled = {
    Content__Small__Screen,
    Content__On__Side__Holder,
    Quick__Ideas__PoweredBy,
    Quick__Idea__Location,
    Quick__Idea__Title,
    SEO__Box__Holder,
    Quick__Ideas__Holder,
    Quick__Idea__Box
}