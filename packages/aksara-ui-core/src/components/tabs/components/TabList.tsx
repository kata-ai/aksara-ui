import * as React from 'react';
import clsx from 'clsx';
import { BaseTabList, BaseBoxProps } from '../styles';
import { useTabs } from '../context';

export interface TabListProps extends BaseBoxProps {
  children: React.ReactElement[];
}

const TabList: React.FC<TabListProps> = ({ children, className, style, ...rest }) => {
  const { size } = useTabs();
  return (
    <BaseTabList
      className={clsx('tablist', className)}
      style={style}
      display="flex"
      alignItems="center"
      gridGap="sm"
      tabsSize={size}
      {...rest}
    >
      {children &&
        Array.isArray(children) &&
        children.map((child, index) => React.cloneElement(child, { index, key: index.toString() }))}
    </BaseTabList>
  );
};

export default TabList;
