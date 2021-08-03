import { Story } from '@storybook/react';
import * as React from 'react';

import { theme } from '../../../theme';
import Spinner, { SpinnerProps } from './Spinner';

export default {
  title: 'Core/Components/Loading/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: [16, 24, 32, 48],
      },
    },
    spinnerColor: {
      control: 'text',
    },
    number: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
  },
};

const Template: Story<SpinnerProps> = args => <Spinner {...args} />;

export const Example = Template.bind({});
Example.args = {
  spinnerColor: theme.colors.blue06,
  size: 24,
  label: 'Loading...',
};
