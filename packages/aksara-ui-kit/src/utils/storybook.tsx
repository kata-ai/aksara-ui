import * as React from 'react';
import styled from 'styled-components';
import { space } from './variables';
import { Box, Text } from '../foundations';

/** These components are always excluded from Prop Tables */
export const globalPropTablesExclude = [
  'Theme',
  'StoryWrapper',
  'TypographyBlock',
  'StoryWrapper',
  'StoryContainer',
  'AksaraReset'
];

const StoryWrapperRoot = styled('div')`
  padding: ${space.lg}px;
`;

export const StoryWrapper: React.FC = ({ children }) => <StoryWrapperRoot>{children}</StoryWrapperRoot>;

const StoryContainerRoot = styled('div')`
  margin: 0 auto;
  width: 100%;
  max-width: 1116px;
`;

export const StoryContainer: React.FC = ({ children }) => <StoryContainerRoot>{children}</StoryContainerRoot>;

interface TypographyBlockProps {
  title: string;
}

export const TypographyBlock: React.FC<TypographyBlockProps> = ({ children, title }) => (
  <Box mb="lg">
    {children}
    <Box mt="sm">
      <Text size={200} fontFamily="monospace" color="grey05" m={0}>
        {title}
      </Text>
    </Box>
  </Box>
);
