import * as React from 'react';
import { Story } from '@storybook/react';

import { Box, Text } from '../../../../foundations';
import InputRadioLabel from './InputRadioLabel';
import InputRadio, { InputRadioProps } from './InputRadio';

export default {
  title: 'Core/Components/Form/InputRadio',
  component: InputRadio,
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

export const Example: Story<InputRadioProps> = ({ id, value, ...args }) => {
  return (
    <Box>
      <InputRadioLabel htmlFor={id}>
        <InputRadio id={id} name={id} value={value} {...args} />
        <Text scale={300} ml="xs">
          Radio 1
        </Text>
      </InputRadioLabel>
    </Box>
  );
};
Example.args = {
  id: 'r1',
  value: 'r1',
  disabled: false,
  errors: false,
};
