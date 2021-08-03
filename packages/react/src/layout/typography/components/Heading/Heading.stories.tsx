import * as React from 'react';
import { Story } from '@storybook/react';

import { theme } from '../../../../theme';
import { headingScaleOptions } from '../../utils/storybook';
import Heading, { HeadingProps } from './Heading';

export default {
  title: 'Core/Typography/Heading',
  component: Heading,
  argTypes: {
    scale: headingScaleOptions,
    fontFamily: {
      control: {
        type: 'select',
        options: Object.keys(theme.fonts),
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
  <Heading {...args}>We are making AI technology accessible to everyone</Heading>
);

export const Example = Template.bind({});
Example.args = {
  scale: 800,
  fontFamily: 'system',
  fontWeight: 600,
};

export const MediaQueries = () => {
  return <Heading scale={[800, 900]}>We are making AI technology accessible to everyone</Heading>;
};
