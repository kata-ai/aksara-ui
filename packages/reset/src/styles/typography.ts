import { css, SimpleInterpolation } from 'styled-components';
import resolveColor from '../utils/resolveColor';
import { variables } from '@kata-kit/theme';

const typography: SimpleInterpolation = css`
  h1,
  .h1 {
    font-size: 1.85rem;
    font-weight: 500;
    line-height: 2.461rem;
    color: ${resolveColor('headingColor')};
  }

  h2,
  .h2 {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 2.153rem;
    color: ${resolveColor('headingColor')};
  }

  h3,
  .h3,
  .title {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.846rem;
    color: ${resolveColor('headingColor')};
  }

  h4,
  .h4,
  h5,
  .h5,
  h6,
  .h6,
  .subtitle {
    font-size: 1.075rem;
    font-weight: 700;
    line-height: 1.538rem;
    color: ${resolveColor('headingColor')};
  }

  .text-label {
    font-size: 0.925rem;
    font-weight: 700;
    line-height: 1.384rem;
    letter-spacing: 0.2px;
    color: ${resolveColor('mutedTextColor')};
  }

  small,
  .text-small {
    font-size: 0.85rem;
    font-weight: 700;
    line-height: 1.23rem;
    color: ${resolveColor('mutedHeadingColor')};
  }

  p,
  .body-text {
    font-size: 1rem;
    font-weight: 300;
    color: ${resolveColor('textColor')};
  }

  strong {
    font-weight: 700;
    color: ${resolveColor('headingColor')};
  }

  .text-primary {
    color: ${variables.colors.kataBlue} !important;
  }

  .text-success {
    color: ${variables.colors.green} !important;
  }

  .text-warning {
    color: ${variables.colors.yellow} !important;
  }

  .text-danger {
    color: ${variables.colors.red} !important;
  }
`;

export default typography;
