import * as React from 'react';
import { Box } from '../../../layout';
// TODO create List Component

/**
 * receive list data
 * will render data using listItem , props data
 * renderItem props, to render per item
 *
 */

export interface ListProp<T> {
  items: T[];
  renderItem: (props: T) => React.ReactElement;
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
