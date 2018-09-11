import React from 'react';
import styled from 'styled-components';

import { variables } from '@kata-kit/theme';
import hljsTheme from '../hljs-theme';

const DocsDashboardContent: React.SFC = ({ children }) => (
  <Root>{children}</Root>
);

export default DocsDashboardContent;

const Root = styled('div')`
  /*
   * Direct child selector required because @mdx-js/mdx wraps content inside div
   */
  > div {
    h1,
    .h1,
    .title {
      font-size: 36px;
      line-height: 52px;
      margin-bottom: ${variables.spaces.space3};
    }

    > h2,
    > .h2 {
      margin-top: 1.5rem;
      font-size: 28px;
      line-height: 36px;
    }

    > h3,
    > .h3 {
      margin-top: 1.5rem;
      font-size: 20px;
      line-height: 28px;
    }

    > p {
      font-size: 16px;
      line-height: 24px;
      font-weight: 300;
    }

    code {
      background-color: ${variables.colors.gray10};
      padding: 2px 4px;
      border-radius: 4px;
      font-size: 90%;
    }

    .hljs {
      /* Override default .hljs padding below */
      padding: 8px 16px !important;
    }

    ${hljsTheme};
  }
`;
