import * as React from 'react';
import { Story } from '@storybook/react';

import { Box } from '../../../layout';
import { Text } from '../../../typography';
import InputRadioLabel from '../components/InputRadio/InputRadioLabel';
import InputRadio, { InputRadioProps } from '../components/InputRadio/InputRadio';

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
    checked: {
      control: 'boolean',
    },
  },
};

export const Example: Story<InputRadioProps> = ({ id, value, checked, disabled }) => {
  return (
    <Box>
      <InputRadio id={id} name={id} value={value} checked={checked} disabled={disabled} />
    </Box>
  );
};

Example.args = {
  checked: false,
  disabled: false,
};
