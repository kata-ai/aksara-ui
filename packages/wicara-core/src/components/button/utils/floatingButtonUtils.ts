import { css } from 'styled-components';
import { ButtonSizes } from '../styles';

export function floatingButtonSizes(size?: ButtonSizes) {
  switch (size) {
    case 'lg':
      return 64;
    case 'md':
      return 40;
    case 'sm':
      return 32;
    default:
      return 40;
  }
}

export const FloatingButtonSmall = css`
  height: 32px;
  width: 32px;
  font-size: 13px;
  border-radius: 32px;

  i:before {
    font-size: 13px !important;
  }
`;

export const FloatingButtonMedium = css`
  height: 40px;
  width: 40px;
  font-size: 16px;
  border-radius: 40px;

  i:before {
    font-size: 16px !important;
  }
`;

export const FloatingButtonLarge = css`
  height: 64px;
  width: 64px;
  font-size: 24px;
  border-radius: 64px;

  i:before {
    font-size: 24px !important;
  }
`;
