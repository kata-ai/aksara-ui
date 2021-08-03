import * as React from 'react';
import clsx from 'clsx';

import { BaseTabsProps } from '../styles';
import { TabsSizeVariants } from '../variants';
import { Box } from '../../../layout';
import { TabsProvider } from '../context';

export interface TabsProps extends Omit<BaseTabsProps, 'tabsSize'> {
  /** Size of the tabs. */
  size?: TabsSizeVariants;
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Additional CSS properties to give to the component. */
  style?: React.CSSProperties;
}

const Tabs: React.FC<TabsProps> = ({ className, style, children, defaultIndex = 0, size = 48, ...rest }) => {
  return (
    <TabsProvider defaultIndex={defaultIndex} size={size}>
      <Box display="block" className={clsx('tabs', className)} style={style} {...rest}>
        {children}
      </Box>
    </TabsProvider>
  );
};

Tabs.defaultProps = {
  defaultIndex: 0,
  size: 48,
  className: undefined,
  style: undefined,
};

Tabs.displayName = 'Tabs';

export default Tabs;
