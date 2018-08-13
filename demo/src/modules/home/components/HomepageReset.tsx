import React from 'react';
import styled from 'styled-components';

import { KataReset, Theme } from '@kata-kit/theme';
import homepageTheme from '../theme';

const HomepageReset: React.SFC = ({ children }) => (
  <Theme values={homepageTheme}>
    <ResetWrapper>{children}</ResetWrapper>
  </Theme>
);

export default HomepageReset;

const ResetWrapper = styled(KataReset)`
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;

  h1,
  .h1,
  .title {
    font-size: 36px;
    line-height: 54px;
  }

  h2,
  .h2 {
    font-size: 20px;
    line-height: 30px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    font-weight: 300;
  }
`;
