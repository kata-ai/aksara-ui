import * as React from 'react';
import { Box } from '../../../../../layout';
import { ButtonBaseProps } from '../types';

interface ButtonIconProps extends ButtonBaseProps {
  isLoading?: boolean;
}

const renderButtonIcon = ({ icon, iconPosition, isLoading }: ButtonIconProps) => {
  if (icon) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        mr={iconPosition === 'left' ? 'xs' : null}
        ml={iconPosition === 'right' ? 'xs' : null}
        style={isLoading ? { visibility: 'hidden' } : undefined}
      >
        {React.createElement(icon, { fill: 'currentColor', size: 16 })}
      </Box>
    );
  }

  return null;
};

export default renderButtonIcon;
