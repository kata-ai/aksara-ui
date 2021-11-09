import { Story } from '@storybook/react';
import * as React from 'react';

import { InputMessage, InputMessageProps } from '../components/InputMessage';

export default {
  title: 'Core/Components/Form/InputMessage',
  component: InputMessage,
  argTypes: {
    variant: {
      options: ['success', 'warning', 'info', 'critical'],
    },
  },
};

const Template = ({ variant }: InputMessageProps) => {
  return <InputMessage variant={variant}>Input Helper Text</InputMessage>;
};

export const Example: Story<InputMessageProps> = Template.bind({});
Example.args = {
  variant: 'info',
};
