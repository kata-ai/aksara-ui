import { Story } from '@storybook/react';
import * as React from 'react';
import { IconPen } from '@aksara-ui/icons';

import IconButtonAnchor, { IconButtonAnchorProps } from './IconButtonAnchor';

export default {
  title: 'Core/Components/Button/IconButtonAnchor',
  component: IconButtonAnchor,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'destructive', 'ghost'],
    },
    size: {
      options: ['sm', 'md', 'lg'],
    },
    href: {
      control: 'text',
    },
    target: {
      control: 'text',
    },
  },
};

export const Example: Story<IconButtonAnchorProps> = ({ variant, size, href, target }) => (
  <IconButtonAnchor
    aria-label="Push Me"
    rel="noopener noreferrer"
    variant={variant}
    size={size}
    href={href}
    target={target}
  >
    <IconPen fill="currentColor" aria-hidden="true" />
  </IconButtonAnchor>
);
Example.args = {
  variant: 'primary',
  size: 'md',
  href: 'https://www.youtube.com/watch?v=fdixQDPA2h0',
  target: '_blank',
};
