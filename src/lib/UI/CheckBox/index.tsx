import {Styled} from "./CheckBox.styles";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons/faCheck";

enum checkBoxType {
    circle = 'circle',
    square = 'square'
}

type CheckBoxProps = {
    error?: boolean
    isDisabled?: boolean
    type?: checkBoxType
    style?: React.CSSProperties
    isCheckedProp?: boolean
    title?: string | number | any
    value?: string
    onChange?: any
}
const defaultProps = {
    type: checkBoxType.circle,
    error: false,
    isDisabled: false,
    onChange: undefined,
    style: undefined,
    title: '',
    value: '',
    isCheckedProp: false
}

const CheckBox = ({
                      type = checkBoxType.circle,
                      error,
                      isDisabled,
                      style,
                      title,
                      value,
                      isCheckedProp,
                      onChange
                  }: CheckBoxProps) => {

    const onClick = () => {
        if (onChange && !isDisabled) {
            if (isCheckedProp) {
                onChange(title, value ?? '', false)
            } else {
                onChange(title, value ?? '', true)
            }
        }
    }

    const checkboxTypes = {
        [checkBoxType.square]: 4,
        [checkBoxType.circle]: 8
    }

    return (
        <Styled.CheckBoxHolder
            isDisabled={!!isDisabled}
            style={style}
            onClick={onClick}
        >
            <Styled.CheckBox
                radius={Number(checkboxTypes[type as checkBoxType])}
                error={!!error}
                isDisabled={!!isDisabled}
                isChecked={isCheckedProp as boolean}
            >
                <Styled.FontHolder
                    isChecked={isCheckedProp as boolean}
                >
                    <FontAwesomeIcon
                        icon={faCheck}
                        style={{
                            marginBottom: "6px",
                            width: "10px",
                            height: "10px"
                        }}
                    />
                </Styled.FontHolder>
            </Styled.CheckBox>
            <Styled.CheckBoxLabel
                isDisabled={!!isDisabled}
                error={!!error}
                style={{
                    fontSize: '14px'
                }}
            >
                {error}
                {title}
            </Styled.CheckBoxLabel>


        </Styled.CheckBoxHolder>


    )
}
CheckBox.defaultProps = defaultProps;
export default CheckBox