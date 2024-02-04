import React from 'react';
import maxSize from 'popper-max-size-modifier';
import { usePopper } from 'react-popper';

type Placement =
    'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'right-start'
    | 'right-end'
    | 'left-start'
    | 'left-end';

type usePopperPositioningProps = {
  targetElementRef: React.RefObject<any>,
  popperElementRef: HTMLElement | null,
  placement?: Placement
  applyMaxSizeEnabled?: boolean
  padding?: number
  zIndex?: number
  offset?: number[]
}

const applyMaxSize: any = {
  name: 'applyMaxSize',
  enabled: true,
  phase: 'beforeWrite',
  requires: ['maxSize'],
  fn({ state }: { state: any}) {
    const { height } = state.modifiersData.maxSize;

    // eslint-disable-next-line no-param-reassign
    state.styles.popper = {
      ...state.styles.popper,
      maxHeight: height,
    };
  },
};

/**
 * usePopperPositioning hook.
 * Sets element position relative to target.
 *
 * @param targetElementRef
 * @param popperElementRef
 * @param config
 */

const usePopperPositioning = ({
  targetElementRef,
  popperElementRef,
  placement = 'bottom-start',
  applyMaxSizeEnabled = false,
  padding = 0,
  zIndex = 9999,
  offset = [0, 7],
}: usePopperPositioningProps) => {
  const modifiers = [
    {
      name: 'offset',
      options: {
        offset,
      },
    },
    {
      ...maxSize,
      options: {
        zIndex,
        padding,
      },
    },
  ];

  if (applyMaxSizeEnabled) {
    modifiers.push(applyMaxSize);
  }

  const { styles, attributes } = usePopper(targetElementRef.current, popperElementRef, {
    placement,
    modifiers,
  });

  return {
    styles,
    attributes
  };
};

export default usePopperPositioning;
