import * as React from 'react';
import clsx from 'clsx';
import { Box, BoxProps } from '../../../foundations';
import { useTabs } from '../context';

export interface TabPanelsProps extends BoxProps {
  children: React.ReactElement[];
}

const TabPanels: React.FC<TabPanelsProps> = ({ children, className, style, ...rest }) => {
  const { currentPage } = useTabs();
  const ActivePage = children[currentPage];
  return (
    <Box display="flex" width="100%" className={clsx('tabpanels', className)} style={style} {...rest}>
      {ActivePage}
    </Box>
  );
};

export default TabPanels;
