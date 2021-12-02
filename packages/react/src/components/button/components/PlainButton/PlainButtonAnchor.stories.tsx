import { IconPen } from '@aksara-ui/icons';
import { Story } from '@storybook/react';
import * as React from 'react';
import PlainButtonAnchor, { PlainButtonAnchorProps } from './PlainButtonAnchor';

export default {
  title: 'Core/Components/Button/PlainButtonAnchor',
  component: PlainButtonAnchor,
  argTypes: {
    variant: {
      options: ['primary', 'destructive', 'disclosure'],
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

const Template: Story<PlainButtonAnchorProps> = ({ variant, size, isLoading, icon, iconPosition, href, target }) => (
  <PlainButtonAnchor
    type="button"
    variant={variant}
    size={size}
    isLoading={isLoading}
    icon={icon}
    iconPosition={iconPosition}
    href={href}
    target={target}
  >
    Push Me
  </PlainButtonAnchor>
);

export const Example: Story<PlainButtonAnchorProps> = Template.bind({});
Example.args = {
  variant: 'primary',
  size: 'md',
  href: 'https://www.youtube.com/watch?v=fdixQDPA2h0',
  target: '_blank',
};

export const WithIcon: Story<PlainButtonAnchorProps> = Template.bind({});
WithIcon.args = {
  ...Example.args,
  icon: IconPen,
  iconPosition: 'left',
};
