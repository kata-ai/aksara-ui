import { LayoutProps, PositionProps, FlexboxProps, GridProps, SpaceProps } from 'styled-system';

export type ButtonVariants = 'default' | 'primary' | 'outline' | 'destructive' | 'ghost' | 'inverse';
export type FloatingButtonVariants = 'default' | 'primary' | 'success' | 'warning' | 'destructive';
export type OutlineButtonVariants = 'default' | 'primary' | 'success' | 'warning' | 'destructive';
export type IconButtonVariants = 'default' | 'primary' | 'outline' | 'destructive' | 'ghost';
export type ButtonSizes = 'sm' | 'md' | 'lg';
export type IconButtonSizes = 'xs' | 'sm' | 'md';
export type ButtonIconPositions = 'left' | 'right';

type AllButtonStyledProps = LayoutProps & PositionProps & FlexboxProps & GridProps & SpaceProps;

export interface ButtonBaseProps extends AllButtonStyledProps {
  /** Is a block button. */
  block?: boolean;
  /** The variant of the button. */
  variant?: ButtonVariants;
  /** The size of the button. `size` is reserved by styled-system, so we alias its type. */
  buttonSize?: ButtonSizes;
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
  buttonSize?: ButtonSizes;
}

export interface IconButtonBaseProps extends AllButtonStyledProps {
  /** The variant of the button. */
  variant?: IconButtonVariants;
  /** The size of the button. `size` is reserved by styled-system, so we alias its type. */
  buttonSize?: IconButtonSizes;
}
