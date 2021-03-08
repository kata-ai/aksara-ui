import styled, { css } from 'styled-components';
import { variant } from 'styled-system';

import { IconButton } from '../button';
import { Box } from '../../foundations';
import { theme } from '../../theme';
import { PillColorVariants, pillColorVariants, pillSizeVariants, PillSizeVariants } from './variants';

export interface BasePillProps {
  /** Size of the pill. */
  pillSize?: PillSizeVariants;
  /** The variant of the Pill. */
  variant?: PillColorVariants;
}

export const BasePill = styled(Box)<BasePillProps>`
  ${variant({ prop: 'pillSize', variants: pillSizeVariants })}
  ${variant({ prop: 'variant', variants: pillColorVariants })}
`;

export const CloseButton = styled(IconButton)<{ outline?: boolean }>`
  background-color: rgba(49, 63, 78, 0.2);
  color: ${theme.colors.grey03};
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 0;
  outline: none;

  /* ${({ outline }) =>
    outline &&
    css`
      border-left: 1px solid ${theme.colors.indigo03};
    `} */

  &:focus,
  &:active {
    border-width: 0 !important;
    box-shadow: none !important;
  }
`;
