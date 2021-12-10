import * as React from 'react';
import { Box } from '../../../layout';
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
 * onSelectionChange will be used to change selectedItems data
 */
export interface ListProp<T> {
  items: T[];
  renderItem: (props: T) => React.ReactElement;
  selectedItems: T[];
  onSelectionChange: (change: T) => void;
}

const List = <T,>({ items, renderItem }: ListProp<T>) => {
  const renderListItem = () => {
    return items.map(item => {
      return renderItem(item);
    });
  };
  return <Box>{renderListItem()}</Box>;
};

export default List;
