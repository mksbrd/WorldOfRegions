import React, {forwardRef, memo} from 'react';
import {isMobileOnly} from 'react-device-detect';
import {TippyProps} from '@tippyjs/react';

import LazyTooltip from './LazyTooltip';

import 'tippy.js/animations/shift-away.css';
import 'tippy.js/animations/shift-toward.css';
import 'tippy.js/animations/perspective.css';
import FlexBox from "../FlexBox";

type TooltipProps = {
    children: React.ReactElement
    content: string | React.ReactElement
    animation?: string
    interactive?: boolean
    disabled?: boolean
    showOnMobile?: boolean
    contentPadding?: number
    appendTo?: HTMLElement | null,
    trigger?: string
    theme?: string
    zIndex?: number
} & TippyProps;

const defaultProps = {
    animation: 'shift-away',
    trigger: 'mouseenter',
    theme: 'navy',
    appendTo: undefined,
    interactive: false,
    disabled: false,
    showOnMobile: false,
    contentPadding: 8,
    zIndex: 99999,
};

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(({
                                                              children,
                                                              content,
                                                              animation,
                                                              interactive,
                                                              disabled,
                                                              contentPadding,
                                                              trigger,
                                                              theme,
                                                              zIndex,
                                                              appendTo,
                                                              ...props
                                                          }, ref) => {
    const isDisabled = (isMobileOnly && !props.showOnMobile) || disabled;
    return (
        <LazyTooltip
            theme={theme}
            disabled={isDisabled}
            content={(
                <FlexBox style={{flexDirection: "column", padding: "5px"}} ref={ref}>
                    {content}
                </FlexBox>
            )}
            {...(props.visible !== undefined ? {} : {trigger})}
            {...(appendTo ? {appendTo} : {})}
            interactive={interactive}
            animation={animation}
            zIndex={zIndex}
            {...props}
        >
            {children}
        </LazyTooltip>
    );
});

Tooltip.defaultProps = defaultProps;

export default memo(Tooltip);
