import * as React from 'react';
import { IconLock } from '@aksara-ui/icons';
import { Story } from '@storybook/react';

import { Box } from '../../../../foundations';
import { InputGroup } from '../InputGroup';
import { InputText, InputTextProps } from '../InputText';
import InputLeftElement from './InputLeftElement';
import InputRightElement from './InputRightElement';

export default {
  title: 'Core/Components/Form/InputElement',
  component: [InputLeftElement, InputRightElement],
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

const defaultArgs: InputTextProps = {
  inputSize: 40,
  id: 'password_dummy',
  placeholder: 'Type here...',
  disabled: false,
  errors: false,
};

export const LeftElement: Story<InputTextProps> = ({ inputSize, ...args }) => {
  return (
    <Box>
      <InputGroup inputSize={inputSize}>
        <InputLeftElement inputSize={inputSize}>
          <IconLock />
        </InputLeftElement>
        <InputText size={inputSize} {...args} />
      </InputGroup>
    </Box>
  );
};
LeftElement.args = defaultArgs;

export const RightElement: Story<InputTextProps> = ({ inputSize, ...args }) => {
  return (
    <Box>
      <InputGroup inputSize={inputSize}>
        <InputRightElement inputSize={inputSize}>
          <IconLock />
        </InputRightElement>
        <InputText size={inputSize} {...args} />
      </InputGroup>
    </Box>
  );
};
RightElement.args = defaultArgs;
