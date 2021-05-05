import * as React from 'react';
import { IconTrash, IconPen } from '@aksara-ui/icons';

import InteractiveCard from './InteractiveCard';
import { Text, Box, Heading, UnstyledAnchor, Stack } from '../../../../layout';
import { ButtonGroup } from '../../../button-group';
import { IconButton } from '../../../button';

const ExampleGrid: React.FC = ({ children }) => {
  return (
    <Box
      mt="md"
      mb="xl"
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(calc(1116px / 3 - 24px), 1fr))"
      gridGap="24px"
    >
      {children}
    </Box>
  );
};

export default {
  title: 'Core/Components/Interactive Card',
  component: InteractiveCard,
};

const ExampleCard = () => {
  return (
    <UnstyledAnchor href="https://deno.land/" target="_blank" rel="noopener noreferrer">
      <InteractiveCard>
        <Box p="lg">
          <Heading scale={400}>Deno</Heading>
        </Box>
        <Box p="lg" pt={0}>
          <Text scale={200} color="grey07">
            A secure runtime for JavaScript and TypeScript
          </Text>
        </Box>
      </InteractiveCard>
    </UnstyledAnchor>
  );
};

export const BasicExample = () => {
  return (
    <Box p="md">
      <ExampleGrid>
        <ExampleCard />
        <ExampleCard />
        <ExampleCard />
      </ExampleGrid>
    </Box>
  );
};

export const WithImages = () => {
  return (
    <Box p="md">
      <ExampleGrid>
        <UnstyledAnchor target="_blank" rel="noopener noreferrer">
          <InteractiveCard image="http://via.placeholder.com/504x336" imageAlt="Card header">
            <Stack spacing="md" p="lg">
              <Box>
                <Text display="inline-block" scale={200} color="grey07" mb="xs">
                  Word Tagger
                </Text>
                <Heading scale={400}>Example Template</Heading>
              </Box>
              <Box>
                <Text scale={200} color="grey07">
                  By Kata.ai
                </Text>
              </Box>
            </Stack>
          </InteractiveCard>
        </UnstyledAnchor>
      </ExampleGrid>
    </Box>
  );
};

export const WithActions = () => {
  return (
    <Box p="md">
      <ExampleGrid>
        <UnstyledAnchor href="https://deno.land/" target="_blank" rel="noopener noreferrer">
          <InteractiveCard
            actions={
              <ButtonGroup segmented size={32}>
                <IconButton
                  type="button"
                  variant="outline"
                  onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  <IconTrash />
                </IconButton>
                <IconButton
                  type="button"
                  variant="outline"
                  onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  <IconPen />
                </IconButton>
              </ButtonGroup>
            }
          >
            <Box p="lg">
              <Heading scale={400}>Deno</Heading>
            </Box>
            <Box p="lg" pt={0}>
              <Text scale={200} color="grey07">
                A secure runtime for JavaScript and TypeScript
              </Text>
            </Box>
          </InteractiveCard>
        </UnstyledAnchor>
      </ExampleGrid>
    </Box>
  );
};
