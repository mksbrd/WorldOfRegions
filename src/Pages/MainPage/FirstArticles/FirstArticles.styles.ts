import styled from "styled-components";
import FlexBox from "../../../lib/UI/FlexBox";
import Image from "../../../lib/UI/Image";
import {rgba} from "polished";
import Text from "../../../lib/UI/Text";

const First__Articles__Title = styled.h2`
  font-size: 2.5vw;
  color: ${({theme}) => theme.color};
  font-weight: bold;
  padding: 0 10px;
  margin: 15px 0 5px 0;
  @media (min-width: 1100px) {
    font-size: 27px;
  }
  @media (max-width: 800px) {
    font-size: 20px;
  }
  @media (max-width: 400px) {
    font-size: 20px;
  }
`

const First__Articles__Holder = styled(FlexBox)`
  margin-bottom: 10px;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`
const Article__Holder = styled(FlexBox)`
  height: 100%;
  flex-wrap: nowrap;
  @media (max-width: 700px) {
    flex-direction: column;
  }

`
const Article__Image = styled(Image)`
  height: 100px;
  width: 180px;
  flex-shrink: 0;
  object-fit: cover;
  @media (max-width: 700px) {
    width: calc(50vw - 20px);
    height: calc(25vw - 20px);
  }
  @media (max-width: 400px) {
    width: calc(100vw - 20px);
    height: calc(50vw - 20px);
  }
`
const Content__Holder = styled(FlexBox)`
  height: auto;
  flex-direction: column;
  margin-left: 10px;
  @media (max-width: 700px) {
    margin-top: 10px;
    margin-left: 0;
  }
`
const Article__Title = styled(Text)`
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
`
const Article__Location = styled(Text)`
  display: flex;
  flex-grow: 0;
  flex-shrink: 1;
  color: ${({theme}) => rgba(theme.color, 0.6)};
  margin-bottom: 4px;
`
const Anchor = styled.a`
  cursor: pointer;
  display: flex;
  height: auto;
  flex-wrap: nowrap;
  width: calc(50% - 20px);
  padding: 10px;
  transition: background-color 200ms;
  @media (max-width: 400px) {
    width: calc(100% - 20px);
  }

  &:hover {
    background-color: ${({theme}) => rgba(theme.color, 0.05)};
  }

`


export const Styled = {
    Anchor,
    Article__Location,
    Article__Title,
    Content__Holder,
    Article__Image,
    Article__Holder,
    First__Articles__Title,
    First__Articles__Holder
}