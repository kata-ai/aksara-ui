import { css, SimpleInterpolation } from 'styled-components';
import { variables } from '@kata-kit/theme';

const spacing: SimpleInterpolation = css`
  ${[1, 2, 3, 4, 5].map(
    val => css`
      .m-${val} {
        margin: ${variables.spaces[`space${val}`]} !important;
      }
      .mt-${val}, .my-${val} {
        margin-top: ${variables.spaces[`space${val}`]} !important;
      }
      .mr-${val}, .mx-${val} {
        margin-right: ${variables.spaces[`space${val}`]} !important;
      }
      .mb-${val}, .my-${val} {
        margin-bottom: ${variables.spaces[`space${val}`]} !important;
      }
      .ml-${val}, .mx-${val} {
        margin-left: ${variables.spaces[`space${val}`]} !important;
      }

      .p-${val} {
        padding: ${variables.spaces[`space${val}`]} !important;
      }
      .pt-${val}, .py-${val} {
        padding-top: ${variables.spaces[`space${val}`]} !important;
      }
      .pr-${val}, .px-${val} {
        padding-right: ${variables.spaces[`space${val}`]} !important;
      }
      .pb-${val}, .py-${val} {
        padding-bottom: ${variables.spaces[`space${val}`]} !important;
      }
      .pl-${val}, .px-${val} {
        padding-left: ${variables.spaces[`space${val}`]} !important;
      }
    `
  )};
`;

export default spacing;
