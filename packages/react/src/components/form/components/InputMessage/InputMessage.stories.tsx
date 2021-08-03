import * as React from 'react';

import InputMessage from './InputMessage';
import { messageIconVariants } from '../../../message/variants';

export default {
  title: 'Core/Components/Form/InputMessage',
  component: InputMessage,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: Object.keys(messageIconVariants),
      },
    },
    children: {
      control: 'text',
    },
  },
};

export const Example = (args: any) => {
  return <InputMessage {...args} />;
};
Example.args = {
  variant: 'error',
  children: 'Please enter an email address.',
};
