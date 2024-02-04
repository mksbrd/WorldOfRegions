import styled from "styled-components";

const TextArea = styled("textarea")<{ error: boolean }>`
  cursor: pointer;
  min-width: 100px;
  transition: 500ms;
  display: flex;
  flex-grow: 1;
  flex-wrap: nowrap;
  box-sizing: border-box;
  font-size: 14px;
  font-family: inherit;
  border-width: 1px;
  border-style: solid;
  resize: none;
  height: 100px;
  padding: 10px 5px;
  border-color: ${({
                     error,
                     theme
                   }) => error ? theme.errorMessageBackgroundColor : theme.borderColor};
  outline: ${({
                theme,
                error,
              }) => error ? theme.errorMessageBackgroundColor : undefined};
  border-radius: 4px;
  -moz-outline-radius: 10px;
  background-color: ${({theme}) => theme.backgroundColor};
  color: ${({theme}) => theme.color};

  ::placeholder {
    user-select: none;
    color: ${(props: { theme: any; }) => props.theme.placeholderColor};
  }


  &:focus {
    cursor: initial;
    border-color: ${({theme}) => theme.focusedInputBorderColor};
    outline: 1px solid ${({theme}) => theme.focusedInputBorderColor};;
  }

  &:active {
    cursor: initial;
    border-color: ${({theme}) => theme.focusedInputBorderColor};
    outline: 1px solid ${({theme}) => theme.focusedInputBorderColor};;
  }
`

export const Styled = {
    TextArea
}