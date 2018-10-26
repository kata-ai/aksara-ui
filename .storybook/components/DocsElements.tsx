import * as React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import { NodeType } from 'react-markdown';

import { variables } from '@kata-kit/theme';

import CodeBlock from './CodeBlock';

export const ContentRoot = styled('div')`
  font-size: 16px;
  line-height: 1.5;

  > *:last-child {
    margin-bottom: 0 !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 1rem;
    line-height: 1.25;
    font-weight: 500;
  }

  h1 {
    padding-bottom: ${variables.spaces.space1};
    border-bottom: 1px solid ${variables.colors.gray30};
    font-size: 36px;
  }

  h2 {
    margin-top: 1.5rem;
    padding-bottom: ${variables.spaces.space1};
    border-bottom: 1px solid ${variables.colors.gray30};
    font-size: 28px;
  }

  h3 {
    margin-top: 1.25rem;
    font-size: 20px;
  }

  h4,
  h5,
  h6 {
    margin-top: 1.25rem;
    font-size: 20px;
  }

  p,
  ol,
  ul,
  dl {
    font-size: 16px;
    font-weight: 300;
  }
`;

export const ContentHr = styled('hr')`
  margin: 1.5rem 0;
  border: none;
  border-bottom: 0.25em solid ${variables.colors.gray30};
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
  thematicBreak: ContentHr,
  code: CodeBlock,
  inlineCode: ContentInlineCode,
  blockquote: ContentBlockquote,
  table: ContentTable
};
