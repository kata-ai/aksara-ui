import * as React from 'react';
import styled, { css } from 'styled-components';

import { Theme } from '@kata-kit/theme';

import themes from '../themes/Topbar';

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
  <Theme values={themes}>
    {themeAttributes => (
      <Root {...themeAttributes}>
        {leftContent && <TopbarLeft>{leftContent}</TopbarLeft>}
        {children && <TopbarRight flex={flexChildren}>{children}</TopbarRight>}
      </Root>
    )}
  </Theme>
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

const TopbarRight = styled('div')`
  flex: 1 1 auto;
  margin-left: 24px;

  ${(props: TopbarRightProps) => props.flex && topbarIsFlex};
`;

const Root = styled('header')`
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
