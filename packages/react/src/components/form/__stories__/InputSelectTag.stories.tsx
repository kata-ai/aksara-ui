import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { InputSelectTags, InputSelectTagsProps } from '../components/InputSelectTags';

export default {
  title: 'Core/Components/Form/InputSelectTag',
  component: InputSelectTags,
  argTypes: {
    placeholder: {
      control: 'text',
    },
    errors: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    size: {
      options: ['md', 'lg'],
    },
    label: {
      control: 'text',
    },
    width: {
      control: 'number',
    },
  },
} as Meta<InputSelectTagsProps>;

export const Example: Story<InputSelectTagsProps> = ({ placeholder, disabled, label, errors, width }) => {
  const [value, setValue] = React.useState<string[]>(['Test']);
  return (
    <InputSelectTags
      label={label}
      placeholder={placeholder}
      disabled={disabled}
      errors={errors}
      width={width}
      items={['Test', 'Amd', 'Intel', 'Radeon']}
      value={value}
      hadleInputChange={({ selectedItems }) => {
        if (selectedItems) {
          setValue(selectedItems);
        }
      }}
    />
  );
};

Example.args = {
  placeholder: 'Select...',
  disabled: false,
  label: 'Label input',
  errors: false,
  width: '100%',
};
