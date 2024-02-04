import styled from "styled-components";
import Text from "../Text";
import {isMobileOnly} from "react-device-detect";
import FlexBox from "../FlexBox";
import TextInput from "../TextInput";

const Select = styled.select`
  transition: 500ms;
  background-color: ${(props: { theme: any; }) => props.theme.backgroundColor};
  border-color: ${(props: { theme: any; }) => props.theme.borderColor};
  color: ${(props: { theme: any; }) => props.theme.color};
  border-radius: 5px;
  min-width: 50px;
  max-width: 80px;
  font-size: 14px;

  &:focus {
    border-color: ${(props: { theme: any; }) => `solid 1px ${props.theme.borderColor} `};
    outline: none;
  }

  &:active {
    border-color: ${(props: { theme: any; }) => `solid 1px ${props.theme.borderColor} `};
    outline: none;
  }

  &:hover {
    outline: ${(props: { theme: any; }) => `solid 1px ${props.theme.borderColor} `};
  }
`;

const Option = styled.option`
  background-color: ${(props: { theme: any; }) => props.theme.backgroundColor};
  border-color: ${(props: { theme: any; }) => props.theme.borderColor};
  color: ${(props: { theme: any; }) => props.theme.color};

`;

const SimpleSelectField = styled.div<{ isFocused: boolean }>`
  flex-grow: 1;
  cursor: pointer;
  min-width: 100px;
  transition: color, background-color 500ms;
  display: flex;
  flex-wrap: nowrap;
  box-sizing: border-box;
  overflow: hidden;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props: { theme: any; }) => props.theme.borderColor};
  border-color: ${(props: { isFocused: any; theme: any; }) => props.isFocused ? `${props.theme.focusedInputBorderColor}` : undefined};
  outline: ${(props: { isFocused: any; theme: any; }) => props.isFocused ? `solid 1px ${props.theme.focusedInputBorderColor} ` : undefined};
  border-radius: 4px;
  height: 34px;
  color: ${(props: { theme: any; }) => props.theme.borderColor};
  max-width: 100%;

  &:hover {
    transition: 500ms;
    outline: ${(props: { isFocused: any; theme: any; }) => props.isFocused ? undefined : `solid 1px ${props.theme.borderColor} `};
  }

`;
const OptionsHolder = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-grow: 1;
  height: 34px;
  max-width: inherit;
  overflow: hidden;
`
const SelectedTag = styled.div`
  user-select: none !important;
  margin: auto 2px;
  border-radius: 5px;
  margin-bottom: 8px;
  display: flex;
  background-color: ${(props: { theme: any; }) => props.theme.selectTagsBackgroundColor};
}

&:first-of-type {
  margin-left: 4px;
}
`
const ClearButtonHolder = styled.div`
  z-index: 50;
  height: 12px;
  width: 12px;
  display: flex;
  flex-wrap: nowrap;
  margin: 10px 5px 10px 5px;

  &:hover {
    background-color: #797979;
    border-radius: 15px;
  }
`
const Placeholder__Holder = styled(FlexBox)`
  height: 100%;
  width: 100%;
  flex-grow: 1;
`
const Placeholder = styled.div`
  font-size: 13px;
  user-select: none;
  color: ${(props: { theme: any; }) => props.theme.placeholderColor};
  margin-left: 10px;
  margin-bottom: auto;
  margin-top: auto;
`
const SimpleSelectOption = styled.div<{ isChecked?: boolean, isCustom: boolean }>`
  align-items: center;
  cursor: pointer;
  display: flex;
  padding: 2px 0;
  min-width: 100%;
  background-color: ${({
                         theme,
                         isChecked,
                         isCustom
                       }) => isChecked && !isCustom ? theme.optionHoverColor : theme.backgroundColor};;
  min-height: 30px;

  &:hover {
    background-color: ${({theme, isCustom}) => !isCustom ? theme.optionHoverColor : undefined};;
  }
`
const SimpleOptionsHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`
const MultiOptionsHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`
const SimpleSelectOptionText = styled(Text)`
  margin-left: 5px;
  font-weight: ${isMobileOnly ? 'bold' : undefined};
  padding: 5px 5px;
`
const ContentsHolder = styled(FlexBox)`
  max-width: inherit;
  flex-grow: 1;
`
const CustomTextInput = styled(TextInput)`
  z-index: -1;
  position: absolute;
  border: none;
  width: 1px;
`
const SimpleSelect__Field__Value__Text = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100% - 6px);
  margin: 0 2px;
  font-size: 13px;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
  white-space: nowrap;
`
const Control__Button__Holder = styled(FlexBox)`
  width: ${isMobileOnly ? '100%' : undefined};
  flex-direction: ${isMobileOnly ? 'column' : undefined};
  margin-left: ${isMobileOnly ? '4px' : 'auto'};
  margin-right: 4px;
`
const Custom__Option = styled(FlexBox)`
  height: 100%;
  min-width: 100%;
`
const Loading__More__Holder = styled(FlexBox)`
  padding-top: 2px;
  padding-bottom: 4px;
  flex-direction: column;
`
const Loading__More__Label = styled(Text)`
  font-weight: bold;
  font-size: 12px;
  text-align: center;
`
const No__Offers__Label = styled(Text)`
  user-select: none;
  padding: 10px 2px;
  text-align: center;
  font-weight: bold;
`
export const Styled = {
    No__Offers__Label,
    Loading__More__Label,
    Loading__More__Holder,
    Custom__Option,
    SimpleSelectOption,
    SimpleSelectOptionText,
    MultiOptionsHolder,
    SimpleOptionsHolder,
    Select,
    Option,
    SimpleSelectField,
    OptionsHolder,
    SelectedTag,
    Placeholder__Holder,
    Placeholder,
    ClearButtonHolder,
    ContentsHolder,
    CustomTextInput,
    SimpleSelect__Field__Value__Text,
    Control__Button__Holder
}