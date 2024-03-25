import styled from "styled-components";
import FlexBox from "../../../lib/UI/FlexBox";
import Image from "../../../lib/UI/Image";

const Article__Title = styled.h2`
  color: ${({theme}) => theme.color};
  font-size: 26px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 15px;
  padding: 0;
  @media (max-width: 700px) {
    margin-top: 15px;
  }
`
const Article__Box = styled.a`
  display: flex;
  text-decoration: none;
  width: calc(100% - 20px);
  height: auto;
  padding: 10px;
  border: 1px solid ${({theme}) => theme.color};
  border-radius: 5px;
  flex-wrap: nowrap;

  &:hover ${Article__Title} {
    text-decoration: underline;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`
const Article__Image = styled(Image)`
  width: 400px;
  height: 250px;
  border-radius: 10px;
  object-fit: cover;

  flex-shrink: 0;
  @media (max-width: 700px) {
    width: 100%;
    height: calc(50vw - 15px);
  }
`
const Article__Content__Holder = styled(FlexBox)`
  flex-direction: column;
  flex-wrap: nowrap;
  margin-left: 10px;
`
const Article__Content = styled.h4`
  margin: 0;
  font-weight: normal;
  padding: 0;
  color: ${({theme}) => theme.color};
  text-overflow: ellipsis;
  display: -webkit-box;
  max-height: calc(8em + 32px);
  -webkit-line-clamp: 8;
  overflow: hidden;
  line-height: 22px;
  -webkit-box-orient: vertical;
  font-size: 18px;
`


export const Styled = {
    Article__Content,
    Article__Title,
    Article__Content__Holder,
    Article__Box,
    Article__Image
}