import * as React from 'react';
import { BaseTabButton, BaseButtonProps } from '../styles';
import { useTabs } from '../context';

export interface TabProps extends BaseButtonProps {
  index?: number;
}

const Tab: React.FC<TabProps> = ({ children, index = 0, ...rest }) => {
  const { currentPage, setPage, size } = useTabs();

  return (
    <BaseTabButton
      type="button"
      display="inline-flex"
      alignItems="center"
      className="tabbutton"
      py="sm"
      px="xs"
      fontSize={14}
      fontWeight={400}
      gridGap="sm"
      onClick={() => setPage(index)}
      active={currentPage === index}
      tabsSize={size}
      {...rest}
    >
      {children}
    </BaseTabButton>
  );
};

export default Tab;
