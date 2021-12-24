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
  /** If the item list is an object/shape, use this to map it into string. */
  itemToString?: (item: T | null) => string;
  /** If the item list is an object/shape, use this to map it into string. */
  itemValue?: (item: T | null) => string;
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
    setInputValue,
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
    stateReducer: (state, actionAndChanges) => {
      const { type, changes } = actionAndChanges;
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEscape:
          return {
            ...changes,
            isOpen: false,
            inputValue: state.inputValue, // prevent flickering text when press esc
          };
        case useCombobox.stateChangeTypes.InputKeyDownArrowDown:
        case useCombobox.stateChangeTypes.InputKeyDownArrowUp:
        case useCombobox.stateChangeTypes.InputKeyDownHome:
        case useCombobox.stateChangeTypes.InputKeyDownEnd:
          rowVirtualizer.scrollToIndex(changes.highlightedIndex ?? 0);
          return changes;
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
        setInputValue(changes.selectedItem ? itemToString(changes.selectedItem) : '');
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
        _inputValue ? items.filter(item => itemToString(item).toLowerCase().includes(_inputValue.toLowerCase())) : items
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
      if (!inputValue && selectedItem && itemValue(selectedItem)) {
        setInputValue(itemToString(selectedItem) ?? '');
        // reset to empty string
      }
    }
  }, [isOpen]);

  const styles = useComponentStyles('inputText', { size, variant: errors ? 'error' : isOpen ? 'active' : 'default' });
  const itemRendererAsValueLabel = selectedItem && itemToString(selectedItem) === inputValue;
  const hideLabelInputValue = itemRendererAsValueLabel && itemRenderer ? { color: 'transparent' } : {};
  return (
    <Box width={width}>
      <Stack spacing="xxs" display="block" position="relative">
        {label && (
          <FormLabel display="block" {...getLabelProps()}>
            {label}
          </FormLabel>
        )}
        <Box display="flex" position="relative" alignItems="center" {...getComboboxProps()}>
          {itemRenderer && itemRendererAsValueLabel ? (
            <Box position={'absolute'} left="15px">
              {itemRenderer(selectedItem)}
            </Box>
          ) : null}
          <InputText
            disabled={disabled}
            placeholder={placeholder}
            width="100%"
            sx={{ ...styles, ...hideLabelInputValue }}
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
                      px={'sm'}
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
