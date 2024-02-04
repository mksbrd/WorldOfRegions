import {Styled} from "./TextInput.styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import {faClose} from "@fortawesome/free-solid-svg-icons";
import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from "react";
import {faEye, faEyeSlash} from "@fortawesome/pro-solid-svg-icons";

type textFieldTypes = 'text' | 'password' | 'email'

type TextInputProps = {
    isAutoFocus?: boolean
    id?: string
    onEnterLoseFocus?: boolean
    onEnterPressed?: () => void
    error?: boolean
    errorLabel?: string
    textFieldType?: textFieldTypes
    title?: string
    name?: string
    hideTextInput?: boolean
    readOnly?: boolean
    style?: React.CSSProperties
    value?: any
    onClear?: any
    showIcon?: boolean
    isClearAble?: boolean
    placeholder?: string
    onChange?: any
    onFocus?: any
    onBlur?: any
    onClick?: any
    setFocusElement?: any
    autoComplete?: string
}
const defaultProps = {
    id: '',
    isAutoFocus: false,
    name: '',
    onEnterLoseFocus: true,
    autoComplete: undefined,
    onEnterPressed: () => false,
    error: false,
    errorLabel: '',
    textFieldType: 'text' as textFieldTypes,
    title: undefined,
    hideTextInput: false,
    style: undefined,
    readOnly: false,
    value: undefined,
    onChange: undefined,
    onClear: undefined,
    showIcon: true,
    isClearAble: true,
    placeholder: 'insert placeholder',
    onFocus: undefined,
    onBlur: undefined,
    onClick: undefined,
    setFocusElement: undefined
}

const TextInput = forwardRef<HTMLDivElement, TextInputProps>((
    {
        isAutoFocus,
        onEnterLoseFocus,
        id,
        name,
        autoComplete,
        onEnterPressed,
        error,
        errorLabel,
        textFieldType,
        title,
        hideTextInput,
        readOnly,
        value,
        onClear,
        setFocusElement,
        showIcon,
        isClearAble,
        placeholder,
        onChange,
        onFocus,
        onBlur,
        onClick,
        style,
    }, ref) => {


    const [isFocused, setIsFocused] = useState<Boolean>(false)

    const [showPassWord, setShowPassword] = useState<boolean>(false)

    const inputElement = useRef<any>(null)

    useImperativeHandle(ref, () => inputElement.current);

    const onClearHandler = () => {
        onClear()
    }

    const onFocusChange = () => {
        setIsFocused(true)
        if (onFocus) {
            onFocus()
        }
    }

    const setFocus = () => {
        if (onClick) {
            onClick()
        }
        inputElement.current?.focus();
    }

    const onBlurChange = () => {

        setIsFocused(false)
        if (onBlur) {
            onBlur()
        }

    }

    const changeHandler = (event: any) => {
        onChange(event)
    }

    const onShowPasswordClick = (event: any) => {
        event.stopPropagation()
        setShowPassword(!showPassWord)

    }
    const onKeyPress = (event: any) => {
        const key = event.key
        switch (key) {
            case 'Enter':
                if (onEnterLoseFocus) {
                    inputElement.current?.blur();
                }
                if (onEnterPressed) {
                    onEnterPressed()
                }
                break
        }
    }


    useEffect(() => {
        if (setFocusElement) {
            setFocusElement(inputElement)
        }
        if (isAutoFocus) {
            inputElement.current?.focus()
        }
    }, [])

    return (
        <Styled.TextInput
            error={!!error}
            onClick={setFocus}
            style={style}
            isChildFocused={!!isFocused}
        >
            <Styled.SearchIconHolder
                showIcon={!!showIcon}
            >
                {showIcon && (
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        style={{
                            width: '12px',
                            height: '12px',
                            margin: 'auto'
                        }}
                    />
                )}
            </Styled.SearchIconHolder>
            <Styled.Input
                id={id}
                name={name}
                onKeyPress={onKeyPress}
                unselectable={readOnly ? "on" : "off"}
                hideTextInput={!!hideTextInput}
                readOnly={readOnly}
                ref={inputElement}
                autoComplete={autoComplete ?? ''}
                value={value?.label}
                onFocus={onFocusChange}
                onBlur={onBlurChange}
                placeholder={placeholder}
                onChange={changeHandler}
                type={!showPassWord ? textFieldType : 'text'}
            />
            {value?.label?.length as any > 0 && isClearAble && (
                <Styled.ClearButtonHolder>
                    <FontAwesomeIcon
                        onClick={onClearHandler}
                        icon={faClose}
                        style={{
                            color: 'red',
                            width: '12px',
                            height: '12px',
                            marginLeft: '0'

                        }}
                    />
                </Styled.ClearButtonHolder>
            )}
            {textFieldType === 'password' && (
                <Styled.ClearButtonHolder>
                    <FontAwesomeIcon
                        onClick={onShowPasswordClick}
                        icon={showPassWord ? faEyeSlash : faEye}
                        style={{
                            width: '12px',
                            height: '12px',
                            marginLeft: '0'

                        }}
                    />
                </Styled.ClearButtonHolder>
            )}
        </Styled.TextInput>
    )
})
TextInput.defaultProps = defaultProps;

export default TextInput