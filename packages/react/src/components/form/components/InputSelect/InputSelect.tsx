/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import * as React from 'react';
import { useSelect, UseSelectStateChange } from 'downshift';
import { IconChevronStepper } from '@aksara-ui/icons';

import { Text } from '../../../../typography';
import { Box, Stack } from '../../../../layout';
import { useComponentStyles } from '../../../../system';
import { FormLabel } from '../FormLabel';
import { UnstyledButton } from '../../../button';
import { Card } from '../../../card';

export interface InputSelectProps<T> {
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
  handleSelectedItemChange?: (changes: UseSelectStateChange<T>) => void;
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
function InputSelect<T>({
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
}: InputSelectProps<T>) {
  const { isOpen, getToggleButtonProps, getLabelProps, getMenuProps, highlightedIndex, getItemProps } = useSelect<T>({
    items,
    itemToString,
    selectedItem,
    onSelectedItemChange: handleSelectedItemChange,
    initialSelectedItem,
  });

  const styles = useComponentStyles('inputSelect', { size, variant: errors ? 'error' : isOpen ? 'active' : 'default' });

  return (
    <Box width={width} zIndex={10}>
      <Stack spacing="xs" display="block" position="relative">
        {label && (
          <FormLabel display="block" {...getLabelProps()}>
            {label}
          </FormLabel>
        )}
        <UnstyledButton
          type="button"
          disabled={disabled}
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
          {...getToggleButtonProps()}
        >
          <Text scale={200} color={!disabled ? 'greydark02' : 'greymed01'}>
            {selectedItem
              ? itemRenderer
                ? itemRenderer(selectedItem)
                : itemToString
                ? itemToString(selectedItem)
                : selectedItem
              : placeholder}
          </Text>
          <Box display="flex" alignItems="center" justifyContent="center" width={40} height={40}>
            <IconChevronStepper aria-hidden size={16} />
          </Box>
        </UnstyledButton>
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
          {items && items.length !== 0 ? (
            items.map((item, index) => (
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
              fontSize={14}
              textAlign="left"
              lineHeight="20px"
            >
              No items.
            </Box>
          )}
        </Card>
      </Stack>
      {/* if you Tab from menu, focus goes on button, and it shouldn't. only happens here. */}
      <div tabIndex={0} />
    </Box>
  );
}

export default InputSelect;
