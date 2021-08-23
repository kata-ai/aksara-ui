import { AllButtonStyledProps } from '../Button';

export type IconButtonVariants = 'primary' | 'secondary' | 'outline' | 'destructive' | 'ghost' | 'inverse';
export type IconButtonSizes = 'sm' | 'md' | 'lg';

export interface IconButtonBaseProps extends AllButtonStyledProps {
  /** The variant of the button. */
  variant?: IconButtonVariants;
  /** The size of the button. `size` is reserved by styled-system, so we alias its type. */
  buttonSize?: IconButtonSizes;
  /** Add a "selected" style for use in toggle buttons. */
  selected?: boolean;
}
