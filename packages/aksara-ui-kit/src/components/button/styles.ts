import { css } from 'styled-components';
import { textSizes } from '../../utils';

export type ButtonVariants = 'default' | 'primary' | 'outline' | 'destructive' | 'link' | 'ghost';
export type ButtonSizes = 'sm' | 'md' | 'lg';

export interface ButtonBaseProps {
  /** Is a block button. */
  block?: boolean;
  /** The variant of the button. */
  variant?: ButtonVariants;
  /** The size of the button. */
  size?: ButtonSizes;
}

export const SizeSmall = css`
  height: 32px;
  padding: 0 12px;
  font-size: ${textSizes[200].fontSize}px;
  line-height: 32px;
  border-radius: 4px;
`;

export const SizeMedium = css`
  height: 40px;
  padding: 0 16px;
  font-size: ${textSizes[300].fontSize}px;
  line-height: 40px;
  border-radius: 4px;
`;

export const SizeLarge = css`
  height: 56px;
  padding: 0 24px;
  font-size: ${textSizes[400].fontSize}px;
  line-height: 56px;
  border-radius: 4px;
`;

export const ButtonBase = (props: ButtonBaseProps) => css`
  display: inline-block;
  position: relative;
  margin: 0;
  padding: 0;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  background: none;
  text-decoration: none;
  letter-spacing: -0.05px;
  border: 1px solid transparent;

  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  &:focus {
    text-decoration: none;
    outline: 0px;
  }
`;
