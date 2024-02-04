import styled from "styled-components";
import Text from "../Text";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const BrdLoader = styled.div`
  min-height: 30px;
  display: flex;
  margin: auto;
  overflow-x: visible;
  user-select: none !important;
`


const LoaderTextBold = styled(Text)<{ isbig: any }>`
  @keyframes BoldTextAnimation {
    100% {
      color: ${(props: { theme: any; }) => props.theme.optionHoverColor};
    }
    90% {
      color: ${(props: { theme: any; }) => props.theme.optionHoverColor};
    }
    50% {
      color: ${(props: { theme: any; }) => props.theme.optionHoverColor};
      color: ${(props: { theme: any; }) => props.theme.color};
    }
    30% {
      color: ${(props: { theme: any; }) => props.theme.color};
    }
    0% {
      color: ${(props: { theme: any; }) => props.theme.optionHoverColor};
    }
  }
  font-size: ${(props: { isbig: any; }) => props.isbig ? '5rem' : '18px'};
  animation: BoldTextAnimation 3s linear infinite;
  margin: auto 0;
  transition: none;
  overflow-x: visible;
  font-weight: bold;
  font-family: serif;
  line-height: 100px;
  @media (min-width: 1100px) {
    font-size: ${(props: { isbig: any; }) => props.isbig ? '5rem' : '18px'};
  }
`
const LoaderTextLighter = styled(Text)<{ isbig: any }>`
  @keyframes BoldTextAnimation {
    100% {
      color: ${(props: { theme: any; }) => props.theme.optionHoverColor};
    }
    90% {
      color: ${(props: { theme: any; }) => props.theme.optionHoverColor};
    }
    50% {
      color: ${(props: { theme: any; }) => props.theme.optionHoverColor};
      color: ${(props: { theme: any; }) => props.theme.color};
    }
    30% {
      color: ${(props: { theme: any; }) => props.theme.color};
    }
    0% {
      color: ${(props: { theme: any; }) => props.theme.optionHoverColor};
    }
  }
  font-size: ${(props: { isbig: any; }) => props.isbig ? '5rem' : '18px'};
  animation: BoldTextAnimation 3s linear infinite;
  transition: none;
  margin: auto 0;
  overflow-x: visible;
  line-height: 100px;
  width: auto;
  margin-left: ${(props: { isbig: any; }) => props.isbig ? '1rem' : '4px'};
  font-family: serif;
  font-weight: lighter;

  @media (min-width: 1100px) {
    font-size: ${(props: { isbig: any; }) => props.isbig ? '5rem' : '18px'};
  }
`
const FontAwesomeIcons = styled(FontAwesomeIcon)<{ isbig: any }>`
  @keyframes PlaneAnimation {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  margin-top: 5px;
  margin-bottom: 2px;
  animation: PlaneAnimation 2s linear infinite;
  padding-bottom: 20px;
  color: ${(props: { theme: any; }) => props.theme.color};
  font-size: ${(props: { isbig: any; }) => props.isbig ? '3em' : '10px'};
`
export const Styled = {
    BrdLoader,
    FontAwesomeIcons,
    LoaderTextBold,
    LoaderTextLighter

};