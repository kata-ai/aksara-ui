import * as React from 'react';
import { theme } from '../../../../../theme';
import { InvisibleText, LoaderCircle } from '../components';
import { ButtonBaseProps, ButtonSizes } from '../types';

interface ButtonChildrenProps extends Pick<ButtonBaseProps, 'variant'> {
  isLoading?: boolean;
  size?: ButtonSizes;
  children?: React.ReactNode;
}

const loadingIconSizes = (size?: ButtonSizes) => {
  switch (size) {
    case 48:
      return 40;
    case 40:
      return 32;
    case 32:
      return 24;
    default:
      return 32;
  }
};

const renderButtonChildren = ({ isLoading, size, variant, children }: ButtonChildrenProps) => {
  if (isLoading) {
    return (
      <>
        <LoaderCircle
          size={loadingIconSizes(size)}
          buttonSize={size}
          spinnerColor={variant === 'outline' ? theme.colors.grey04 : theme.colors.white}
        />
        <InvisibleText>{children}</InvisibleText>
      </>
    );
  }

  return children;
};

export default renderButtonChildren;
