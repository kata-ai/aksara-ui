import * as React from 'react';
import styled, { css } from 'styled-components';

import ThemedComponent, { ThemeAttributes } from '@kata-kit/theme';

import themes from '../theme';

export interface TopbarProps {
  /** Left-side content of the topbar */
  leftContent?: React.ReactNode;
  /** Does the right children have flex items? */
  flexChildren?: boolean;
}

interface TopbarRightProps {
  flex?: boolean;
}

const Topbar: React.SFC<TopbarProps> = ({
  leftContent,
  flexChildren,
  children
}) => (
  <ThemedComponent themes={themes.topbar}>
    {themeAttributes => (
      <Root {...themeAttributes}>
        {leftContent && <TopbarLeft>{leftContent}</TopbarLeft>}
        {children && <TopbarRight flex={flexChildren}>{children}</TopbarRight>}
      </Root>
    )}
  </ThemedComponent>
);

export default Topbar;

const topbarIsFlex = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TopbarLeft = styled('div')`
  flex: 0 0 auto;
`;

const TopbarRight = styled<TopbarRightProps, 'div'>('div')`
  flex: 1 1 auto;
  margin-left: 24px;

  ${props => props.flex && topbarIsFlex};
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
