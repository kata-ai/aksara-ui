export type ButtonVariants = 'default' | 'primary' | 'support' | 'destructive' | 'link' | 'ghost' | 'inverse';
export type FloatingButtonVariants = 'default' | 'primary' | 'success' | 'warning' | 'destructive';
export type OutlineButtonVariants = 'default' | 'primary' | 'success' | 'warning' | 'destructive';
export type IconButtonVariants = 'default' | 'primary' | 'outline' | 'destructive' | 'ghost';
export type ButtonSizes = 'sm' | 'md' | 'lg';
export type IconButtonSizes = 'sm' | 'md' | 'lg';
export type ButtonIconPositions = 'left' | 'right';

export interface ButtonBaseProps {
  /** Is a block button. */
  block?: boolean;
  /** The variant of the button. */
  variant?: ButtonVariants;
  /** The size of the button. */
  size?: ButtonSizes;
  /** The icon that renders with the button */
  icon?: string | React.ComponentType<any>;
  /** Icon position. Default is `'left'`. */
  iconPosition?: ButtonIconPositions;
}

export interface OutlineButtonBaseProps {
  /** Is a block button. */
  block?: boolean;
  /** The variant of the button. */
  variant?: OutlineButtonVariants;
  /** The size of the button. */
  size?: ButtonSizes;
  /** The icon that renders with the button */
  icon?: string | React.ReactNode;
  /** Icon position. Default is `'left'`. */
  iconPosition?: ButtonIconPositions;
}

export interface FloatingButtonBaseProps {
  /** The variant of the button. */
  variant?: FloatingButtonVariants;
  /** The size of the button. */
  size?: ButtonSizes;
}

export interface IconButtonBaseProps {
  /** The variant of the button. */
  variant?: IconButtonVariants;
  /** The size of the button. */
  size?: IconButtonSizes;
}
