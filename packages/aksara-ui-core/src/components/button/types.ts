import { LayoutProps, PositionProps, FlexboxProps, GridProps, SpaceProps, BorderProps } from 'styled-system';

export type ButtonVariants = 'default' | 'primary' | 'outline' | 'destructive' | 'ghost' | 'inverse';
export type FloatingButtonVariants = 'default' | 'primary' | 'success' | 'warning' | 'destructive';
export type OutlineButtonVariants = 'default' | 'primary' | 'success' | 'warning' | 'destructive';
export type IconButtonVariants = 'default' | 'primary' | 'outline' | 'destructive' | 'ghost';
export type ButtonSizes = 32 | 40 | 48;
export type IconButtonSizes = 24 | 32 | 40;
export type FloatingButtonSizes = 32 | 40 | 64;
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

export interface OutlineButtonBaseProps extends AllButtonStyledProps {
  /** Is a block button. */
  block?: boolean;
  /** The variant of the button. */
  variant?: OutlineButtonVariants;
  /** The size of the button. `size` is reserved by styled-system, so we alias its type. */
  buttonSize?: ButtonSizes;
  /** The icon that renders with the button */
  icon?: string | React.ComponentType<any>;
  /** Icon position. Default is `'left'`. */
  iconPosition?: ButtonIconPositions;
}

export interface FloatingButtonBaseProps extends AllButtonStyledProps {
  /** The variant of the button. */
  variant?: FloatingButtonVariants;
  /** The size of the button. `size` is reserved by styled-system, so we alias its type. */
  buttonSize?: FloatingButtonSizes;
}
