import React from 'react';
import styled from 'styled-components';

import { Theme } from '@kata-kit/theme';

import { WithThemeProps } from '../styles';
import theme from '../theme';

const DrawerFooter: React.SFC = props => (
  <Theme values={theme}>
    {themeAttributes => <Root theme={themeAttributes}>{props.children}</Root>}
  </Theme>
);

export default DrawerFooter;

const Root = styled('div')`
  height: 88px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 26px 48px 26px 48px;
  text-align: right;
  z-index: inherit;
  background-color: ${(props: WithThemeProps) => props.theme.backgroundColor};
  border-top: 1px solid ${(props: WithThemeProps) => props.theme.borderColor};
`;
