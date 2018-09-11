import * as React from 'react';
import styled from 'styled-components';

import { Theme } from '@kata-kit/theme';

import { WithThemeProps } from '../styles';
import theme from '../theme';

const ModalFooter: React.SFC = props => (
  <Theme values={theme}>
    {themeAttributes => <Root theme={themeAttributes}>{props.children}</Root>}
  </Theme>
);

export default ModalFooter;

const Root = styled('div')`
  padding: 1.23077rem 1.84615rem;
  text-align: right;
  z-index: inherit;
  background-color: ${(props: WithThemeProps) => props.theme.backgroundColor};
  border-top: 1px solid ${(props: WithThemeProps) => props.theme.borderColor};
`;
