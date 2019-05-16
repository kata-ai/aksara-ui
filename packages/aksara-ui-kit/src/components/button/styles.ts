export type ButtonColors = 'primary' | 'secondary';
export type ButtonSizes = 'sm' | 'md' | 'lg';

export interface ButtonBaseProps {
  /** Is a block button. */
  block?: boolean;
  /** The color of the button. */
  color?: ButtonColors;
  /** The size of the button. */
  size?: ButtonSizes;
}
