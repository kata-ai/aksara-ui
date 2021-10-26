import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { InputSelect, InputSelectProps } from '../components/InputSelect';
import { Box } from '../../../layout';

export default {
  title: 'Core/Components/Form/InputSelect',
  component: InputSelect,
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
} as Meta<InputSelectProps<ValueSchema>>;

interface ValueSchema {
  label: string;
  value: string;
}

export const Example: Story<InputSelectProps<ValueSchema>> = ({
  placeholder,
  disabled,
  size,
  label,
  errors,
  width,
}) => {
  const [selected, setSelected] = React.useState<ValueSchema | null>(null);
  return (
    <InputSelect
      label={label}
      size={size}
      selectedItem={selected}
      placeholder={placeholder}
      disabled={disabled}
      errors={errors}
      width={width}
      itemToString={item => (item ? `${item.label}` : '')}
      itemRenderer={item => (
        <>
          <Box width={15} mr="sm" />
          {`${item.label}`}
        </>
      )}
      handleSelectedItemChange={({ selectedItem }) => {
        if (selectedItem) {
          setSelected(selectedItem);
        }
      }}
      items={[
        { label: 'One', value: 'one' },
        { label: 'Two', value: 'two' },
      ]}
    />
  );
};

Example.args = {
  placeholder: 'Select...',
  size: 'md',
  disabled: false,
  label: 'Label input',
  errors: false,
  width: '100%',
};
