import styled from "styled-components";
import FlexBox from "../FlexBox";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Text from "../Text";


const Alert__Box = styled(FlexBox)<{ type: any, elementHeight: any, disableAnimation: boolean }>`
  @keyframes apearAnimation {
    0% {
      opacity: 0;
    }
    5% {
      opacity: 1;
    }
    40% {
      opacity: 1;
      margin-top: 0;
    }
    43% {
      opacity: 0;
    }
    45% {
      opacity: 0;
      margin-top: -${({elementHeight}) => elementHeight - 2}px;
    }
    100% {
      opacity: 0;
      margin-top: -${({elementHeight}) => elementHeight - 2}px;
    }

  }
  z-index: 9000;
  background-color: ${({
                         type,
                         theme
                       }) =>
          type === 'Error' ? theme.errorMessageBackgroundColor :
                  type === 'Warning' ? theme.warningBackgroundColor :
                          type === 'Success' ? theme.successMessageBackgroundColor :
                                  theme.backgroundColor
  };

  min-width: 300px;
  border-radius: 5px;
  box-shadow: 0px 0px 6px 0px ${({theme}) => theme.isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.5)'};
  flex-wrap: nowrap;
  padding: 10px;
  overflow: hidden;
  animation: ${({disableAnimation}) => disableAnimation ? '' : '10s linear apearAnimation'};
`
const Box__Icon = styled(FontAwesomeIcon)<{ type: any }>`
  width: 30px;
  padding: 10px;
  height: 30px;
  margin: auto 0;
  color: ${({
              theme
            }) =>
          theme.color
  };
`
const Values__Holder = styled(FlexBox)`
  flex-direction: column;
  padding-right: 10px;
  width: 100%
`
const Title__Label = styled(Text)`
  font-weight: bold;
  font-size: 15px;

`
const Desc__Label = styled(Text)`
  padding: 5px 0;
  font-size: 13px;
`
export const Styled = {
    Alert__Box,
    Box__Icon,
    Values__Holder,
    Title__Label,
    Desc__Label
}