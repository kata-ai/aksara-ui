import * as React from 'react';
import { Box, BoxProps } from '../../../layout';
import { useComponentStyles } from '../../../system';

export interface ListHeaderProp extends BoxProps {
  isSelected?: boolean;
  onSelected?: () => void;
  children?: React.ReactElement;
}

const ListHeader = ({ children, sx, isSelected = false, onSelected, ...rest }: ListHeaderProp) => {
  const listHeaderStyle = useComponentStyles('listHeaderBase', { isSelected });
  return (
    <Box sx={{ ...listHeaderStyle, ...sx }} onClick={onSelected} {...rest}>
      {children}
    </Box>
  );
};

export default ListHeader;
