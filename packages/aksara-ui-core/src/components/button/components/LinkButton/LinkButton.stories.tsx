import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';
import * as React from 'react';

import LinkButton, { LinkButtonProps } from './LinkButton';

export default {
  title: 'Core/Components/Button/LinkButton',
  component: LinkButton,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'destructive', 'inverse'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: [32, 40],
      },
    },
    isLoading: {
      control: 'boolean',
    },
  },
};

export const Example: Story<LinkButtonProps> = args => (
  <LinkButton type="button" onClick={action('button-click')} {...args}>
    Push Me
  </LinkButton>
);
Example.args = {
  variant: 'primary',
  size: 32,
  isLoading: false,
};
