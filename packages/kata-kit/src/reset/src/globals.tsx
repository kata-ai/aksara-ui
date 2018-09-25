import { css } from 'styled-components';

import { fontProps } from './utils/variables';

export default css`
  :root {
    font-size: ${fontProps.rootFontSize};
    line-height: ${fontProps.rootLineHeight};
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: 'Museo Sans Rounded', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol';
    background-color: #f6f7f8;
    color: #484c4f;
    font-weight: 500;
  }

  a {
    color: #006fe6;
    text-decoration: none;

    &:hover {
      color: #0056b3;
      text-decoration: underline;
    }

    &:active {
      color: #0056b3;
    }

    &:focus {
      outline: 2px solid #0056b3;
      outline-offset: 2px;
    }
  }

  #root {
    transition: all 0.5s cubic-bezier(0.15, 1, 0.3, 1);
    -webkit-transition: all 0.5s cubic-bezier(0.15, 1, 0.3, 1);

    &.pushed-legend-right {
      transform: translateX(-280px);
    }
  }

  .noscroll {
    overflow: hidden;
  }

  .noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .full-size {
    height: 100%;
    width: 100%;
  }

  .icon-middle {
    &::before {
      vertical-align: middle;
    }
  }

  .drag-handle {
    cursor: move;
    display: inline-block;

    &::before {
      content: '......';
      display: inline-block;
      width: 10px;
      word-break: break-word;
      white-space: normal;
      letter-spacing: 2px;
      line-height: 4.5px;
      text-align: center;
      height: 18px;
    }
  }
`;
