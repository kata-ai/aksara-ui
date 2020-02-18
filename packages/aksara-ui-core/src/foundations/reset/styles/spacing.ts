import { css } from 'styled-components';
import { spaceLegacy } from '../../../utils';

const spacing = css`
  ${[1, 2, 3, 4, 5].map(
    val => css`
      .m-${val} {
        margin: ${spaceLegacy[`space${val}`]} !important;
      }
      .mt-${val}, .my-${val} {
        margin-top: ${spaceLegacy[`space${val}`]} !important;
      }
      .mr-${val}, .mx-${val} {
        margin-right: ${spaceLegacy[`space${val}`]} !important;
      }
      .mb-${val}, .my-${val} {
        margin-bottom: ${spaceLegacy[`space${val}`]} !important;
      }
      .ml-${val}, .mx-${val} {
        margin-left: ${spaceLegacy[`space${val}`]} !important;
      }

      .p-${val} {
        padding: ${spaceLegacy[`space${val}`]} !important;
      }
      .pt-${val}, .py-${val} {
        padding-top: ${spaceLegacy[`space${val}`]} !important;
      }
      .pr-${val}, .px-${val} {
        padding-right: ${spaceLegacy[`space${val}`]} !important;
      }
      .pb-${val}, .py-${val} {
        padding-bottom: ${spaceLegacy[`space${val}`]} !important;
      }
      .pl-${val}, .px-${val} {
        padding-left: ${spaceLegacy[`space${val}`]} !important;
      }
    `
  )};
`;

export default spacing;
