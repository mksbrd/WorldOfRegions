import {Styled} from './FlexBox.styles';
import React, {forwardRef} from "react";

type FlexBoxProps = {
    id?: any
    onDoubleClick?: (event: React.MouseEvent<HTMLDivElement>) => void
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
    onDrop?: (event: any) => void
    onDragLeave?: (event: any) => void
    onDragEnter?: (event: any) => void
    onDragOver?: (event: any) => void
    onMouseOver?: (e: React.MouseEvent<HTMLDivElement>) => void
    onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void
    onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void
    style?: React.CSSProperties
    children?: React.ReactNode
}
const defaultProps = {
    id: undefined,
    onDoubleClick: undefined,
    onClick: undefined,
    onMouseOver: undefined,
    onMouseEnter: undefined,
    onMouseLeave: undefined,
    children: undefined,
}

const FlexBox = forwardRef<HTMLDivElement, FlexBoxProps>(({children, ...props}, ref) => {
    return (
        <Styled.FlexBox
            ref={ref}
            {...props}
        >
            {children}
        </Styled.FlexBox>
    )
})
FlexBox.defaultProps = defaultProps;

export default FlexBox