import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';
import * as React from 'react';
import { IconPen } from '@aksara-ui/icons';

import IconButton, { IconButtonProps } from './IconButton';

export default {
  title: 'Core/Components/Button/IconButton',
  component: IconButton,
  argTypes: {
    variant: {
      options: ['default', 'outline', 'destructive', 'ghost'],
    },
    size: {
      options: [24, 32, 40],
    },
  },
};

export const Example: Story<IconButtonProps> = ({ variant, size, disabled }) => (
  <IconButton
    type="button"
    aria-label="Push Me"
    onClick={action('button-click')}
    variant={variant}
    size={size}
    disabled={disabled}
  >
    <IconPen fill="currentColor" aria-hidden />
  </IconButton>
);
Example.args = {
  variant: 'outline',
  size: 32,
};
