import {Styled} from './Button.styles';
import React from "react";
import {useTranslation} from "react-i18next";
import FlexBox from '../FlexBox';
import {IconProp} from "@fortawesome/fontawesome-svg-core";

type ButtonProps = {
    error?: boolean
    onClick?: (event: any) => void
    onMouseOver?: (e: React.MouseEvent<HTMLDivElement>) => void
    onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void
    onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void
    buttonType?: 'icon' | 'regular' | 'custom'
    ref?: any
    type?: string
    style?: React.CSSProperties
    label?: string | number | undefined | IconProp | React.ReactElement
}
const defaultProps = {
    buttonType: 'regular',
    error: false,
    type: 'normal',
    onClick: undefined,
    onMouseOver: undefined,
    onMouseEnter: undefined,
    onMouseLeave: undefined,
    ref: undefined,
    label: 'Insert Name',
}

const Button = (
    {
        buttonType,
        label,
        type,
        error,
        ref,
        ...props
    }: ButtonProps) => {
    const {t} = useTranslation();


    const getContentType = () => {
        switch (buttonType) {
            case 'regular':
                return (
                    <Styled.CustomText>
                        {label as any}
                    </Styled.CustomText>
                )
            case 'icon':
                return (
                    <Styled.FontAwesomeCustomIcon
                        icon={label as IconProp}
                    />
                )
            case 'custom':
                return (
                    <Styled.Custom__Label__Holder>
                        {label as any}
                    </Styled.Custom__Label__Holder>
                )
            default:
                return null

        }
    }


    return (
        <Styled.Button
            error={!!error}
            ref={ref}
            {...props}
        >
            <FlexBox
                style={{
                    userSelect: 'none',
                    height: '100%',
                    width: '100%'
                }}
            >
                {getContentType()}
            </FlexBox>
        </Styled.Button>
    )
}
Button.defaultProps = defaultProps;

export default Button