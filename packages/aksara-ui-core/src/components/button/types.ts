import { LayoutProps, PositionProps, FlexboxProps, GridProps, SpaceProps, BorderProps } from 'styled-system';

export type ButtonVariants = 'default' | 'primary' | 'outline' | 'destructive' | 'ghost' | 'inverse';
export type IconButtonVariants = 'default' | 'primary' | 'outline' | 'destructive' | 'ghost';
export type ButtonSizes = 32 | 40 | 48;
export type IconButtonSizes = 24 | 32 | 40;
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
  icon?: string | React.ComponentType<any>;
  /** Icon position. Default is `'left'`. */
  iconPosition?: ButtonIconPositions;
}
