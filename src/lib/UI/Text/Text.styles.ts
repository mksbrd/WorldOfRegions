import styled from "styled-components";

const Text = styled.div`
  transition: color 500ms;
  font-size: 16px;
  color: ${(props: { theme: any; }) => props.theme.color};
`;

export const Styled = {
    Text,
};