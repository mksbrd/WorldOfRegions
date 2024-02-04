import React, {CSSProperties, forwardRef, memo, useEffect, useState,} from 'react';
import {createPortal} from 'react-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';


import ModalOverlay from '../../ModalOverlay';

import {Styled} from '../Modal.styles';
import useWindowSizeSelector from "../../../../Hooks/useWindowSizeSelector";

export type ModalApi = {
    maxModalContentHeight: number;
}

export type ModalProps = {
    title?: string
    id?: string
    children: React.ReactNode | ((api: ModalApi) => React.ReactNode)
    onClose?: () => void
    onOpen?: () => void
    controls?: React.ReactElement | undefined
    positionedByPopper?: boolean
    isOpen?: boolean
    hasTarget?: boolean
    showOverlay?: boolean
    maxHeight?: number | string
    onClick?: () => void
    showCloseIcon?: boolean
    style?: CSSProperties
    appendTo?: Element | null
    width?: number | string
    theme?: 'transparent' | 'white',
    search?: boolean
};

const defaultProps = {
    id: undefined,
    title: undefined,
    isOpen: false,
    hasTarget: false,
    width: 400,
    controls: undefined,
    positionedByPopper: false,
    onClick: undefined,
    maxHeight: 0,
    showOverlay: true,
    appendTo: undefined,
    style: {},
    onClose: undefined,
    onOpen: undefined,
    showCloseIcon: true,
    theme: 'white' as any,
    search: false,
};

const Modal = forwardRef<HTMLDivElement | React.SetStateAction<HTMLDivElement | null>, ModalProps>(({
                                                                                                        id,
                                                                                                        title,
                                                                                                        children,
                                                                                                        controls,
                                                                                                        onClose,
                                                                                                        onOpen,
                                                                                                        onClick,
                                                                                                        showOverlay,
                                                                                                        showCloseIcon,
                                                                                                        isOpen,
                                                                                                        appendTo,
                                                                                                        maxHeight,
                                                                                                        positionedByPopper,
                                                                                                        theme,
                                                                                                        search,
                                                                                                        ...props
                                                                                                    }, ref) => {
    const height = useWindowSizeSelector(({height}) => height, [], isOpen);
    const [maxModalContentHeight, setMaxModalContentHeight] = useState<number>(0);

    /**
     * Modal body click handler.
     * @param event
     */
    const onClickHandler = (event: React.MouseEvent) => {
        event.stopPropagation();

        if (onClick) {
            onClick();
        }
    };

    /**
     * Modal close button click handler.
     * @param event
     */
    const closeBtnClickHandler = (event: React.MouseEvent) => {
        event.stopPropagation();

        if (onClose) {
            onClose();
        }
    };

    useEffect(() => {
        const maxModalHeight = positionedByPopper ? maxHeight : height;

        if (maxModalHeight) {
            const contentHeight = Number(maxModalHeight) - 50;
            const controlsHeight = controls ? 50 : 0;
            const searchHeight = search ? 70 : 0;

            setMaxModalContentHeight(contentHeight - controlsHeight - searchHeight);
        }
    }, [maxHeight, height]);

    useEffect(() => {
        if (isOpen && onOpen) {
            onOpen();
        }
    }, [isOpen])

    return (
        <>
            {createPortal(
                <>
                    {isOpen && (
                        <>
                            { /* @ts-ignore */}
                            <Styled.Modal
                                ref={ref}
                                key="modal"
                                maxHeight={height}
                                onClick={onClickHandler}
                                themeType={theme}
                                {...{...id ? {id} : {}}}
                                {...props}
                            >
                                {title && (
                                    <Styled.Modal__Header themeType={theme}>
                                        {title && (
                                            <Styled.Modal__Title>{title}</Styled.Modal__Title>
                                        )}
                                        {showCloseIcon && (
                                            <Styled.Modal__CloseIcon onClick={closeBtnClickHandler}>
                                                <FontAwesomeIcon icon={faTimes} color="inherit" size="1x"/>
                                            </Styled.Modal__CloseIcon>
                                        )}
                                    </Styled.Modal__Header>
                                )}
                                <Styled.Modal__Content>
                                    {typeof children === 'function' ? children({maxModalContentHeight}) : children}
                                </Styled.Modal__Content>
                                {controls && (
                                    <Styled.Modal__Controls>
                                        {controls}
                                    </Styled.Modal__Controls>
                                )}
                            </Styled.Modal>
                            {showOverlay && (<ModalOverlay/>)}
                        </>
                    )}
                </>,
                (!appendTo ? document.querySelector('.modal-root') : appendTo) as HTMLElement,
            )}
        </>
    );
});

Modal.defaultProps = defaultProps;

export default memo(Modal);
