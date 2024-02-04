import {Styled} from './Text.styles';
import React, {forwardRef} from "react";

type TextProps = {
    id?: any
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
    onMouseOver?: (e: React.MouseEvent<HTMLDivElement>) => void
    onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void
    style?: React.CSSProperties
    children?: React.ReactNode
}
const defaultProps = {
    onClick: undefined,
    onMouseOver: undefined,
    onMouseLeave: undefined,
    children: undefined,
}

const Text = forwardRef<HTMLDivElement, TextProps>(({children, ...props}, ref) => {
    return (
        <Styled.Text
            ref={ref}
            {...props}
        >
            {children}
        </Styled.Text>
    )
});

Text.defaultProps = defaultProps;

export default Text