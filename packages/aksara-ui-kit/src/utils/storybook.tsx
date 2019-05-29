import * as React from 'react';
import styled from 'styled-components';
import { space } from './variables';
import { Box, Text, Heading } from '../foundations';

/** These components are always excluded from Prop Tables */
export const globalPropTablesExclude = [
  'Theme',
  'StoryWrapper',
  'ComponentBlock',
  'StoryWrapper',
  'StoryContainer',
  'StoryHeader',
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

interface StoryHeaderProps {
  title: string;
  subtitle?: string;
}

export const StoryHeader: React.FC<StoryHeaderProps> = ({ title, subtitle }) => (
  <Box mb="lg">
    <Heading size={600}>{title}</Heading>
    {subtitle ? (
      <Text as="p" size={400}>
        {subtitle}
      </Text>
    ) : null}
  </Box>
);

interface TypographyBlockProps {
  title: string;
}

export const ComponentBlock: React.FC<TypographyBlockProps> = ({ children, title }) => (
  <Box mb="lg">
    <Box>{children}</Box>
    <Box mt="sm">
      <Text size={200} fontFamily="monospace" color="grey05" m={0}>
        {title}
      </Text>
    </Box>
  </Box>
);

ComponentBlock.displayName = 'ComponentBlock';
