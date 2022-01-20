import { transparentize } from 'polished';
import * as React from 'react';
import { Box } from '../../../../layout';
import { theme } from '../../../../theme';
import ChekcboxTickIcon from './CheckboxTick';

interface CheckboxProps {
  disabled?: boolean;
  selected?: boolean;
}
export const CheckboxContainer: React.FC<CheckboxProps> = ({ children, disabled }) => {
  return (
    <Box
      backgroundColor={!disabled ? 'greylight01' : 'greylight02'}
      width={16}
      height={16}
      borderRadius={2}
      position={'relative'}
    >
      <Box
        position={'absolute'}
        width={16}
        height={16}
        border={'1px solid'}
        borderColor={!disabled ? 'greylight05' : transparentize(0.5, theme.colors.greylight05)}
        borderRadius={2}
      />
      {children}
    </Box>
  );
};

export const CheckboxIndicator = () => {
  return (
    <Box
      position={'absolute'}
      backgroundColor={'blue07'}
      width={16}
      height={16}
      borderRadius={2}
      color="greylight01"
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <ChekcboxTickIcon size={8} fill="currentColor" />
    </Box>
  );
};
