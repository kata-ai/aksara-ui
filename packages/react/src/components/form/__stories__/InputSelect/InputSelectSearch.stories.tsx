import { Story } from '@storybook/react';
import * as React from 'react';
import { Box } from '../../../../layout';
import { InputSelectSearch, InputSelectSearchProps } from '../../components/InputSelect';
import { Text } from '../../../../typography';

export default {
  title: 'Core/Components/Form/InputSelect/InputSelectSearch',
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
};
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
  maxHeight,
}) => {
  const [selected, setSelected] = React.useState<ValueSchema | null>(null);
  const [items] = React.useState([
    { label: 'apple', value: 'a' },
    { label: 'apricot', value: 'b' },
    { label: 'avocado', value: 'c' },
    { label: 'banana', value: 'd' },
    { label: 'bell pepper', value: 'e' },
    { label: 'bilberry', value: 'f' },
    { label: 'blackberry', value: 'g' },
    { label: 'blackcurrant', value: 'h' },
    { label: 'blood orange', value: 'i' },
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
      itemValue={item => item?.value ?? ''}
      handleSelectedItemChange={({ selectedItem }) => {
        if (selectedItem) {
          setSelected(selectedItem);
        }
      }}
      inputValueRenderer={item => (
        <Box>
          <Text scale={200}>{item.label}</Text>
        </Box>
      )}
      items={items}
      width={width}
      maxHeight={maxHeight}
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
  maxHeight: '250px',
};

export const ListOfStringExample: Story<InputSelectSearchProps<ValueSchema>> = ({
  placeholder,
  disabled,
  size,
  label,
  errors,
  width,
  maxHeight,
}) => {
  const [selected, setSelected] = React.useState<string | null>(null);
  const [items] = React.useState([
    'apple',
    'apricot',
    'avocado',
    'banana',
    'bell pepper',
    'bilberry',
    'blackberry',
    'blackcurrant',
    'blood orange',
  ]);
  return (
    <InputSelectSearch
      label={label}
      size={size}
      selectedItem={selected}
      placeholder={placeholder}
      disabled={disabled}
      errors={errors}
      handleSelectedItemChange={({ selectedItem }) => {
        if (selectedItem) {
          setSelected(selectedItem);
        }
      }}
      items={items}
      width={width}
      maxHeight={maxHeight}
    />
  );
};

ListOfStringExample.args = {
  ...Example.args,
};
