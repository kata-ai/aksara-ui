import { ButtonBaseProps } from '../Button/types';

export type PlainButtonVariants = 'primary' | 'destructive';
export type PlainButtonSizes = 'sm' | 'md';

export interface PlainButtonBaseProps extends Omit<ButtonBaseProps, 'size' | 'block' | 'variant'> {
  variant?: PlainButtonVariants;
  /** True if the button is disabled due to loading */
  isLoading?: boolean;
}
