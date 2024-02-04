import React, {forwardRef, useImperativeHandle, useState} from "react";
import {Styled} from "./Image.styles";
import BrdLoader from "../BrdLoader";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {isEmpty} from "lodash-es";
import {faCameraSlash} from "@fortawesome/pro-light-svg-icons";

type ImageProps = {
    src: string
    disableLoader?: boolean
    showIconWhenEmpty?: boolean
    forceLoader?: boolean
    customIconStyles?: React.CSSProperties
    customIcon?: IconProp
    onClick?: any
    style?: React.CSSProperties
}

const defaultProps = {
    forceLoader: false,
    disableLoader: false,
    showIconWhenEmpty: false,
    customIcon: undefined,
    onClick: () => false
}

const checkImageLoaded = (imageUrl: string) => {
    if (!isEmpty(imageUrl)) {
        const image = new Image();
        image.src = imageUrl;
        if (image.complete) {
            return true;
        }
        return false;
    }
    return true

};

const Img = forwardRef<HTMLDivElement, ImageProps>((
    {
        forceLoader,
        customIconStyles,
        onClick,
        customIcon,
        showIconWhenEmpty,
        src,
        disableLoader,
        ...props
    }, ref
) => {

    const [isLoaded, setIsLoaded] = useState<boolean>(checkImageLoaded(src))

    const [imageElement, setImageElement] = useState<any>(null)


    useImperativeHandle(ref, () => imageElement);

    const onLoaded = () => {
        setIsLoaded(true)
    }


    const getIsLoading = () => {
        if (forceLoader) {
            return true
        }
        if (!isLoaded && !disableLoader) {
            return true
        }
        return false
    }

    return (
        <Styled.Image__Holder
            srcEmpty={isEmpty(src)}
            onClick={onClick ? onClick : () => {
            }}
            {...props}
        >
            {isEmpty(src) ? (
                <Styled.Empty__Src/>
            ) : (
                <Styled.Img
                    src={src}
                    onLoadCapture={() => {
                        setIsLoaded(false)
                    }}
                    onLoad={onLoaded}
                    {...props}
                />
            )}
            <Styled.Image__Loader__Holder
            >
                {getIsLoading() && (
                    <BrdLoader
                        style={{
                            margin: 'auto'
                        }}
                    />
                )}
                {showIconWhenEmpty && isLoaded && isEmpty(src) && (
                    <Styled.Custom__Icon
                        style={customIconStyles}
                        icon={customIcon ?? faCameraSlash}
                    />
                )}

            </Styled.Image__Loader__Holder>


        </Styled.Image__Holder>
    )
})
Img.defaultProps = defaultProps
export default Img