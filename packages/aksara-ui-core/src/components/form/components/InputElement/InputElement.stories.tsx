import * as React from 'react';
import { IconLock } from '@aksara-ui/icons';

import { Box } from '../../../../foundations';
import { InputGroup } from '../InputGroup';
import { InputText } from '../InputText';
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

const defaultArgs = {
  inputSize: 40,
  id: 'password_dummy',
  placeholder: 'Type here...',
  disabled: false,
  errors: false,
};

export const LeftElement = ({ inputSize, ...args }) => {
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

export const RightElement = ({ inputSize, ...args }) => {
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
