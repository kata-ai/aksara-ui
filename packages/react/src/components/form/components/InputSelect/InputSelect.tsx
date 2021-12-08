/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import * as React from 'react';
import { useCombobox, UseComboboxStateChange } from 'downshift';
import { IconChevronStepper } from '@aksara-ui/icons';

import { Box, Stack } from '../../../../layout';
import { InputText } from '../InputText';
import { FormLabel } from '../FormLabel';
import { Card } from '../../../card';
import { ActionList, ActionListItem } from '../../../actionList';

import { useComponentStyles } from '../../../../system';

type SelectItem<T> = {
  label: string;
  value: T;
};
export interface InputSelectProps<T> {
  /** The input select label */
  label?: string;
  /** Placeholder text for select label */
  placeholder?: string;
  /** Label items. */
  items: Array<SelectItem<T>>;
  /** Selected item. */
  selectedItem?: SelectItem<T> | null;

  initialSelectedItem?: SelectItem<T> | null;
  /** If the item list is an object/shape, use this to map it into string. */
  itemToString?: (item: SelectItem<T> | null) => string;
  /** The change handler for the select. */
  handleSelectedItemChange?: (changes: UseComboboxStateChange<SelectItem<T>>) => void;
  /** If the item list is an object/shape, use this to map a custom element to render on the UI. */
  itemRenderer?: (item: SelectItem<T>) => React.ReactNode;
  /** Name of the field form */
  name?: string;
  /** open list when onfocus */
  openOnFocus?: boolean;
  /** Logic on focus */
  onFocus?: () => void;
  /** Logic on blue */
  onBlur?: () => void;

  disabled?: boolean;

  size?: 'md' | 'lg';

  errors?: boolean;

  width?: string | number;
  /** Max height for list box */
  maxHeight?: string | number;
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
  maxHeight,
}: InputSelectProps<T>) {
  const [inputItems, setInputItems] = React.useState(items);
  const {
    isOpen,
    inputValue,
    setInputValue,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
    getInputProps,
    getComboboxProps,
    closeMenu,
    toggleMenu,
  } = useCombobox<{ label: string; value: T }>({
    items: inputItems,
    itemToString,
    selectedItem,
    initialSelectedItem,
    stateReducer: (state, actionAndChanges) => {
      const { type, changes } = actionAndChanges;
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEscape:
          return {
            ...changes,
            isOpen: false,
            inputValue: state.inputValue, // prevent flickering text when press esc
          };
        default:
          return changes;
      }
    },
    onSelectedItemChange: changes => {
      if (handleSelectedItemChange) {
        handleSelectedItemChange(changes);
      }
      closeMenu();
    },
    onIsOpenChange: changes => {
      if (isOpen) {
        setInputValue(changes.selectedItem?.label ?? '');
      }
    },
    onStateChange: ({ type, inputValue: _inputValue }) => {
      switch (type) {
        case useCombobox.stateChangeTypes.FunctionOpenMenu: {
          if (_inputValue) {
            closeMenu();
          }
          break;
        }

        default:
          break;
      }
    },
    onInputValueChange: ({ inputValue: _inputValue }) => {
      setInputItems(
        _inputValue ? items.filter(item => item.label.toLowerCase().includes(_inputValue.toLowerCase())) : items
      );
    },
  });
  React.useEffect(() => {
    if (isOpen && inputValue) {
      setInputItems(items);
    } else if (handleSelectedItemChange) {
      // if inputValue not listed on option
      // then reset
      // reset to prev value
      if (!inputValue && selectedItem?.label) {
        setInputValue(selectedItem?.label);
        // reset to empty string
      }
    }
  }, [isOpen]);

  const styles = useComponentStyles('inputText', { size, variant: errors ? 'error' : isOpen ? 'active' : 'default' });

  return (
    <Box width={width}>
      <Stack spacing="xxs" display="block" position="relative">
        {label && (
          <FormLabel display="block" {...getLabelProps()}>
            {label}
          </FormLabel>
        )}
        <Box display="flex" position="relative" alignItems="center" {...getComboboxProps()}>
          <InputText
            disabled={disabled}
            placeholder={placeholder}
            width="100%"
            sx={{ ...styles }}
            onClick={() => {
              toggleMenu();
            }}
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
          {/* right 9, because container box doesn't have border 1 */}
          <Box position="absolute" right={9} lineHeight="normal">
            <IconChevronStepper size={16} />
          </Box>
        </Box>

        <Card
          position="absolute"
          float="left"
          top="100%"
          left={0}
          width={width}
          maxHeight={maxHeight}
          display={isOpen ? 'block' : 'none'}
          elevation={3}
          overflow="hidden"
        >
          <ActionList px="sm" overflowY="auto" maxHeight={maxHeight} {...getMenuProps()}>
            {inputItems.length !== 0 ? (
              inputItems.map((item, index) => (
                <ActionListItem
                  sx={
                    highlightedIndex === index && selectedItem?.value !== item.value
                      ? { backgroundColor: 'greylight03', borderRadius: 'lg' }
                      : {}
                  }
                  isActive={selectedItem?.value === item.value}
                  key={`${item.label}_${item.value}`}
                  {...getItemProps({ item, index })}
                >
                  {itemRenderer ? itemRenderer(item) : itemToString ? itemToString(item) : item}
                </ActionListItem>
              ))
            ) : (
              <ActionListItem disabled>No items.</ActionListItem>
            )}
          </ActionList>
        </Card>
      </Stack>
    </Box>
  );
}

export default InputSelect;
