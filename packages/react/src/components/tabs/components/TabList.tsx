import * as React from 'react';
import { Box, BoxProps } from '../../../layout';
import { useComponentStyles } from '../../../system';

export interface TabListProps extends BoxProps {
  children: React.ReactElement[];
}

const TabList: React.FC<TabListProps> = ({ children, className, style, ...rest }) => {
  const tabListStyles = useComponentStyles('tabList');

  return (
    <Box className={className} style={style} sx={tabListStyles} {...rest}>
      {children &&
        Array.isArray(children) &&
        children.map((child, index) => React.cloneElement(child, { index, key: index.toString() }))}
    </Box>
  );
};

export default TabList;
