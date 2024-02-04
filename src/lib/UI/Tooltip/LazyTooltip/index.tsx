import React, {useCallback, useState} from 'react';
import Tippy, {TippyProps} from '@tippyjs/react';

const LazyTooltip = (props: TippyProps) => {
    const [isMounted, setIsMounted] = useState(false);
    const [renderContent, setRenderContent] = useState(false);
    const computedProps = {...props};

    const lazyPlugin = {
        fn: () => ({
            onMount: () => setRenderContent(true),
            onHidden: () => setRenderContent(false),
        }),
    };

    const onMouseOver = useCallback(() => {
        setIsMounted(true);
    }, []);

    const childElement = React.cloneElement(computedProps.children as any, {
        onMouseOver,
    });

    computedProps.plugins = [lazyPlugin, ...(props.plugins || [])];

    if (props.render) {
        const render = props.render;
        // @ts-ignore
        computedProps.render = (...args: any) => (renderContent ? render(...args) : null);
    } else {
        computedProps.content = renderContent ? props.content : '';
    }

    if (props.visible === undefined) {
        if (!isMounted && !props.disabled) {
            return childElement;
        }
    }

    return <Tippy {...computedProps} />;
};

export default LazyTooltip;
