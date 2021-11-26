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
  maxHeight,
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
      maxHeight={maxHeight}
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
        { label: 'One', value: 'one' },
        { label: 'Two', value: 'two' },
        { label: 'One', value: 'one' },
        { label: 'Two', value: 'two' },
        { label: 'One', value: 'one' },
        { label: 'Two', value: 'two' },
        { label: 'One', value: 'one' },
        { label: 'Two', value: 'two' },
        { label: 'One', value: 'one' },
        { label: 'Two', value: 'two' },
        { label: 'One', value: 'one' },
        { label: 'Two', value: 'two' },
        { label: 'One', value: 'one' },
        { label: 'Two', value: 'two' },
        { label: 'One', value: 'one' },
        { label: 'Two', value: 'two' },
        { label: 'One', value: 'one' },
        { label: 'Two', value: 'two' },
        { label: 'One', value: 'one' },
        { label: 'Two', value: 'two' },
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
  maxHeight: '250px',
};

export const MutlipleInputSelect: Story<InputSelectProps<ValueSchema>> = () => {
  const [selected1, setSelected1] = React.useState<ValueSchema | null>(null);
  const [selected2, setSelected2] = React.useState<ValueSchema | null>(null);
  return (
    <>
      <InputSelect
        label={'label-1'}
        size="md"
        selectedItem={selected1}
        placeholder="Select..."
        errors={false}
        width="100%"
        itemToString={item => (item ? `${item.label}` : '')}
        itemRenderer={item => (
          <>
            <Box width={15} mr="sm" />
            {`${item.label}`}
          </>
        )}
        handleSelectedItemChange={({ selectedItem }) => {
          if (selectedItem) {
            setSelected1(selectedItem);
          }
        }}
        items={[
          { label: 'One', value: 'one' },
          { label: 'Two', value: 'two' },
        ]}
      />
      <InputSelect
        label={'label-2'}
        size="md"
        selectedItem={selected2}
        placeholder="Select..."
        errors={false}
        width="100%"
        itemToString={item => (item ? `${item.label}` : '')}
        itemRenderer={item => (
          <>
            <Box width={15} mr="sm" />
            {`${item.label}`}
          </>
        )}
        handleSelectedItemChange={({ selectedItem }) => {
          if (selectedItem) {
            setSelected2(selectedItem);
          }
        }}
        items={[
          { label: 'One', value: 'one' },
          { label: 'Two', value: 'two' },
        ]}
      />
    </>
  );
};
