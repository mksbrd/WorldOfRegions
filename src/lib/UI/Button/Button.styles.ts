// @ts-ignore
import styled from "styled-components";
import Text from "../Text";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const FontAwesomeCustomIcon = styled(FontAwesomeIcon)`
  transition: 500ms;
  margin: auto;
  color: ${(props: { theme: any; }) => props.theme.color};
  fill: ${(props: { theme: any; }) => props.theme.color};
`

const CustomText = styled(Text)`
  transition: 500ms;
  margin: auto;
  padding: 4px 8px;
  font-size: 14px;
`;
const Custom__Label__Holder = styled.span`
  margin: auto;
  color: ${({theme}) => theme.color};
  fill: ${({theme}) => theme.color};


`
const Button = styled.div<{ error: boolean }>`
  transition: 500ms;
  display: flex;
  cursor: pointer;
  border-radius: 5px;
  height: auto;
  align-items: center;
  align-content: center;
  min-height: 30px;
  box-sizing: border-box;
  border: 1px solid ${({theme, error}) => error ? theme.errorMessageBackgroundColor : theme.borderColor};
  background-color: ${(props: { theme: any; }) => props.theme.backgroundColor};

  &:hover {
    background-color: ${({theme, error}) => error ? theme.errorMessageColor : theme.borderColor};
  }

  &:hover ${CustomText} {
    color: ${(props: { theme: any; }) => props.theme.backgroundColor};;
  }

  &:hover ${FontAwesomeCustomIcon} {
    color: ${(props: { theme: any; }) => props.theme.backgroundColor};
    fill: ${(props: { theme: any; }) => props.theme.backgroundColor};
  }

  &:hover ${Custom__Label__Holder} {
    color: ${(props: { theme: any; }) => props.theme.backgroundColor};
    fill: ${(props: { theme: any; }) => props.theme.backgroundColor};
  }
`;


export const Styled = {
    Custom__Label__Holder,
    FontAwesomeCustomIcon,
    Button,
    CustomText,
};