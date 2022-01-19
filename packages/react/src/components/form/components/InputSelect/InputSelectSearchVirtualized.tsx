/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import * as React from 'react';
import { useCombobox, UseComboboxStateChange } from 'downshift';
import { IconChevronStepper } from '@aksara-ui/icons';

import { useVirtual } from 'react-virtual';
import { Box, Stack } from '../../../../layout';
import { InputText } from '../InputText';
import { FormLabel } from '../FormLabel';
import { Card } from '../../../card';
import { ActionList, ActionListItem } from '../../../action-list';
import { Text } from '../../../../typography';
import { useComponentStyles } from '../../../../system';

export interface InputSelectSearchVirtualizedProps<T> {
  /** The input select label */
  label?: string;
  /** Placeholder text for select label */
  placeholder?: string;
  /** Label items. */
  items: Array<T>;
  /** Item height used to defined virtualized item height,
   *  it is required if list item have custom height.
   *  Default is 36px */
  itemHeight?: number;
  /** Selected item. */
  selectedItem?: T | null;
  /** initial/default selected item */
  initialSelectedItem?: T | null;
  /** If the item list is an object/shape, use this to map it into string as list option item. */
  itemToString?: (item: T | null) => string;
  /** If the item list is an object/shape, use this to map it into string as value item. */
  itemValue?: (item: T | null) => string;
  /** The change handler for the select. */
  handleSelectedItemChange?: (changes: UseComboboxStateChange<T>) => void;
  /** If the item list is an object/shape, use this to map a custom element to render on the UI. */
  itemRenderer?: (item: T) => React.ReactNode;
  /**  use this customize element to render input value. */
  inputValueRenderer?: (item: T) => React.ReactNode;
  /** Name of the field form */
  name?: string;
  /** Logic on focus */
  onFocus?: () => void;
  /** Logic on blue */
  onBlur?: () => void;
  /** disabled input */
  disabled?: boolean;
  /** size of input text */
  size?: 'md' | 'lg';
  /** errors is used to show error variant */
  errors?: boolean;
  /** width of input select box */
  width?: string | number;
  /** Max height for list box */
  maxHeight?: string | number;
}

/** Base wrapper for dropdown selector element using Downshift.js + React Virtual */
function InputSelect<T>({
  label,
  placeholder = 'Select an item',
  items,
  itemHeight = 36,
  selectedItem,
  itemToString = item => (item ? String(item) : ''),
  itemValue = item => (item ? String(item) : ''),
  handleSelectedItemChange,
  itemRenderer,
  inputValueRenderer,
  initialSelectedItem,
  onBlur,
  onFocus,
  disabled,
  errors,
  size = 'md',
  width = '100%',
  maxHeight,
}: InputSelectSearchVirtualizedProps<T>) {
  const [inputItems, setInputItems] = React.useState(items);
  const parentRef = React.useRef<HTMLDivElement>(null);
  const rowVirtualizer = useVirtual({
    size: items.length,
    parentRef,
    estimateSize: React.useCallback(() => itemHeight, []),
    overscan: 2,
  });
  const {
    isOpen,
    inputValue,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
    getInputProps,
    getComboboxProps,
    closeMenu,
    toggleMenu,
  } = useCombobox<T>({
    items: inputItems,
    itemToString,
    selectedItem,
    initialSelectedItem,
    stateReducer: (_, actionAndChanges) => {
      const { type, changes } = actionAndChanges;
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEscape:
          return {
            ...changes,
            isOpen: false,
            inputValue: '', // prevent flickering text when press esc
          };
        case useCombobox.stateChangeTypes.ControlledPropUpdatedSelectedItem:
        case useCombobox.stateChangeTypes.FunctionSetInputValue:
          return {
            ...changes,
            inputValue: '',
          };
        case useCombobox.stateChangeTypes.InputChange:
          return {
            ...changes,
            inputValue: changes.inputValue,
          };
        case useCombobox.stateChangeTypes.InputBlur:
        case useCombobox.stateChangeTypes.FunctionCloseMenu:
          return {
            ...changes,
            inputValue: '',
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
        _inputValue ? items.filter(item => itemToString(item).toLowerCase().includes(_inputValue.toLowerCase())) : items
      );
    },
  });
  const renderValueLabel = () => {
    if (!selectedItem) {
      return null;
    }
    if (inputValue && selectedItem) {
      return null;
    }
    if (inputValueRenderer) {
      <Box position={'absolute'} left="12px">
        {inputValueRenderer(selectedItem)}
      </Box>;
    }
    return (
      <Box position={'absolute'} left="12px">
        <Text scale={200} color={!disabled ? 'greydark02' : 'greymed01'}>
          {itemToString(selectedItem)}
        </Text>
      </Box>
    );
  };
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
          {renderValueLabel()}
          <InputText
            disabled={disabled}
            placeholder={!selectedItem ? placeholder : ''}
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
          zIndex={1}
        >
          <ActionList
            overflowY="auto"
            position="relative"
            maxHeight={maxHeight}
            {...getMenuProps({
              ref: parentRef,
            })}
          >
            <li style={{ height: rowVirtualizer.totalSize, listStyle: 'none' }} />
            {inputItems.length !== 0 ? (
              rowVirtualizer.virtualItems.map((item, index) => {
                const selected = selectedItem && itemValue(selectedItem) === itemValue(items[item.index]);
                return (
                  <Box
                    sx={{
                      px: 'sm',
                      position: 'absolute',
                      top: 12 + index * 4,
                      left: 0,
                      width: '100%',
                      height: item.size,
                      transform: `translateY(${item.start}px)`,
                    }}
                  >
                    <ActionListItem
                      sx={
                        highlightedIndex === item.index && (!selectedItem || !selected)
                          ? { backgroundColor: 'greylight03', borderRadius: 'lg' }
                          : {}
                      }
                      isActive={selected}
                      key={item.index}
                      {...getItemProps({
                        item: items[item.index],
                        index: item.index,
                      })}
                    >
                      {itemRenderer
                        ? itemRenderer(items[item.index])
                        : itemToString
                        ? itemToString(items[item.index])
                        : item}
                    </ActionListItem>
                  </Box>
                );
              })
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
