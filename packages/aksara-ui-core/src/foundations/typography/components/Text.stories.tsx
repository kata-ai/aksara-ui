import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';

import Text, { TextProps } from './Text';

export default {
  title: 'Core/Foundations/Text',
  component: Text,
  argTypes: {
    scale: {
      control: {
        type: 'select',
        options: [200, 300, 400, 500],
      },
    },
  },
};

const Template: Story<TextProps> = args => (
  <Text onClick={action('button-click')} {...args}>
    We are making AI technology accessible to everyone
  </Text>
);

export const Example = Template.bind({});
Example.args = {
  scale: 400,
};
