import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';

import { fonts, componentStyles } from '../../../utils';
import Heading, { HeadingProps } from './Heading';

export default {
  title: 'Core/Foundations/Typography/Heading',
  component: Heading,
  argTypes: {
    scale: {
      control: {
        type: 'select',
        options: Object.keys(componentStyles.heading),
      },
    },
    fontFamily: {
      control: {
        type: 'select',
        options: Object.keys(fonts),
      },
    },
    fontWeight: {
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
  fontFamily: 'system',
  fontWeight: 600,
};
