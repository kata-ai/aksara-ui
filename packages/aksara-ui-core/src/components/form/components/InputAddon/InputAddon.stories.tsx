import * as React from 'react';
import { Story } from '@storybook/react';
import { IconLock } from '@aksara-ui/icons';

import { Box } from '../../../../foundations';
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
      control: {
        type: 'select',
        options: [40, 48],
      },
    },
  },
};

export const Example: Story<InputTextProps> = ({ ...args }) => {
  return (
    <Box>
      <InputGroup inputSize={40}>
        <InputAddon>
          <IconLock />
        </InputAddon>
        <InputText addon id="password_dummy" name="password_dummy" size={40} {...args} />
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
