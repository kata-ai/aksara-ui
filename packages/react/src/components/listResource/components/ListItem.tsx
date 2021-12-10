import { BoxProps } from 'packages/react/dist';
import * as React from 'react';
import { Box } from '../../../layout';
import { useComponentStyles } from '../../../system';

export interface ListItemProp extends BoxProps {
  isSelected?: boolean;
  onSelected?: () => void;
  children?: React.ReactElement;
}

const ListItem = ({ children, sx, isSelected = false, onSelected, ...rest }: ListItemProp) => {
  const listItemStyle = useComponentStyles('listItemBase', { isSelected });
  return (
    <Box data-testid="list-item" sx={{ ...listItemStyle, ...sx }} onClick={onSelected} {...rest}>
      {children}
    </Box>
  );
};

export default ListItem;
