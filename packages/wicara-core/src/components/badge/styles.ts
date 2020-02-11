import { css } from 'styled-components';
import { variant } from 'styled-system';
import badgeVariants, { BadgeVariants } from './variants';

export interface BaseBadgeProps {
  /** The variant options available for a badge. Defaults to 'entity' */
  variant?: BadgeVariants;
}

const BaseBadgeStyles = () =>
  css`
    display: inline-block;
    padding: 8px 12px;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border: 1px solid transparent;
    border-radius: 4px;
    ${variant({
      prop: 'variant',
      variants: badgeVariants,
    })}
  `;

export default BaseBadgeStyles;
