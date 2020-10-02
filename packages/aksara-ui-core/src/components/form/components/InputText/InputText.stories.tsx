import * as React from 'react';
import { Story } from '@storybook/react';

import { Box } from '../../../../foundations';
import { FormLabel, FormLabelProps } from '../FormLabel';
import InputText, { InputTextProps } from './InputText';

export default {
  title: 'Core/Components/Form/InputText',
  component: InputText,
  argTypes: {
    addon: {
      control: null,
    },
    children: {
      control: 'text',
      name: 'label',
    },
  },
};

export const Example: Story<InputTextProps & FormLabelProps> = ({ children, ...restArgs }) => {
  return (
    <Box>
      <FormLabel htmlFor="textDummy">{children}</FormLabel>
      <InputText id="textDummy" name="textDummy" {...restArgs} />
    </Box>
  );
};

Example.args = {
  children: 'Text input',
  placeholder: 'Type here...',
  disabled: false,
  errors: false,
};
