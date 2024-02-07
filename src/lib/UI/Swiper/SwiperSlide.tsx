// @ts-nocheck
import React, {CSSProperties} from 'react';
import {SwiperSlideProps} from 'swiper/react';

type SwiperSlideProp = {
    children: React.ReactNode
    style?: CSSProperties
}

const defaultProps = {
    style: {},
};

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'swiper-slide': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & SwiperSlideProps,
                HTMLElement>;
        }
    }
}

const SwiperSlide = ({children, style, ...props}: SwiperSlideProp) => (
    <swiper-slide class="swiper-slide" style={style} {...props}>
        {children}
    </swiper-slide>
);

SwiperSlide.defaultProps = defaultProps;

export {
    SwiperSlide,
};
