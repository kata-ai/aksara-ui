import { Story } from '@storybook/react';
import * as React from 'react';
import { IconPen } from '@aksara-ui/icons';

import IconButton, { IconButtonProps } from './IconButton';

export default {
  title: 'Core/Components/Button/IconButton',
  component: IconButton,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'outline-destructive', 'plain', 'plain-destructive'],
    },
    size: {
      options: ['sm', 'md', 'lg'],
    },
    onClick: {
      action: 'clicked',
    },
    selected: {
      control: 'boolean',
    },
  },
};

export const Example: Story<IconButtonProps> = ({ variant, size, disabled, onClick, selected }) => (
  <IconButton
    type="button"
    aria-label="Push Me"
    onClick={onClick}
    variant={variant}
    size={size}
    disabled={disabled}
    selected={selected}
  >
    <IconPen fill="currentColor" aria-hidden />
  </IconButton>
);
Example.args = {
  variant: 'primary',
  size: 'md',
};
