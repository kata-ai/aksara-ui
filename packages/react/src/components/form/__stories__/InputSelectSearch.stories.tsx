import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { InputSelectSearch, InputSelectSearchProps } from '../components/InputSelectSearch';
import { Box } from '../../../layout';

export default {
  title: 'Core/Components/Form/InputSelectSearch',
  component: InputSelectSearch,
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
} as Meta<InputSelectSearchProps<ValueSchema>>;

interface ValueSchema {
  label: string;
  value: string;
}

export const Example: Story<InputSelectSearchProps<ValueSchema>> = ({
  placeholder,
  disabled,
  size,
  label,
  errors,
  width,
}) => {
  const [selected, setSelected] = React.useState<ValueSchema | null>(null);
  const [items] = React.useState([
    { label: 'One', value: 'one' },
    { label: 'Two', value: 'two' },
  ]);
  return (
    <InputSelectSearch
      label={label}
      size={size}
      selectedItem={selected}
      placeholder={placeholder}
      disabled={disabled}
      errors={errors}
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
      items={items}
      width={width}
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
