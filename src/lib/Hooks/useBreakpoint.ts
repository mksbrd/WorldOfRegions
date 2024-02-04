import {useEffect, useState} from 'react';
import {findLastIndex} from 'lodash-es';

import {originalBreakPoints} from "../breakpoints";

export enum Breakpoints {
    xxs,
    xs,
    sm,
    md,
    lg,
    xl
}

const getBreakpoint = (width: number) => {
    const breakPointIndex = findLastIndex(originalBreakPoints, (breakpoint) => width >= breakpoint);
    const currentBreakPoint: any = Breakpoints[breakPointIndex] ? Breakpoints[breakPointIndex] : null;
    return currentBreakPoint;
};

/**
 * useBreakPoints hook.
 * Returns current breakPoint.
 *
 * @returns breakPoint
 */
const useBreakpoint = (): keyof typeof Breakpoints => {
    const [breakpoint, setBreakpoint] = useState(getBreakpoint(window.innerWidth));
    useEffect(() => {
        const handleResize = (): void => {
            setBreakpoint(getBreakpoint(window.innerWidth));
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return breakpoint;
};

export default useBreakpoint;
