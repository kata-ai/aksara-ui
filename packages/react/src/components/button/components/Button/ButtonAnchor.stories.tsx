import * as React from 'react';
import { Story } from '@storybook/react';
import { IconPen } from '@aksara-ui/icons';

import ButtonAnchor, { ButtonAnchorProps } from './ButtonAnchor';

export default {
  title: 'Core/Components/Button/ButtonAnchor',
  component: ButtonAnchor,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'destructive', 'outline-destructive'],
    },
    size: {
      options: [32, 40, 48],
    },
    block: {
      control: 'boolean',
    },
    href: {
      control: 'text',
    },
    target: {
      control: 'text',
    },
    children: {
      control: 'text',
    },
  },
};

const Template: Story<ButtonAnchorProps> = ({ variant, size, block, href, target, isLoading, icon, iconPosition }) => (
  <ButtonAnchor
    type="button"
    variant={variant}
    size={size}
    block={block}
    href={href}
    target={target}
    isLoading={isLoading}
    icon={icon}
    iconPosition={iconPosition}
  >
    Push Me
  </ButtonAnchor>
);

export const Example = Template.bind({});
Example.args = {
  variant: 'primary',
  size: 'md',
  block: false,
  href: 'https://www.youtube.com/watch?v=fdixQDPA2h0',
  target: '_blank',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Example.args,
  icon: IconPen,
  iconPosition: 'left',
};
