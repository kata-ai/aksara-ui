import * as React from 'react';
import VisuallyHidden from '@reach/visually-hidden';
import { useComponentStyles } from '../../../system';
import { Box, Text } from '../../../layout';
import { UnstyledButton } from '../../button';
import { Badge } from '../../badge';
import { BaseButtonProps } from '../styles';
import { useTabs } from '../context';

export interface TabProps extends BaseButtonProps {
  index?: number;
  icon?: React.ComponentType<any>;
  badgeText?: string;
  children?: string;
}

const Tab: React.FC<TabProps> = ({ children, index = 0, badgeText, icon, ...rest }) => {
  const { currentPage, setPage } = useTabs();
  const isActive = React.useMemo(() => currentPage === index, [currentPage, index]);

  const tabButtonStyles = useComponentStyles('tabButton', { isActive });
  const tabButtonInnerStyles = useComponentStyles('tabButtonInner');

  return (
    <UnstyledButton type="button" onClick={() => setPage(index)} sx={tabButtonStyles} {...rest}>
      {icon ? (
        <Box
          sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', size: 32, borderRadius: 12 }}
        >
          <VisuallyHidden>{children}</VisuallyHidden>
          {React.createElement(icon, { size: 16, fill: 'currentColor', 'aria-hidden': true })}
        </Box>
      ) : (
        <Box sx={tabButtonInnerStyles}>
          <Text>{children}</Text>
          {badgeText && (
            <Badge ml="sm" size="sm" variant={isActive ? 'active' : 'default'}>
              {badgeText}
            </Badge>
          )}
        </Box>
      )}
    </UnstyledButton>
  );
};

export default Tab;
