import React from "react";
import {Styled} from "./SkeletonBox.styles";

type SkeletonBoxProps = {
    margin?: React.CSSProperties['margin']
    minHeight?: React.CSSProperties['minHeight']
    maxHeight?: React.CSSProperties['maxHeight']
    height?: React.CSSProperties['height']
    minWidth?: React.CSSProperties['minWidth']
    maxWidth?: React.CSSProperties['maxWidth']
    width?: React.CSSProperties['width']
    style?: React.CSSProperties
}
const defaultProps = {}

const SkeletonBox = (
    {
        margin,
        minHeight,
        maxHeight,
        height,
        minWidth,
        maxWidth,
        width,
        style
    }: SkeletonBoxProps
) => {

    return (
        <Styled.SkeletonBox
            style={{
                margin: margin ? margin : '2px 0',
                minHeight: minHeight ? minHeight : height ? height : '24px',
                maxHeight: maxHeight ? maxHeight : height ? height : '24px',
                height: height ? height : undefined,
                minWidth: minWidth ? minWidth : width ? width : '100px',
                maxWidth: maxWidth ? maxWidth : width ? width : '120px',
                width: width ? width : undefined,
                ...style
            }}
        />
    )

}
SkeletonBox.defaultProps = defaultProps;
export default SkeletonBox