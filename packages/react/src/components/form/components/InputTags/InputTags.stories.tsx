import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { InputTags } from '.';
import { InputTagsProps } from './InputTags';

export default {
  title: 'Core/Components/Form/InputTags',
  component: InputTags,
} as Meta<InputTagsProps>;

export const Example: Story<InputTagsProps> = ({ value, placeholder }) => {
  return <InputTags value={value} placeholder={placeholder} />;
};
Example.args = {
  value: ['Keyword 1', 'Keyword 2'],
  placeholder: 'Enter tags...',
};
