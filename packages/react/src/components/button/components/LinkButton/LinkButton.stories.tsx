import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';
import * as React from 'react';

import LinkButton, { LinkButtonProps } from './LinkButton';

export default {
  title: 'Core/Components/Button/LinkButton',
  component: LinkButton,
  argTypes: {
    variant: {
      options: ['primary', 'destructive', 'inverse'],
    },
    size: {
      options: [32, 40],
    },
    isLoading: {
      control: 'boolean',
    },
  },
};

export const Example: Story<LinkButtonProps> = ({ variant, size, isLoading }) => (
  <LinkButton type="button" onClick={action('button-click')} variant={variant} size={size} isLoading={isLoading}>
    Push Me
  </LinkButton>
);
Example.args = {
  variant: 'primary',
  size: 32,
  isLoading: false,
};
