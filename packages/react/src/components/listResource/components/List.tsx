import * as React from 'react';
import { Box } from '../../../layout';
import ListHeader from './ListHeader';
import ListItem from './ListItem';
// TODO create List Component

/**
 * receive list data
 * will render data using listItem , props data
 * renderItem props, to render per item
 *
 */
/**
 * api
 * selectedItems to show which item is selected
 * OR
 * handling selectedItem in items data
 *   note: this causing item data mixed with state item
 *        not recommended
 * conclusion: use selectedItems to show selected items
 */

/**
 * api
 * onSelectionChange to get items selected changes
 * as array
 * OR
 * as item
 * onSelectionChange wil l be used to change selectedItems data
 */

/**
 * onSelectionChange handler by user seperatly
 * by adding onClick event into ListItem
 */
export interface ListProp<T> {
  // need map from outside
  // cons

  // pros
  // doesn't need find is item is selected or not
  // if using selectedItem props
  // need to find item is selected or not
  // all selected item state was inside selectedItems
  // but it can be used as initial selectedValue

  // if using seperate item data and selected data
  // pros
  // no need map outisde component
  // cons
  // need to map inside

  /** items list */
  items: {
    selected?: boolean;
    data: T;
  }[];
  renderItem: (data: T, index: number, isSelected?: boolean) => React.ReactElement;
  header?: React.ReactElement;
  /** callback when click list item */
  onSelectItem?: (data: T) => void;
  /** keyExtractor will use index value as key value by default */
  keyExtractor: (data: T, index: React.Key) => string;
}

const List = <T,>({ items, renderItem, header, onSelectItem, keyExtractor }: ListProp<T>) => {
  const renderListItem = () => {
    return items.map((item, index) => {
      return (
        <ListItem
          key={keyExtractor ? keyExtractor(item.data, index) : index}
          isSelected={item.selected}
          onSelected={() => {
            if (onSelectItem) {
              onSelectItem(item.data);
            }
          }}
        >
          <>{renderItem(item.data, index, !!item.selected)}</>
        </ListItem>
      );
    });
  };
  const renderHeader = () => {
    return <ListHeader>{header}</ListHeader>;
  };
  return (
    <Box>
      {renderHeader()}
      {renderListItem()}
    </Box>
  );
};

export default List;
