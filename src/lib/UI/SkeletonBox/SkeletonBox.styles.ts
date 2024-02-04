import styled from "styled-components";
import FlexBox from "../FlexBox";
import {rgba} from "polished";

const SkeletonBox = styled(FlexBox)`
  @keyframes skeletonColor {
    0% {
      background: ${({theme}) => rgba(theme.color, 0.3)}
    }
    50% {
      background: ${({theme}) => rgba(theme.color, 0.1)}
    }
    100% {
      background: ${({theme}) => rgba(theme.color, 0.3)}
    }
  }
  animation: skeletonColor 2s linear infinite;
  border-radius: 15px;
`
export const Styled = {
    SkeletonBox
}