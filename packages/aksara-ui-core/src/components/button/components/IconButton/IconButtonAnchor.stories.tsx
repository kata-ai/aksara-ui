import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';
import * as React from 'react';
import { IconPen } from '@aksara-ui/icons';

import IconButtonAnchor, { IconButtonAnchorProps } from './IconButtonAnchor';

export default {
  title: 'Core/Components/Button/IconButtonAnchor',
  component: IconButtonAnchor,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'primary', 'outline', 'destructive', 'ghost'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: [24, 32, 40],
      },
    },
    href: {
      control: 'text',
    },
    target: {
      control: 'text',
    },
  },
};

export const Example: Story<IconButtonAnchorProps> = args => (
  <IconButtonAnchor aria-label="Push Me" rel="noopener noreferrer" onClick={action('button-click')} {...args}>
    <IconPen fill="currentColor" aria-hidden="true" />
  </IconButtonAnchor>
);
Example.args = {
  variant: 'outline',
  size: 32,
  href: 'https://www.youtube.com/watch?v=fdixQDPA2h0',
  target: '_blank',
};
