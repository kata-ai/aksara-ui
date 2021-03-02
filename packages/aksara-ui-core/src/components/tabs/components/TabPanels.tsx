import * as React from 'react';
import clsx from 'clsx';
import { BaseTabPanels, BaseBoxProps } from '../styles';
import { useTabs } from '../context';

export interface TabPanelsProps extends BaseBoxProps {
  children: React.ReactElement[];
}

const TabPanels: React.FC<TabPanelsProps> = ({ children, className, style, ...rest }) => {
  const { currentPage, size } = useTabs();
  const ActivePage = children[currentPage];

  return (
    <BaseTabPanels
      display="flex"
      width="100%"
      className={clsx('tabpanels', className)}
      style={style}
      tabsSize={size}
      {...rest}
    >
      {ActivePage}
    </BaseTabPanels>
  );
};

export default TabPanels;
