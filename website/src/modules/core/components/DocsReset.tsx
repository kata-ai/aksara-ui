import React from 'react';
import styled from 'styled-components';

import { KataReset, Theme } from '@kata-kit/theme';
import themes from '../theme';

const DocsReset: React.SFC = ({ children }) => (
  <Theme values={themes.docsReset}>
    <ResetWrapper>{children}</ResetWrapper>
  </Theme>
);

export default DocsReset;

const ResetWrapper = styled(KataReset)`
  min-height: 100%;
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
  overflow-x: auto;
  word-wrap: break-word;
`;
