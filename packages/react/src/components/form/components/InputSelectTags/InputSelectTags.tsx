/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
import * as React from 'react';
import { useCombobox, useMultipleSelection, UseMultipleSelectionStateChange } from 'downshift';
import { IconChevronStepper } from '@aksara-ui/icons';

import { Pill } from '../../../pill';
import { Card } from '../../../card';
import { FormLabel } from '../FormLabel';
import { useComponentStyles } from '../../../../system';
import { Box, Wrap, WrapItem, Stack } from '../../../../layout';

export interface InputSelectTagsProps<T> {
  onChange?: (value: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
  errors?: boolean;
  hadleInputChange?: (changes: UseMultipleSelectionStateChange<T>) => void;
  /** open list when onfocus */
  openOnFocus?: boolean;
  label?: string;
  width?: string | number;
  items: T[];
  value: T[];
  /** Max height for list box */
  maxHeight?: string | number;
}

function inputTagsVariant<T>({
  focused,
  disabled,
  errors,
}: Pick<InputSelectTagsProps<T>, 'disabled' | 'errors'> & { focused?: boolean }) {
  if (!disabled) {
    if (errors) {
      return 'error';
    }

    if (focused) {
      return 'focused';
    }

    return 'default';
  }

  return 'disabled';
}

function InputSelectTags<T>({
  label,
  errors,
  disabled,
  placeholder,
  items,
  value,
  hadleInputChange,
  openOnFocus = false,
  width = '100%',
  maxHeight,
}: InputSelectTagsProps<T>) {
  const [inputValue, setInputValue] = React.useState('');
  const [, setFocused] = React.useState(false);

  const tagInputRef = React.useRef<HTMLInputElement>(null);
  const inputTagsStyles = useComponentStyles('inputTags', { variant: inputTagsVariant({ errors, disabled }) });

  const { getSelectedItemProps, getDropdownProps, addSelectedItem, removeSelectedItem, selectedItems } =
    useMultipleSelection({ initialSelectedItems: value, onSelectedItemsChange: hadleInputChange });

  const getFilteredItems = (items: any) =>
    items.filter(
      (item: any) => selectedItems.indexOf(item) < 0 && item.toLowerCase().startsWith(inputValue.toLowerCase())
    );

  const {
    isOpen,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    openMenu,
  } = useCombobox<T>({
    inputValue,
    items: getFilteredItems(items),
    onStateChange: ({ inputValue, type, selectedItem }) => {
      switch (type) {
        case useCombobox.stateChangeTypes.InputChange:
          setInputValue(inputValue || '');
          break;
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          if (selectedItem) {
            setInputValue('');
            addSelectedItem(selectedItem);
            // selectItem(null);
          }

          break;
        default:
          break;
      }
    },
  });

  const handleFocusInput = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent accidentally focusing on the input text when tag pills are clicked
    if (e.target !== e.currentTarget) {
      return;
    }

    if (tagInputRef.current) {
      tagInputRef.current.focus();
    }
  };

  return (
    <Box width={width}>
      <Stack spacing="xxs" display="block" position="relative">
        {label && (
          <FormLabel display="block" {...getLabelProps()}>
            {label}
          </FormLabel>
        )}
        <Box
          sx={inputTagsStyles}
          display="flex"
          position="relative"
          alignItems="center"
          py={9}
          px="sm"
          cursor={disabled ? 'not-allowed' : 'text'}
          onClick={handleFocusInput}
        >
          <Wrap spacing="xxs" display="inline-flex">
            {selectedItems.map((selectedItem, index) => (
              <WrapItem key={`selected-item-${index}`} {...getSelectedItemProps({ selectedItem, index })}>
                <Pill
                  variant="default"
                  hasCloseIcon
                  disabled={disabled}
                  onClick={() => {
                    removeSelectedItem(selectedItem);
                  }}
                >
                  {selectedItem}
                </Pill>
              </WrapItem>
            ))}
            <WrapItem display="flex" flexGrow={1} alignItems="center" {...getComboboxProps()}>
              <Box
                as="input"
                type="text"
                sx={{
                  appearance: 'none',
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: 'greydark02',
                  cursor: 'inherit',
                  display: 'inline-block',
                  fontSize: '12px',
                  height: '24px',
                  outline: 'none',
                  width: '100%',
                  '&::placeholder': {
                    color: 'greymed01',
                  },
                }}
                onFocus={() => {
                  setFocused(true);
                  if (openOnFocus) {
                    openMenu();
                  }
                }}
                onBlur={() => setFocused(false)}
                placeholder={placeholder}
                disabled={disabled}
                ref={tagInputRef}
                {...getInputProps(getDropdownProps({ preventKeyAction: isOpen }))}
              />
            </WrapItem>
          </Wrap>
          <Box position="absolute" right={8} lineHeight="normal">
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
          zIndex="1"
          width={width}
          maxHeight={maxHeight}
          p={0}
          m={0}
          overflowY="scroll"
          {...getMenuProps()}
        >
          {isOpen && getFilteredItems(items).length !== 0 ? (
            getFilteredItems(items).map((item: T, index: number) => (
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
                {item}
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

export default InputSelectTags;
