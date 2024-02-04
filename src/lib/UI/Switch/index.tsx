import {Styled} from "./Switch.styles";
import React from "react";

type SwitchProps = {
    isChecked: boolean
    setIsChecked: (value: boolean) => void | React.Dispatch<React.SetStateAction<boolean>>
    isDisabled?: boolean

}
const defaultProps = {
    isDisabled: false

}

const Switch = (
    {
        isChecked,
        setIsChecked,
        isDisabled
    }: SwitchProps
) => {

    const onClickHandler = () => {
        if (!isDisabled) {
            setIsChecked(!isChecked)
        }
    }

    return (
        <Styled.SwitchHolder
            isDisabled={!!isDisabled}
            isChecked={isChecked}
            onClick={onClickHandler}
        >
            <Styled.Switch_Inside_Selector_Ball
                isDisabled={!!isDisabled}
                isChecked={isChecked}
            />
        </Styled.SwitchHolder>
    )

}
Switch.defaultProps = defaultProps;
export default Switch