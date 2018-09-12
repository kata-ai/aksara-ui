import styled from 'styled-components';
import { variables } from '@kata-kit/theme';
import hljsTheme from './hljs-theme';

export const ContentH1 = styled('h1')`
  margin-bottom: ${variables.spaces.space3} !important;
  font-size: 36px !important;
  line-height: 52px !important;
`;

export const ContentH2 = styled('h2')`
  margin-top: 1.5em !important;
  font-size: 28px !important;
  line-height: 36px !important;
`;

export const ContentH3 = styled('h3')`
  margin-top: 1.5em !important;
  font-size: 20px !important;
  line-height: 28px !important;
`;

export const ContentParagraph = styled('p')`
  font-size: 16px !important;
  line-height: 24px !important;
  font-weight: 300 !important;
`;

export const ContentCode = styled('code')`
  ${hljsTheme};
`;

export const ContentInlineCode = styled('code')`
  background-color: ${variables.colors.gray10};
  padding: 2px 4px;
  border-radius: 4px;
  font-size: 90%;
`;
