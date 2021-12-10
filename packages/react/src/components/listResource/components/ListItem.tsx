import { BoxProps } from 'packages/react/dist';
import * as React from 'react';
import { Box } from '../../../layout';
import { useComponentStyles } from '../../../system';

export interface ListItemProp<T> extends BoxProps {
  isSelected?: boolean;
  onSelected?: (data: T) => void;
  children?: React.ReactElement;
}

const List = <T,>({ children, sx, isSelected = false, ...rest }: ListItemProp<T>) => {
  const listItemStyle = useComponentStyles('listItem', { isSelected });
  return (
    <Box sx={{ ...listItemStyle, ...sx }} {...rest}>
      {children}
    </Box>
  );
};

export default List;
