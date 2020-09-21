import * as React from 'react';
import { Story } from '@storybook/react';

import { Box, Text } from '../../../../foundations';
import InputCheckboxLabel from './InputCheckboxLabel';
import InputCheckbox, { InputCheckboxProps } from './InputCheckbox';

export default {
  title: 'Core/Components/Form/InputCheckbox',
  component: InputCheckbox,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    errors: {
      control: 'boolean',
    },
    id: {
      control: 'text',
    },
  },
};

export const Example: Story<InputCheckboxProps> = ({ id, value, ...rest }) => {
  return (
    <Box>
      <InputCheckboxLabel htmlFor={id}>
        <InputCheckbox id={id} name={id} value={value} {...rest} />
        <Text scale={300} ml="xs">
          Checkbox
        </Text>
      </InputCheckboxLabel>
    </Box>
  );
};
Example.args = {
  id: 'r1',
  value: 'r1',
  disabled: false,
  errors: false,
};
