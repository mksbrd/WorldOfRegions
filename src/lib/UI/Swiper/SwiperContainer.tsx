// @ts-nocheck
import React, {forwardRef, useEffect, useImperativeHandle, useRef,} from 'react';
import {SwiperProps} from 'swiper/react';
import SwiperCore from 'swiper';
import {Navigation} from 'swiper/modules';

import {register} from 'swiper/element/bundle';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';

register();

SwiperCore.use([Navigation]);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'swiper-container': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & SwiperProps,
                HTMLElement>;
        }
    }
}

type SliderProp = {
    children: React.ReactNode
    settings?: SwiperProps
    onClick?: () => void
    style?: React.CSSProperties
    onAfterInit?: () => void
    onDragEnter?: () => void
    onActiveIndexChange?: (index: number) => void
}

const defaultStyles = {
    width: '100%',
    height: '100%',
};

const defaultProps = {
    settings: {
        lazy: true,
        keyboard: false,
        slidesPerView: 'auto',
        injectStyles: [
            `
        .swiper-slide {
          width: auto !important;
          z-index: 10;
        }

        .swiper-button-next,
        .swiper-button-prev {
          display: none;
        }
      `,
        ],
    },
    style: {},
    onAfterInit: undefined,
    onClick: undefined,
    onDragEnter: undefined,
    onActiveIndexChange: undefined,
};

const SwiperContainer = forwardRef<SwiperCore, SliderProp>(({
                                                                style,
                                                                children,
                                                                onClick,
                                                                onDragEnter,
                                                                onAfterInit,
                                                                onActiveIndexChange,
                                                                settings,
                                                                styles,
                                                            }, ref) => {
    const swiperRef = useRef<any>(null);
    const sliderOptions = {...defaultProps.settings, ...settings};

    useImperativeHandle(ref, () => swiperRef.current);

    const initializeSwiper = () => {
        Object.assign(swiperRef?.current, sliderOptions);
        swiperRef?.current.initialize();
    };

    const onClickHandler = () => {
        if (onClick) {
            onClick();
        }
    };

    const onDragEnterHandler = () => {
        if (onDragEnter) {
            onDragEnter();
        }
    };

    useEffect(() => {
        initializeSwiper();

        swiperRef?.current?.swiper?.on('activeIndexChange', (swiper) => {
            if (onActiveIndexChange) {
                onActiveIndexChange(swiper);
            }
        });
    }, [swiperRef]);

    useEffect(() => {
        initializeSwiper();
    }, [children]);

    return (
        <>
            <swiper-container
                ref={swiperRef}
                init="false"
                onDragEnterCapture={onDragEnterHandler}
                onTouchStart={onClickHandler}
                style={{
                    ...defaultStyles,
                    ...styles,
                    ...style,
                }}
            >
                {children}
            </swiper-container>
        </>
    );
});

SwiperContainer.defaultProps = defaultProps;

export {
    SwiperContainer,
};
