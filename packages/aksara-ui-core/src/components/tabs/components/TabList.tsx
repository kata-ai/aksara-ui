import * as React from 'react';
import clsx from 'clsx';
import { Box, BoxProps } from '../../../foundations';

export interface TabListProps extends BoxProps {
  children: React.ReactElement[];
}

const TabList: React.FC<TabListProps> = ({ children, className, style, ...rest }) => {
  return (
    <Box className={clsx('tablist', className)} style={style} display="flex" alignItems="center" gridGap="sm" {...rest}>
      {children &&
        Array.isArray(children) &&
        children.map((child, index) => React.cloneElement(child, { index, key: index.toString() }))}
    </Box>
  );
};

export default TabList;
