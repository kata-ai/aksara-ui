/* eslint-disable react/no-array-index-key */
import { Space } from '@aksara-ui/core';
import * as React from 'react';

import { Box, BoxProps } from '../../../../layout';
import { ButtonProps, ButtonSizes, IconButtonSizes } from '../../../button';
import { ButtonVariants } from '../../../button/components/Button';

export interface ButtonGroupProps extends BoxProps {
  /** Join buttons as segmented group. */
  segmented?: boolean;
  /** Stretch the buttons to fit the containing element. */
  fullWidth?: boolean;
  /** Space between buttons. */
  spacing?: keyof Space;
  /** The size of butttons in this button group. */
  size?: IconButtonSizes | ButtonSizes;
  /** Base variant of all the buttons in the group. */
  variant?: ButtonVariants | 'IconButtonVariants';
  /** True if all buttons in the group are disabled. */
  disabled?: boolean;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  segmented,
  fullWidth,
  size = 'md',
  spacing = 'xxs',
  sx,
  disabled,
  ...rest
}) => {
  const validChildren = React.Children.toArray(children).filter(React.isValidElement);

  return (
    <Box
      display="inline-flex"
      alignItems="center"
      flexWrap={segmented ? 'nowrap' : 'wrap'}
      backgroundColor={segmented ? 'greylight03' : null}
      borderRadius={8}
      sx={{
        '> :not([hidden]) ~ :not([hidden])': {
          marginLeft: spacing,
        },
      }}
      {...rest}
    >
      {validChildren.map((child, i) => {
        return (
          <Box key={i}>
            {React.cloneElement(child, {
              size,
              disabled,
              ...(segmented ? { variant: 'segment-item' } : {}),
            } as ButtonProps)}
          </Box>
        );
      })}
    </Box>
  );
};

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
