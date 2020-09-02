import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';

import Heading, { HeadingProps } from './Heading';

export default {
  title: 'Core/Foundations/Heading',
  component: Heading,
  argTypes: {
    scale: {
      control: {
        type: 'select',
        options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
  },
};

const Template: Story<HeadingProps> = args => (
  <Heading onClick={action('button-click')} {...args}>
    We are making AI technology accessible to everyone
  </Heading>
);

export const Example = Template.bind({});
Example.args = {
  scale: 800,
};
