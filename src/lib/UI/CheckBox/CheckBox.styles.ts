// @ts-ignore
import styled from "styled-components";
import FlexBox from "../FlexBox";

const CheckBox = styled.div<{ isDisabled: boolean, isChecked: boolean, error: boolean, radius: number }>`
  user-select: none;
  transition: 200ms;
  border-radius: ${({radius}) => radius}px;
  margin: auto 4px auto 0;
  height: 14px;
  min-width: 14px;
  width: 14px;
  box-sizing: border-box;
  background-color: ${({
                         theme,
                         isChecked,
                       }) => isChecked ? theme.buttonBackgroundColor : 'transparent'};
  border: 1px solid ${({
                         theme,
                         isChecked,
                         isDisabled,
                         error
                       }) => error ? theme.errorMessageBackgroundColor : isChecked ? theme.buttonBackgroundColor : isDisabled ? 'grey' : theme.borderColor};


`;
const FontHolder = styled.div<{ isChecked: boolean }>`
  rotation-point: top;
  animation: growDown alternate 200ms;
  max-height: 12px;
  max-width: 12px;
  display: ${({isChecked}) => isChecked ? undefined : 'none'};;
  transform-origin: top center;
  color: ${({isChecked}) => isChecked ? 'white' : 'transparent'};;;
  z-index: 1000;
`
const CheckBoxHolder = styled(FlexBox)<{ isDisabled: boolean }>`
  user-select: none !important;
  text-align: center;
  flex-wrap: nowrap;
  display: flex;
  max-width: 100%;
  cursor: ${({isDisabled}) => isDisabled ? 'not-allowed' : 'pointer'} !important;;

  &:hover ${CheckBox} {
    transform: ${({isDisabled}) => isDisabled ? undefined : 'scale(1.1)'}
  }

`
const CheckBoxLabel = styled.span<{ isDisabled: boolean, error: boolean }>`
  color: ${({
              isDisabled,
              theme,
              error
            }) => error ? theme.errorMessageBackgroundColor : isDisabled ? 'grey' : theme.color} !important;
  margin: auto 0;
  width: auto;
  transition: 200ms;
  overflow: hidden;
  display: block;
  text-align: left;
  text-overflow: ellipsis;
  white-space: normal;
`

export const Styled = {
    CheckBoxLabel,
    CheckBox,
    FontHolder,
    CheckBoxHolder
};