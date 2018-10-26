import * as React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import { NodeType } from 'react-markdown';

import { variables } from '@kata-kit/theme';

import CodeBlock from './CodeBlock';

export const ContentRoot = styled('div')`
  h1 {
    margin-bottom: 1rem;
    padding-bottom: ${variables.spaces.space1};
    border-bottom: 1px solid ${variables.colors.gray30};
    font-size: 36px;
    line-height: 44px;
  }

  h2 {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    padding-bottom: ${variables.spaces.space1};
    border-bottom: 1px solid ${variables.colors.gray30};
    font-size: 28px;
    line-height: 36px;
  }

  h3 {
    margin-top: 1.25rem;
    margin-bottom: 1rem;
    font-size: 20px;
    line-height: 28px;
  }

  p,
  ol,
  ul,
  dl {
    font-size: 16px;
    line-height: 24px;
    font-weight: 300;
  }
`;

export const ContentInlineCode = styled('code')`
  background-color: ${variables.colors.gray10};
  padding: 2px 4px;
  border-radius: 4px;
  box-decoration-break: clone;
  font-size: 90%;
`;

export const ContentBlockquote = styled('blockquote')`
  padding: 0 1em;
  color: ${variables.colors.gray50};
  border-left: 0.25em solid ${variables.colors.gray30};

  p {
    color: ${variables.colors.gray60};

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const ContentTable = ({ children, className, ...rest }) => (
  <table className={classnames('table', className)} {...rest}>
    {children}
  </table>
);

export const markdownRenderers: { [nodeType in NodeType]?: React.ReactType } = {
  root: ContentRoot,
  code: CodeBlock,
  inlineCode: ContentInlineCode,
  blockquote: ContentBlockquote
};
