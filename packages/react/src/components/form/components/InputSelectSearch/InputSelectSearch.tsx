/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import * as React from 'react';
import { useCombobox, UseComboboxStateChange } from 'downshift';
import { IconChevronStepper } from '@aksara-ui/icons';

import { Box, Stack } from '../../../../layout';
import { FormLabel, Card, InputText } from '../../..';
import { useComponentStyles } from '../../../../system';

export interface InputSelectSearchProps<T extends { value: string }> {
  /** The input select label */
  label?: string;
  /** Placeholder text for select label */
  placeholder?: string;
  /** Label items. */
  items: T[];
  /** Selected item. */
  selectedItem?: T | null;

  initialSelectedItem?: T | null;
  /** If the item list is an object/shape, use this to map it into string. */
  itemToString?: (item: T | null) => string;
  /** The change handler for the select. */
  handleSelectedItemChange?: (changes: UseComboboxStateChange<T>) => void;
  /** If the item list is an object/shape, use this to map a custom element to render on the UI. */
  itemRenderer?: (item: T) => React.ReactNode;
  /** Name of the field form */
  name?: string;
  /** Logic on focus */
  onFocus?: () => void;
  /** Logic on blue */
  onBlur?: () => void;

  disabled?: boolean;

  size?: 'md' | 'lg';

  errors?: boolean;

  width?: string | number;
}

/** Base wrapper for dropdown selector element using Downshift.js */
function InputSelect<T extends { value: string }>({
  label,
  placeholder = 'Select an item',
  items,
  selectedItem,
  itemToString,
  handleSelectedItemChange,
  itemRenderer,
  initialSelectedItem,
  onBlur,
  onFocus,
  disabled,
  errors,
  size = 'md',
  width = '100%',
}: InputSelectSearchProps<T>) {
  const [inputItems, setInputItems] = React.useState(items);
  const {
    isOpen,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
    getInputProps,
    getComboboxProps,
  } = useCombobox<T>({
    items: inputItems,
    itemToString,
    selectedItem,
    initialSelectedItem,
    onSelectedItemChange: handleSelectedItemChange,
    onInputValueChange: ({ inputValue }) => {
      if (inputValue) {
        setInputItems(items.filter(item => item.value.toLowerCase().startsWith(inputValue.toLowerCase())));
      }
    },
  });

  const styles = useComponentStyles('inputText', { size, variant: errors ? 'error' : 'default' });

  return (
    <Box width={width} zIndex={10}>
      <Stack spacing="xs" display="block" position="relative">
        {label && (
          <FormLabel display="block" {...getLabelProps()}>
            {label}
          </FormLabel>
        )}
        <Box display="flex" position="relative" {...getComboboxProps()}>
          <InputText
            disabled={disabled}
            placeholder={placeholder}
            width="100%"
            sx={{ ...styles }}
            onFocus={() => {
              if (onFocus) {
                onFocus();
              }
            }}
            onBlur={() => {
              if (onBlur) {
                onBlur();
              }
            }}
            {...getInputProps()}
          />
          <Box position="absolute" right={8} top={size === 'md' ? 8 : 12}>
            <IconChevronStepper size={16} />
          </Box>
        </Box>

        <Card
          as="ul"
          elevation={3}
          display={isOpen ? 'block' : 'none'}
          position="absolute"
          float="left"
          top="100%"
          left={0}
          mt="xs"
          width={width}
          p={0}
          m={0}
          {...getMenuProps()}
        >
          {inputItems.length !== 0 ? (
            inputItems.map((item, index) => (
              <Box
                as="li"
                px="md"
                py="xs"
                _hover={{
                  backgroundColor: 'blue01',
                }}
                cursor="pointer"
                textAlign="left"
                lineHeight="20px"
                fontSize={14}
                sx={highlightedIndex === index ? { backgroundColor: 'blue01' } : {}}
                key={`${item}_${index}`}
                {...getItemProps({ item, index })}
              >
                {itemRenderer ? itemRenderer(item) : itemToString ? itemToString(item) : item}
              </Box>
            ))
          ) : (
            <Box
              as="li"
              px="md"
              py="xs"
              color="grey06"
              cursor="pointer"
              textAlign="left"
              fontSize={14}
              lineHeight="20px"
            >
              No items.
            </Box>
          )}
        </Card>
      </Stack>
    </Box>
  );
}

export default InputSelect;
