import {faChevronLeft, faChevronRight} from "@fortawesome/pro-solid-svg-icons";
import {isMobileOnly} from "react-device-detect";
import {Styled} from "./Swiper.styles";

type ButtonProps = {
    onClick: (event: any) => void
    isDark?: boolean
}

const NextButton = ({onClick, isDark}: ButtonProps) => {

    if (isMobileOnly) {
        return null
    }
    return (
        <Styled.Next__Button
            isDark={!!isDark}
            onClick={onClick}
        >
            <Styled.Direction__Button__Icon
                icon={faChevronRight}
            />
        </Styled.Next__Button>
    )
}
const PrevButton = ({onClick, isDark}: ButtonProps) => {

    if (isMobileOnly) {
        return null
    }
    return (
        <Styled.Prev__Button
            isDark={!!isDark}
            onClick={onClick}
        >
            <Styled.Direction__Button__Icon
                icon={faChevronLeft}
            />
        </Styled.Prev__Button>
    )

}


export {
    NextButton,
    PrevButton
}