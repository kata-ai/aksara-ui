import * as React from 'react';
import styled, { css } from 'styled-components';
import { UnstyledButton, UnstyledButtonProps } from '../../../foundations';
import { theme } from '../../../theme';
import { useTabs } from '../context';

export interface TabProps extends UnstyledButtonProps {
  index?: number;
}

const TabButton = styled(UnstyledButton)<{ active?: boolean }>`
  outline: none;
  transition: all 0.2s ease 0s;

  &:hover {
    border-bottom: 2px solid ${theme.colors.grey04};
  }

  ${props =>
    props.active &&
    css`
      font-weight: 500;
      color: ${theme.colors.blue07};
      border-bottom: 2px solid ${theme.colors.blue08};
    `};
`;

const Tab: React.FC<TabProps> = ({ children, index = 0, size, ...rest }) => {
  const { setPage, currentPage } = useTabs();

  return (
    <TabButton
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
      {...rest}
    >
      {children}
    </TabButton>
  );
};

export default Tab;
