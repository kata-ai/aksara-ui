import * as React from 'react';
import { Box, Text } from '../../../../../layout';
import { theme } from '../../../../../theme';
import { Spinner } from '../../../../loading';
import { ButtonBaseProps } from '../types';

interface ButtonChildrenProps extends Pick<ButtonBaseProps, 'variant'> {
  isLoading?: boolean;
  children?: React.ReactNode;
}

const renderButtonChildren = ({ isLoading, variant, children }: ButtonChildrenProps) => {
  if (isLoading) {
    return (
      <>
        <Box position="absolute" width={16} height={16}>
          <Spinner
            size={16}
            spinnerColor={variant === 'secondary' ? theme.colors.greydark02 : theme.colors.greylight01}
          />
        </Box>
        <Text visibility="hidden">{children}</Text>
      </>
    );
  }

  return <Text>{children}</Text>;
};

export default renderButtonChildren;
