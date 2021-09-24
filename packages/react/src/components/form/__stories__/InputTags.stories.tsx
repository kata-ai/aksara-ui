import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { InputTags, InputTagsProps } from '../components/InputTags';

export default {
  title: 'Core/Components/Form/InputTags',
  component: InputTags,
  argTypes: {
    value: {
      control: 'object',
    },
    placeholder: {
      control: 'text',
    },
    errors: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta<InputTagsProps>;

export const Example: Story<InputTagsProps> = ({ value, errors, disabled, placeholder }) => {
  return <InputTags value={value} errors={errors} disabled={disabled} placeholder={placeholder} />;
};
Example.args = {
  value: ['Keyword 1', 'Keyword 2'],
  placeholder: 'Enter tags...',
  errors: false,
  disabled: false,
};
