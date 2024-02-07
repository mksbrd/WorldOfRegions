import React, {CSSProperties, forwardRef, useEffect, useState} from 'react';
import {createPortal} from 'react-dom';
import {AnimatePresence} from 'framer-motion';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {includes} from 'lodash-es';

import DrawerOverlay from './DrawerOverlay';

import {Styled} from './Drawer.styles';
import PageHolder from "../PageHolder";
import useLockBodyScroll from "../../Hooks/useLockBodyScroll";
import useBreakpoint from "../../Hooks/useBreakpoint";
import useOnClickOutside from "../../Hooks/useOnClickOutside";

export type DrawerPositionEnum = 'left' | 'right' | 'top' | 'bottom';

export type DrawerProps = {
    id?: string
    appendTo?: any
    isRefForContent?: boolean
    position?: DrawerPositionEnum
    controls?: React.ReactElement | undefined
    children: React.ReactNode
    onClose?: () => void
    title?: any
    clickOutsideIgnoreElements?: any[]
    isOpen?: boolean
    top?: number
    showOverlay?: boolean
    fixHeight?: boolean
    contentStyles?: CSSProperties
};

const defaultProps = {
    id: undefined,
    appendTo: undefined,
    isRefForContent: false,
    title: '',
    onClose: undefined,
    controls: undefined,
    top: 0,
    showOverlay: true,
    isOpen: false,
    position: 'bottom' as DrawerPositionEnum,
    clickOutsideIgnoreElements: [],
    fixHeight: false,
    contentStyles: {}
};

const positionsMap: any = {
    right: {
        initial: {
            x: '100%',
        },
        animate: {
            x: 0,
        },
        exit: {
            x: '100%',
        },
    },
    left: {
        initial: {
            x: '-100%',
        },
        animate: {
            x: 0,
        },
        exit: {
            x: '-100%',
        },
    },
    top: {
        initial: {
            y: '-100%',
        },
        animate: {
            y: 0,
        },
        exit: {
            y: '-100%',
        },
    },
    bottom: {
        initial: {
            y: '100%',
        },
        animate: {
            y: 0,
        },
        exit: {
            y: '100%',
        },
    },
};

const Drawer = forwardRef<HTMLDivElement, DrawerProps>(({
                                                            id,
                                                            appendTo,
                                                            isRefForContent,
                                                            children,
                                                            title,
                                                            onClose,
                                                            top,
                                                            showOverlay,
                                                            isOpen,
                                                            position,
                                                            controls,
                                                            clickOutsideIgnoreElements,
                                                            fixHeight,
                                                            contentStyles,
                                                            ...props
                                                        }, ref) => {
    const {setLocked} = useLockBodyScroll();
    const [rootElement, setRootElement] = useState<HTMLDivElement | null>(null);
    const [drawerElement, setDrawerElement] = useState<HTMLDivElement | null>(null);
    const [fixedHeight, setFixedHeight] = useState<string>('auto');
    const breakpoint = useBreakpoint();

    const closeHandler = (event: MouseEvent | TouchEvent) => {
        event.stopPropagation();

        if (onClose) {
            onClose();
        }
    };

    useOnClickOutside(
        drawerElement, closeHandler, clickOutsideIgnoreElements?.length ? clickOutsideIgnoreElements : [],
    );

    useEffect(() => {
        setRootElement(document.querySelector('.drawer-root') as HTMLDivElement);
    }, []);

    useEffect(() => {
        if (fixHeight && fixedHeight === 'auto' && drawerElement) {
            setFixedHeight(`${drawerElement.clientHeight}px`)
        }
    }, [drawerElement, fixHeight]);

    useEffect(() => {
        setLocked(!!isOpen);
    }, [isOpen]);

    return (
        <>
            {rootElement !== null && createPortal(
                <AnimatePresence>
                    {isOpen && (
                        <>
                            <Styled.Drawer
                                id={id}
                                key="drawer"
                                ref={(!isRefForContent ? ref : undefined) || setDrawerElement}
                                animate={positionsMap[position as string].animate}
                                initial={positionsMap[position as string].initial}
                                exit={positionsMap[position as string].exit}
                                transition={{type: 'spring', bounce: 0, duration: 0.3}}
                                style={{
                                    [position as string]: '0',
                                    ...includes(['bottom', 'top'], position) ? {
                                        width: '100%',
                                        height: fixedHeight,
                                        maxHeight: '100%',
                                        top: !top ? position === 'top' ? '0' : undefined : `${top}px`,
                                    } : {
                                        width: 'auto',
                                        height: includes(['xxs', 'xs'], breakpoint) || !top ? '100%' : `calc(100% - ${top}px)`,
                                        top: includes(['xxs', 'xs'], breakpoint) || !top ? '0px' : `${top}px`,
                                    },
                                }}
                            >
                                {title && (

                                    <Styled.Drawer__Header>
                                        <PageHolder>
                                            <Styled.Drawer__Header__Title__Holder>
                                                <Styled.Drawer__Header__Title>
                                                    {title}
                                                </Styled.Drawer__Header__Title>
                                                <Styled.Drawer__Header__CloseBtn onClick={onClose}>
                                                    <FontAwesomeIcon icon={faTimes} color="inherit" size="lg"/>
                                                </Styled.Drawer__Header__CloseBtn>
                                            </Styled.Drawer__Header__Title__Holder>
                                        </PageHolder>
                                    </Styled.Drawer__Header>
                                )}

                                <Styled.Drawer__Content
                                    ref={isRefForContent ? ref : undefined}
                                    style={contentStyles}
                                >
                                    {children}
                                </Styled.Drawer__Content>

                                {controls && (
                                    <Styled.Drawer__Controls>
                                        {controls}
                                    </Styled.Drawer__Controls>
                                )}
                            </Styled.Drawer>
                            {showOverlay && (<DrawerOverlay onClick={onClose}/>)}
                        </>
                    )}
                </AnimatePresence>,
                (!appendTo ? rootElement : appendTo) as HTMLElement,
            )}
        </>
    );
});

Drawer.defaultProps = defaultProps;

export default Drawer;
