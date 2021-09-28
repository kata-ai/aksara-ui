import { Meta, Story } from '@storybook/react';
import * as React from 'react';

import { Stack } from '../../../layout';
import { FormLabel } from '../components';
import { InputTextarea, InputTextareaProps } from '../components/InputTextarea';

export default {
  title: 'Core/Components/Form/InputTextarea',
  component: InputTextarea,
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
} as Meta<InputTextareaProps>;

export const Example: Story<InputTextareaProps> = ({ errors, disabled, rows }) => {
  return (
    <Stack spacing="xs">
      <FormLabel htmlFor="textDummy">Text input</FormLabel>
      <InputTextarea
        id="textDummy"
        name="textDummy"
        placeholder="Type here..."
        errors={errors}
        rows={rows}
        disabled={disabled}
        width="100%"
      />
    </Stack>
  );
};
Example.args = {
  errors: false,
  disabled: false,
  rows: 4,
};
