import { LayoutProps, PositionProps, FlexboxProps, GridProps, SpaceProps, BorderProps } from 'styled-system';

export type ButtonVariants = 'primary' | 'secondary' | 'outline' | 'destructive' | 'outline-destructive';
export type ButtonSizes = 'sm' | 'md' | 'lg';
export type ButtonIconPositions = 'left' | 'right';

export type AllButtonStyledProps = LayoutProps & PositionProps & FlexboxProps & GridProps & SpaceProps & BorderProps;

export interface ButtonBaseProps extends AllButtonStyledProps {
  /** Is a block button. */
  block?: boolean;
  /** The variant of the button. */
  variant?: ButtonVariants;
  /** The size of the button. `size` is reserved by styled-system, so we alias its type. */
  buttonSize?: ButtonSizes;
  /** Add a "selected" style for use in toggle buttons. */
  selected?: boolean;
  /** The icon that renders with the button */
  icon?: React.ComponentType<any>;
  /** Icon position. Default is `'left'`. */
  iconPosition?: ButtonIconPositions;
}
