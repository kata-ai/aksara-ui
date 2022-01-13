import { Meta, Story } from '@storybook/react';
import * as React from 'react';
import { InputGroup, InputSelect, InputSelectProps, FormLabel, InputPrefix } from '../../components';
import { Box, Stack } from '../../../../layout';
import { Avatar } from '../../../avatar';

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
    maxHeight: {
      control: 'number',
    },
  },
} as Meta<InputSelectProps<ValueSchema>>;

interface ValueSchema {
  label: string;
  value: string;
}

export const InputSelectExample: Story<InputSelectProps<ValueSchema>> = ({
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
    { label: 'ab', value: 'a' },
    { label: 'abc', value: 'b' },
    { label: 'bcd', value: 'c' },
    { label: 'cde', value: 'd' },
    { label: 'def', value: 'e' },
    { label: 'efg', value: 'f' },
    { label: 'fgh', value: 'g' },
    { label: 'ghi', value: 'h' },
    { label: 'hij', value: 'i' },
    { label: 'ijk', value: 'j' },
    { label: 'jkl', value: 'k' },
  ]);
  return (
    <InputSelect
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
      maxHeight={maxHeight}
    />
  );
};
InputSelectExample.args = {
  placeholder: 'Select...',
  size: 'md',
  disabled: false,
  label: 'Label input',
  errors: false,
  width: '100%',
  maxHeight: 250,
};

export const InputSelectWithPrefix: Story<InputSelectProps<ValueSchema>> = ({
  placeholder,
  disabled,
  size,
  errors,
  width,
  maxHeight,
}) => {
  const [selected, setSelected] = React.useState<ValueSchema | null>(null);
  const [items] = React.useState([
    { label: 'ab', value: 'a' },
    { label: 'abc', value: 'b' },
    { label: 'bcd', value: 'c' },
    { label: 'cde', value: 'd' },
    { label: 'def', value: 'e' },
    { label: 'efg', value: 'f' },
    { label: 'fgh', value: 'g' },
    { label: 'ghi', value: 'h' },
    { label: 'hij', value: 'i' },
    { label: 'ijk', value: 'j' },
    { label: 'jkl', value: 'k' },
  ]);
  return (
    <Stack spacing="xs">
      <FormLabel htmlFor="textDummy">Select input</FormLabel>
      <InputGroup width="100%" maxWidth={360}>
        <InputPrefix disabled={disabled} zIndex={1}>
          Sort by
        </InputPrefix>
        <InputSelect
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
          maxHeight={maxHeight}
          inputStyle={{
            pl: 58,
          }}
        />
      </InputGroup>
    </Stack>
  );
};
InputSelectWithPrefix.args = {
  placeholder: 'Select...',
  size: 'md',
  disabled: false,
  errors: false,
  width: '100%',
  maxHeight: 250,
};

export const InputSelectWithPrefixAvatar: Story<InputSelectProps<ValueSchema>> = ({
  placeholder,
  disabled,
  size,
  errors,
  width,
  maxHeight,
}) => {
  const [selected, setSelected] = React.useState<ValueSchema | null>(null);
  const [items] = React.useState([
    { label: 'Ai Nakamura', value: 'a' },
    { label: 'Eren Yeager', value: 'b' },
    { label: 'Rahmat Sentosa', value: 'c' },
    { label: 'Goerge Frex', value: 'd' },
    { label: 'Zeni Luxfriss', value: 'e' },
  ]);
  return (
    <Stack spacing="xs">
      <FormLabel htmlFor="textDummy">Select input</FormLabel>
      <InputGroup width="100%" maxWidth={360}>
        {selected?.label && (
          <InputPrefix disabled={disabled} zIndex={1}>
            <Avatar name={selected?.label} size="sm" />
          </InputPrefix>
        )}
        <InputSelect
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
          maxHeight={maxHeight}
          inputStyle={
            selected?.label
              ? {
                  pl: 44,
                }
              : {}
          }
        />
      </InputGroup>
    </Stack>
  );
};
InputSelectWithPrefixAvatar.args = {
  placeholder: 'Select...',
  size: 'lg',
  disabled: false,
  errors: false,
  width: '100%',
  maxHeight: 250,
};
