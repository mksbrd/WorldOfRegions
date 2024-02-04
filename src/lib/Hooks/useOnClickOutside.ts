import {useEffect} from 'react';
import {isMobile} from 'react-device-detect';
// @ts-ignore
import {includes} from 'lodash-es';

type Event = MouseEvent | TouchEvent

/**
 * useOnClickOutside hook.
 * Triggers callback function, if there was click outside given ref element.
 *
 * @param ref {HTMLElement}
 * @param handler {function}
 * @param skipOnElements
 * @param isEnabled
 */

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
    ref: HTMLElement | null,
    handler: (event: Event) => void,
    skipOnElements: Array<HTMLElement> = [],
    isEnabled = true,
) => {
    const eventType = isMobile ? 'touchend' : 'mousedown';

    useEffect(() => {
        if (!isEnabled) {
            return () => false;
        }

        const listener = (event: any) => {
            event.stopPropagation();
            if (eventType === 'touchend' && includes(event?.target?.id, 'react-select')) {
                return;
            }

            if (!ref || ref.contains((event?.target as Node) || null)) {
                return;
            }

            if (skipOnElements.some((elem) => event?.target instanceof Node && elem.contains(event?.target))) {
                return;
            }

            handler(event);
        };

        document.addEventListener(eventType, listener);

        return () => {
            document.removeEventListener(eventType, listener);
        };
    }, [ref, handler, isEnabled]);
};
export default useOnClickOutside;
