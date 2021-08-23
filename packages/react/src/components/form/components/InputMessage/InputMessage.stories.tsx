import * as React from 'react';

import InputMessage, { InputMessageProps } from './InputMessage';

export default {
  title: 'Core/Components/Form/InputMessage',
  component: InputMessage,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['success', 'warning', 'info', 'critical'],
      },
    },
    children: {
      control: 'text',
    },
  },
};

export const Example = (args: InputMessageProps) => {
  return <InputMessage {...args} />;
};
Example.args = {
  variant: 'info',
  children: 'Please enter an email address.',
};
