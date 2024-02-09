import {css} from 'styled-components';

/* Tooltip themes css */

const Tooltip__Theme__Bubble = css`
  .tippy-box[data-theme~='bubble'] {
    max-width: 250px !important;
    overflow: hidden;
    border-radius: 5px
  }
;
  background-color: ${({theme}) => theme.backgroundColor};
  color: ${({theme}) => theme.color};
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
  pointer-events: all !important;

  .tippy-arrow {
    display: none;
  }
}
`;

const Tooltip__Theme__Bubble__Wide = css`
  .tippy-box[data-theme~='bubble-wide'] {
    max-width: 450px !important;
    overflow: hidden;
    border-radius: 5px
  }
;
  background-color: ${({theme}) => theme.backgroundColor};
  color: ${({theme}) => theme.color};
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
  pointer-events: all !important;

  .tippy-arrow {
    display: none;
  }
}
`;

const Tooltip__Theme__Navy = css`
  .tippy-box[data-theme~='navy'] {
    background-color: ${({theme}) => theme.backgroundColor};
    box-shadow: 0px 0px 6px 0px ${({theme}) => theme.isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.5)'};
    color: ${({theme}) => theme.color};

    .tippy-arrow {
      color: ${({theme}) => theme.backgroundColor};
    }
  }
`;

const Tooltip__Theme__Red = css`
  .tippy-box[data-theme~='red'] {
    background-color: rgba(255, 0, 0, 0.95)
  }
;
  color: white;

  .tippy-arrow {
    color: rgba(255, 0, 0, 0.95);
  }
`;

const Tooltip__Theme__Blue = css`
  .tippy-box[data-theme~='blue'] {
    background-color: ${({theme}) => theme.backgroundColor};
    color: ${({theme}) => theme.color};

    .tippy-arrow {
      color: ${({theme}) => theme.backgroundColor};
    }
  }
`;

/* Tooltip base css */

const Tooltip = css`
  .tippy-box[data-animation=fade][data-state=hidden] {
    opacity: 0;
  }

  [data-tippy-root] {
    max-width: calc(100vw - 10px);
  }

  .tippy-box {
    position: relative;
    border-radius: 5px;
    font-size: 13px;
    max-width: 100% !important;
    line-height: 1.4;
    outline: 0;
    transition-property: transform, visibility, opacity
  }

  .tippy-box[data-placement^=top] > .tippy-arrow {
    bottom: 0
  }

  .tippy-box[data-placement^=top] > .tippy-arrow:before {
    bottom: -7.5px;
    left: 0;
    border-width: 8px 8px 0;
    border-top-color: initial;
    transform-origin: center top
  }

  .tippy-box[data-placement^=bottom] > .tippy-arrow {
    top: 0
  }

  .tippy-box[data-placement^=bottom] > .tippy-arrow:before {
    top: -7px;
    left: 0;
    border-width: 0 8px 8px;
    border-bottom-color: initial;
    transform-origin: center bottom
  }

  .tippy-box[data-placement^=left] > .tippy-arrow {
    right: 0
  }

  .tippy-box[data-placement^=left] > .tippy-arrow:before {
    border-width: 8px 0 8px 8px;
    border-left-color: initial;
    right: -7px;
    transform-origin: center left
  }

  .tippy-box[data-placement^=right] > .tippy-arrow {
    left: 0
  }

  .tippy-box[data-placement^=right] > .tippy-arrow:before {
    left: -7px;
    border-width: 8px 8px 8px 0;
    border-right-color: initial;
    transform-origin: center right
  }

  .tippy-box[data-inertia][data-state=visible] {
    transition-timing-function: cubic-bezier(.54, 1.5, .38, 1.11)
  }

  .tippy-arrow {
    width: 16px;
    height: 16px;
  }

  .tippy-arrow:before {
    content: "";
    position: absolute;
    border-color: transparent;
    border-style: solid
  }

  .tippy-content {
    position: relative;
    overflow: hidden;
    z-index: 1
  }

  ${Tooltip__Theme__Navy}
  ${Tooltip__Theme__Blue}
  ${Tooltip__Theme__Red}
  ${Tooltip__Theme__Bubble}
  ${Tooltip__Theme__Bubble__Wide}
`;

export default Tooltip;
