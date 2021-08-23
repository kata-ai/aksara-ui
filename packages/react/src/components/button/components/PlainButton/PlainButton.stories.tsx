import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';
import * as React from 'react';

import PlainButton, { PlainButtonProps } from './PlainButton';

export default {
  title: 'Core/Components/Button/PlainButton',
  component: PlainButton,
  argTypes: {
    variant: {
      options: ['primary', 'destructive'],
    },
    size: {
      options: ['sm', 'md'],
    },
    isLoading: {
      control: 'boolean',
    },
    onClick: {
      action: 'clicked',
    },
  },
};

export const Example: Story<PlainButtonProps> = ({ variant, size, isLoading, onClick }) => (
  <PlainButton type="button" variant={variant} size={size} isLoading={isLoading} onClick={onClick}>
    Push Me
  </PlainButton>
);
Example.args = {
  variant: 'primary',
  size: 'sm',
  isLoading: false,
};
