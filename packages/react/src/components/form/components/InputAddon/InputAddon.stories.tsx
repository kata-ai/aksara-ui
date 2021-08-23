import * as React from 'react';
import { Story } from '@storybook/react';
import { IconLock } from '@aksara-ui/icons';

import { Box } from '../../../../layout';
import { InputGroup } from '../InputGroup';
import { InputText, InputTextProps } from '../InputText';
import InputAddon from './InputAddon';

export default {
  title: 'Core/Components/Form/InputAddon',
  component: InputAddon,
  argTypes: {
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    errors: {
      control: 'boolean',
    },
    inputSize: {
      options: [40, 48],
    },
  },
};

export const Example: Story<InputTextProps> = ({ size, placeholder, disabled, errors }) => {
  return (
    <Box>
      <InputGroup inputSize={40}>
        <InputAddon>
          <IconLock />
        </InputAddon>
        <InputText
          addon
          id="password_dummy"
          name="password_dummy"
          size={40}
          {...{ size, placeholder, disabled, errors }}
        />
      </InputGroup>
    </Box>
  );
};
Example.args = {
  size: 40,
  placeholder: 'Type here...',
  disabled: false,
  errors: false,
};
