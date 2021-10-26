/* eslint-disable no-shadow */
import { useCombobox, useMultipleSelection } from 'downshift';
import * as React from 'react';

const InputSelectTags = () => {
  const [inputValue, setInputValue] = React.useState('');
  const items = [
    'Neptunium',
    'Plutonium',
    'Americium',
    'Curium',
    'Berkelium',
    'Californium',
    'Einsteinium',
    'Fermium',
    'Mendelevium',
    'Nobelium',
    'Lawrencium',
    'Rutherfordium',
    'Dubnium',
    'Seaborgium',
    'Bohrium',
    'Hassium',
    'Meitnerium',
    'Darmstadtium',
    'Roentgenium',
    'Copernicium',
    'Nihonium',
    'Flerovium',
    'Moscovium',
    'Livermorium',
    'Tennessine',
    'Oganesson',
  ];
  const { getSelectedItemProps, getDropdownProps, addSelectedItem, removeSelectedItem, selectedItems } =
    useMultipleSelection({ initialSelectedItems: [items[0], items[1]] });
  const getFilteredItems = items =>
    items.filter(item => selectedItems.indexOf(item) < 0 && item.toLowerCase().startsWith(inputValue.toLowerCase()));
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    selectItem,
  } = useCombobox({
    inputValue,
    items: getFilteredItems(items),
    onStateChange: ({ inputValue, type, selectedItem }) => {
      switch (type) {
        case useCombobox.stateChangeTypes.InputChange:
          setInputValue(inputValue);
          break;
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          if (selectedItem) {
            setInputValue('');
            addSelectedItem(selectedItem);
            selectItem(null);
          }

          break;
        default:
          break;
      }
    },
  });

  console.dir(selectedItems);
  return (
    <div>
      <label {...getLabelProps()}>Choose some elements:</label>
      <div>
        {selectedItems.map((selectedItem, index) => (
          <span key={`selected-item-${index}`} {...getSelectedItemProps({ selectedItem, index })}>
            {selectedItem}
            <span onClick={() => removeSelectedItem(selectedItem)}>&#10005;</span>
          </span>
        ))}
        <div {...getComboboxProps()}>
          <input {...getInputProps(getDropdownProps({ preventKeyAction: isOpen }))} />
          <button {...getToggleButtonProps()} aria-label={'toggle menu'}>
            &#8595;
          </button>
        </div>
      </div>
      <ul {...getMenuProps()}>
        {isOpen &&
          getFilteredItems(items).map((item, index) => (
            <li
              style={highlightedIndex === index ? { backgroundColor: '#bde4ff' } : {}}
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default InputSelectTags;
