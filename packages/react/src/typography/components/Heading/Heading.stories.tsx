import * as React from 'react';
import { Story } from '@storybook/react';

import { theme } from '../../../theme';
import Heading, { HeadingProps } from './Heading';

export default {
  title: 'Core/Typography/Heading',
  component: Heading,
  argTypes: {
    scale: {
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    fontFamily: {
      options: Object.keys(theme.fonts),
    },
    fontWeight: {
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
};

const Template: Story<HeadingProps> = ({ scale, fontFamily, fontWeight }) => (
  <Heading {...{ scale, fontFamily, fontWeight }}>We are making AI technology accessible to everyone</Heading>
);

export const Example = Template.bind({});
Example.args = {
  scale: 800,
  fontFamily: 'system',
};
