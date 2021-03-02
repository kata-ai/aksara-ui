import * as React from 'react';
import clsx from 'clsx';
import { Box, BoxProps } from '../../../foundations';

export type TabPanelProps = BoxProps;

const TabPanel: React.FC<TabPanelProps> = ({ children, className, style, ...rest }) => {
  return (
    <Box width="100%" outline="none" className={clsx('tabpanel', className)} style={style} {...rest}>
      {children}
    </Box>
  );
};

export default TabPanel;
