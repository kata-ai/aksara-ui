import * as React from 'react';

import { BaseTabsProps, MainTabs } from '../styles';
import { TabsSizeVariants } from '../variants';
import { BoxProps } from '../../../foundations';
import { TabsProvider } from '../context';

export interface TabsProps extends BaseTabsProps, BoxProps {
  // /** Size of the tabs. */
  size?: TabsSizeVariants;
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Additional CSS properties to give to the component. */
  style?: React.CSSProperties;
}

const Tabs: React.FC<TabsProps> = ({ className, style, children, size = 48, defaultIndex = 0, ...rest }) => {
  return (
    <TabsProvider defaultIndex={defaultIndex}>
      <MainTabs className={className} style={style} size={size} {...rest}>
        {children}
      </MainTabs>
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
