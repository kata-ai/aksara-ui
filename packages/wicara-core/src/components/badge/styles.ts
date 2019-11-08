import { css } from 'styled-components';
import badgeThemes from './theme';

export type BadgeVariants = keyof typeof badgeThemes;

export interface BaseBadgeProps {
  /** The variant options available for a badge. Defaults to 'entity' */
  variant?: BadgeVariants;
}

const BaseBadgeStyles = ({ variant = 'entity' }: BaseBadgeProps) =>
  css`
    display: inline-block;
    padding: 2px 4px;
    font-size: 11px;
    font-weight: 700;
    line-height: 1.45;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 2px;
    color: ${badgeThemes[variant].textColor};
    background-color: ${badgeThemes[variant].backgroundColor};
  `;

export default BaseBadgeStyles;
