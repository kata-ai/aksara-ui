import * as React from 'react';
import styled, { css } from 'styled-components';

import { Theme } from '@kata-kit/theme';

import themes from '../themes/Topbar';

export interface TopbarProps {
  /** Left-side content of the topbar */
  logoContent?: React.ReactNode;
  /** Left-side content of the topbar */
  leftContent?: React.ReactNode;
}

interface TopbarRightProps {
  flex?: boolean;
}

const Topbar: React.SFC<TopbarProps> = ({
  logoContent,
  leftContent,
  children
}) => (
  <Theme values={themes}>
    {themeAttributes => (
      <Root theme={themeAttributes}>
        {logoContent && <TopbarLogo>{logoContent}</TopbarLogo>}
        {leftContent && <TopbarLeft>{leftContent}</TopbarLeft>}
        {children && <TopbarRight>{children}</TopbarRight>}
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

const TopbarLogo = styled('div')`
  flex: 0 0 auto;
`;

const TopbarLeft = styled('div')`
  flex: 1 1 auto;
`;

const TopbarRight = styled('div')`
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
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  border-bottom: 1px solid ${props => props.theme.borderColor};
  z-index: 200;
`;
