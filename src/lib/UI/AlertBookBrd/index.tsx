import React, {useState} from "react";
import {Styled} from "./AlertBox.styles";
import {faDoNotEnter, faWarning} from "@fortawesome/pro-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {isEmpty} from "lodash-es";
import {faCheck} from "@fortawesome/free-solid-svg-icons/faCheck";

type AlertBookBrdProps = {
    disableAnimation?: boolean
    title: string
    onClose?: () => void
    type?: 'Warning' | 'Error' | 'Default' | 'Success'
    description?: string
    customIcon?: IconProp
}
const defaultProps = {
    disableAnimation: false,
    onClose: () => {
    },
    type: 'Default',
    description: '',
    customIcon: undefined
}


const AlertBookBrd = (
    {
        disableAnimation,
        onClose,
        title,
        type,
        description,
        customIcon,
    }: AlertBookBrdProps) => {

    const [element, setElement] = useState<any>(null)

    const getIcon = (type: any) => {
        if (!isEmpty(customIcon)) {
            return customIcon
        }
        switch (type) {
            case'Warning':
                return faWarning
            case 'Error':
                return faDoNotEnter
            case'Success':
                return faCheck
            case 'Default':
                return faCheck
        }
    }


    return (
        <Styled.Alert__Box
            ref={setElement}
            disableAnimation={disableAnimation as boolean}
            elementHeight={element?.clientHeight}
            type={type}
        >
            <Styled.Box__Icon
                type={type}
                icon={getIcon(type) as any}
            />
            <Styled.Values__Holder>
                <Styled.Title__Label>
                    {title}
                </Styled.Title__Label>
                <Styled.Desc__Label>
                    {description}
                </Styled.Desc__Label>
            </Styled.Values__Holder>
        </Styled.Alert__Box>
    )
}

AlertBookBrd.defaultProps = defaultProps;
export default AlertBookBrd