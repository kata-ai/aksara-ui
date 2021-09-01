import { createGlobalStyle, css } from 'styled-components';
import normalize from './styles/normalize';

const injectGlobalStyles = (additionalStyles?: string | ReturnType<typeof css>) => {
  const GlobalStyles = createGlobalStyle`
    ${normalize}

    html,
    body,
    #root {
      width: 100%;
      height: 100%;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      margin: 0;
    }

    body {
      font-family: ${p => p.theme.fonts.system};
      background-color: ${p => p.theme.colors['bg-secondary']};
      color: ${p => p.theme.colors.greydark02};
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    img {
      display: block;
      max-width: 100%;
    }

    .noscroll {
      overflow: hidden;
    }

    .noselect {
      user-select: none;
    }

    .full-size {
      height: 100%;
      width: 100%;
    }

    .full-size-layout {
      height: 100%;
      min-height: 100vh;
      width: 100%;
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

    /* https://github.com/reach/reach-ui/blob/master/packages/skip-nav/styles.css */
    [data-reach-skip-link] {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      width: 1px;
      margin: -1px;
      padding: 0;
      overflow: hidden;
      position: absolute;
    }

    [data-reach-skip-link]:focus {
      padding: 1rem;
      position: fixed;
      top: 10px;
      left: 10px;
      background: white;
      z-index: 100;
      width: auto;
      height: auto;
      clip: auto;
    }

    ${additionalStyles};
  `;

  return { GlobalStyles };
};

export default injectGlobalStyles;
