import * as React from 'react';
import styled from 'styled-components';

import ThemedComponent, { ThemeAttributes } from '@kata-kit/theme';

import themes from '../theme';

export interface TopbarProps {
  /** Left-side content of the topbar */
  leftContent?: React.ReactNode;
}

const Topbar: React.SFC<TopbarProps> = ({ leftContent, children }) => (
  <ThemedComponent themes={themes.topbar}>
    {themeAttributes => (
      <Root {...themeAttributes}>
        {leftContent && <TopbarLeft>{leftContent}</TopbarLeft>}
        <div>{children}</div>
      </Root>
    )}
  </ThemedComponent>
);

export default Topbar;

const TopbarLeft = styled('div')`
  flex: 1 1 auto;
`;

const Root = styled<ThemeAttributes, 'header'>('header')`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.textColor};
  border-bottom: 1px solid ${props => props.borderColor};
  z-index: 200;
`;
