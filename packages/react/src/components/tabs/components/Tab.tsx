import * as React from 'react';
import { useComponentStyles } from '../../../system';
import { Text } from '../../../layout';
import { UnstyledButton } from '../../button';
import { BaseButtonProps } from '../styles';
import { useTabs } from '../context';

export interface TabProps extends BaseButtonProps {
  index?: number;
}

const Tab: React.FC<TabProps> = ({ children, index = 0, ...rest }) => {
  const { currentPage, setPage } = useTabs();
  const isActive = React.useMemo(() => currentPage === index, [currentPage, index]);

  const tabButtonStyles = useComponentStyles('tabButton', { isActive });
  const tabButtonInnerStyles = useComponentStyles('tabButtonInner');

  return (
    <UnstyledButton type="button" onClick={() => setPage(index)} sx={tabButtonStyles} {...rest}>
      <Text sx={tabButtonInnerStyles}>{children}</Text>
    </UnstyledButton>
  );
};

export default Tab;
