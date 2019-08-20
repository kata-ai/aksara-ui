import * as React from 'react';
import styled from 'styled-components';
import { Theme, ThemeAttributes, variables } from '../../packages/theme/src';
import { KataReset } from '../../packages/reset/src';

import '@kata-kit/fonts/museo-sans-rounded.css';
import '@kata-kit/fonts/kata-icons.css';

interface WrapperProps {
  noPadding?: boolean;
  layout?: boolean;
}

const baseTheme: ThemeAttributes = {
  backgroundColor: variables.colors.white,
  textColor: variables.colors.gray70
};

const layoutTheme: ThemeAttributes = {
  backgroundColor: variables.colors.gray10,
  textColor: variables.colors.gray70
};

const WrapperInner = styled('div')<WrapperProps>`
  padding: ${props => (props.noPadding ? 0 : '16px')};
  min-height: 100%;
`;

const Wrapper: React.SFC<WrapperProps> = ({ children, noPadding, layout }) => {
  return (
    <Theme values={layout ? layoutTheme : baseTheme}>
      <KataReset>
        <WrapperInner noPadding={noPadding}>{children}</WrapperInner>
      </KataReset>
    </Theme>
  );
};

export default Wrapper;
