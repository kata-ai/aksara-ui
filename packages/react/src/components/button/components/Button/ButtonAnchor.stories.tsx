import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';
import { IconPen } from '@aksara-ui/icons';

import ButtonAnchor, { ButtonAnchorProps } from './ButtonAnchor';

export default {
  title: 'Core/Components/Button/ButtonAnchor',
  component: ButtonAnchor,
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
        options: [32, 40, 48],
      },
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

const Template: Story<ButtonAnchorProps> = args => (
  <ButtonAnchor type="button" onClick={action('button-click')} {...args} />
);

export const Example = Template.bind({});
Example.args = {
  variant: 'primary',
  size: 40,
  block: false,
  href: 'https://www.youtube.com/watch?v=fdixQDPA2h0',
  target: '_blank',
  children: 'Push Me',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Example.args,
  icon: IconPen,
  iconPosition: 'left',
};
