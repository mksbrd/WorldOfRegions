// @ts-ignore
import styled from "styled-components";

const Input = styled.input<{ hideTextInput: boolean }>`
  position: relative;
  max-width: unset !important;
  text-decoration: none;
  font-size: 13px;
  flex-grow: ${(props: { hideTextInput: any; }) => props.hideTextInput ? 0 : 1};
  background-color: transparent;
  color: ${(props: { theme: any; }) => props.theme.color};
  padding: 0;
  min-height: 32px;
  height: 32px;
  max-height: 32px;
  border: none;
  border-radius: 4px;
  -moz-outline-radius: 4px;
  outline: none;
  cursor: pointer;

  ::placeholder {
    user-select: none;
    color: ${(props: { theme: any; }) => props.theme.placeholderColor};
  }


  &:focus {
    cursor: initial;
    border: none;
    outline: none;
  }

  &:active {
    border: none;
    outline: none;
  }
`;

const TextInput = styled.div<{ error?: boolean, isChildFocused?: boolean }>`
  cursor: pointer;
  min-width: 100px;
  transition: 500ms;
  display: flex;
  flex-grow: 1;
  overflow-x: hidden;
  flex-wrap: nowrap;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: ${({
                     error,
                     isChildFocused,
                     theme
                   }) => error ? theme.errorMessageBackgroundColor : isChildFocused ? `${theme.focusedInputBorderColor}` : theme.borderColor};
  outline: ${({
                isChildFocused,
                theme,
                error,
              }) => error ? theme.errorMessageBackgroundColor : isChildFocused ? `solid 1px ${theme.focusedInputBorderColor} ` : undefined};
  border-radius: 4px;
  -moz-outline-radius: 10px;
  height: 34px;
  color: ${(props: { theme: any; }) => props.theme.borderColor};

  &:hover {
    transition: 500ms;

    outline: ${({
                  isChildFocused,
                  theme,
                  error
                }) => error ? undefined : isChildFocused ? undefined : `solid 1px ${theme.borderColor} `};
  }
`
const ClearButtonHolder = styled.div`
  z-index: 1000;
  height: 12px;
  width: 12px;
  display: flex;
  flex-wrap: nowrap;
  margin: 10px 5px;

  &:hover {
    background-color: #797979;
    border-radius: 15px;
  }
`
const SearchIconHolder = styled.div<{ showIcon: boolean }>`
  display: flex;
  height: ${(props: { showIcon: any }) => props.showIcon ? '32px' : `5px`};
  width: ${(props: { showIcon: any }) => props.showIcon ? '26px' : `5px`};
  min-width: 5px;
`
export const Styled = {
    SearchIconHolder,
    TextInput,
    Input,
    ClearButtonHolder,
};