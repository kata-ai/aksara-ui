import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import { InputSearchbox, InputSearchboxProps } from '../components/InputSearchbox';

export default {
  title: 'Core/Components/Form/InputSearchbox',
  component: InputSearchbox,
  argTypes: {
    errors: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    inputSize: {
      options: ['md', 'lg'],
    },
  },
} as Meta<InputSearchboxProps>;

export const Example: Story<InputSearchboxProps> = ({ errors, disabled, inputSize }) => {
  return (
    <InputSearchbox
      id="textDummy"
      name="textDummy"
      placeholder="Search..."
      autoComplete="off"
      errors={errors}
      disabled={disabled}
      inputSize={inputSize}
    />
  );
};
Example.args = {
  errors: false,
  disabled: false,
  inputSize: 'md',
};
