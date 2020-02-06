import * as React from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import { Heading } from '../../foundations';
import { colors } from '../variables';

const HorizontalRule = styled('hr')<SpaceProps>`
  ${space}
  border: none;
  border-top: 1px solid ${themeGet('colors.grey04', colors.grey04)};
`;

const SystemSubheading: React.FC = ({ children }) => (
  <>
    <Heading scale={600}>{children}</Heading>
    <HorizontalRule mt="sm" mb="xl" />
  </>
);

SystemSubheading.displayName = 'SystemSubheading';

export default SystemSubheading;
