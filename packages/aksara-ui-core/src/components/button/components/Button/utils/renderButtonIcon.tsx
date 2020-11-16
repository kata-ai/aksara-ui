import * as React from 'react';
import { IconWrapper } from '../components';
import { ButtonBaseProps, ButtonSizes } from '../types';

interface ButtonIconProps extends ButtonBaseProps {
  size?: ButtonSizes;
  isLoading?: boolean;
}

const renderButtonIcon = ({ icon, iconPosition, size, isLoading }: ButtonIconProps) => {
  if (typeof icon === 'string') {
    return (
      <IconWrapper
        iconPosition={iconPosition}
        buttonSize={size}
        style={isLoading ? { visibility: 'hidden' } : undefined}
      >
        <i className={`icon-${icon}`} />
      </IconWrapper>
    );
  }

  if (icon) {
    return (
      <IconWrapper
        iconPosition={iconPosition}
        buttonSize={size}
        style={isLoading ? { visibility: 'hidden' } : undefined}
      >
        {React.createElement(icon, { fill: 'currentColor', size: 20 })}
      </IconWrapper>
    );
  }

  return null;
};

export default renderButtonIcon;
