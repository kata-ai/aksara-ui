import { Meta, Story } from '@storybook/react';
import { IconLock, IconWarningTriangle } from '@aksara-ui/icons';
import * as React from 'react';

import { Box } from '../../../layout';
import { InputGroup, InputIcon, FormLabel, InputPrefix, InputSuffix } from '../components';
import { InputText, InputTextProps } from '../components/InputText';

export default {
  title: 'Core/Components/Form/InputText',
  component: InputText,
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
} as Meta<InputTextProps>;

export const Example: Story<InputTextProps> = ({ errors, inputSize, disabled }) => {
  return (
    <Box>
      <FormLabel htmlFor="textDummy">Text input</FormLabel>
      <InputText
        id="textDummy"
        name="textDummy"
        placeholder="Type here..."
        errors={errors}
        inputSize={inputSize}
        disabled={disabled}
      />
    </Box>
  );
};
Example.args = {
  errors: false,
  disabled: false,
  inputSize: 'md',
};

export const WithIcons: Story<InputTextProps> = ({ errors, inputSize, disabled }) => {
  return (
    <Box>
      <FormLabel htmlFor="textDummy">Text input</FormLabel>
      <InputGroup width="100%" maxWidth={360}>
        <InputIcon icon={IconLock} iconPosition="left" iconText="Username" disabled={disabled} />
        <InputText
          id="textDummy"
          name="textDummy"
          placeholder="Type here..."
          errors={errors}
          inputSize={inputSize}
          disabled={disabled}
          width="100%"
          pl={36}
          pr={36}
        />
        <InputIcon icon={IconWarningTriangle} iconPosition="right" iconText="Username" disabled={disabled} />
      </InputGroup>
    </Box>
  );
};
WithIcons.args = {
  errors: false,
  disabled: false,
  inputSize: 'md',
};

export const WithPrefixSuffix: Story<InputTextProps> = ({ errors, inputSize, disabled }) => {
  return (
    <Box>
      <FormLabel htmlFor="textDummy">Text input</FormLabel>
      <InputGroup width="100%" maxWidth={360}>
        <InputPrefix disabled={disabled}>Prefix</InputPrefix>
        <InputText
          id="textDummy"
          name="textDummy"
          placeholder="Type here..."
          errors={errors}
          inputSize={inputSize}
          disabled={disabled}
          width="100%"
          pl={49}
          pr={49}
        />
        <InputSuffix disabled={disabled}>Suffix</InputSuffix>
      </InputGroup>
    </Box>
  );
};
WithIcons.args = {
  errors: false,
  disabled: false,
  inputSize: 'md',
};
