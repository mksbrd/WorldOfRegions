import React, {forwardRef} from 'react';
import {createPortal} from 'react-dom';

import Text from "../../../Text";

import ModalOverlay from '../../ModalOverlay';

import {Styled} from '../Modal.styles';

export type WaitModalProps = {
    message: string
    isOpen?: boolean
    width?: number,
    as?: any
};

const defaultProps = {
    as: 'div',
    isOpen: false,
    width: 400,
};

const WaitModal = forwardRef<HTMLElement, WaitModalProps>(({
                                                               message, isOpen, ...props
                                                           }, ref) => (
    <>
        {isOpen && createPortal(
            <>
                <Styled.WaitModal ref={ref} {...props}>
                    {message && (<Text>{message}</Text>)}
                </Styled.WaitModal>
                <ModalOverlay/>
            </>,
            document.querySelector('.modal-root') as HTMLDivElement,
        )}
    </>
));

WaitModal.defaultProps = defaultProps;

export default WaitModal;
