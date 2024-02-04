import FlexBox from "../FlexBox";
import styled from "styled-components";

const Switch_Inside_Selector_Ball = styled(FlexBox)<{ isDisabled: boolean, isChecked: boolean }>`
  margin-top: 2px;
  transition: margin-left 300ms, background-color 300ms;
  margin-left: ${({isChecked}) => isChecked ? '22px' : '3px'};
  width: 18px;
  border-radius: 50%;

  background-color: ${({isChecked, isDisabled, theme}) => isDisabled ? 'white' : isChecked ? 'white' : theme.color};;
  height: 18px;
`

const SwitchHolder = styled(FlexBox)<{ isDisabled: boolean, isChecked: boolean }>`
  flex-wrap: nowrap;
  width: 45px;
  min-width: 45px;
  max-width: 45px;
  height: 24px;
  border-radius: 15px;
  box-sizing: border-box;
  border: 1px solid ${({theme}) => theme.borderColor};
  transition: background-color 200ms ${({
                                          isChecked,

                                        }) => isChecked ? '100ms' : '0'};
  cursor: ${({isDisabled}) => isDisabled ? 'not-allowed' : 'pointer'};
  background-color: ${({
                         theme,
                         isDisabled,
                         isChecked
                       }) => isDisabled ? theme.placeholderColor : isChecked ? theme.isCheckedSwitchGreen : undefined};
  overflow: hidden;

  &:hover ${Switch_Inside_Selector_Ball} {
  }
`


export const Styled = {
    SwitchHolder,
    Switch_Inside_Selector_Ball
}