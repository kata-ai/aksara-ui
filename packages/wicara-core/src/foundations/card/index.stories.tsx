import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import * as React from 'react';
import styled from 'styled-components';

import { Badge } from '../../components/badge';
import { Button } from '../../components/button';
import { StoryContainer } from '../../utils/storybook';
import { WicaraProvider } from '../reset';
import { Box } from '../box';
import { Heading, Paragraph, Text } from '../typography';
import { UnstyledAnchor, UnstyledButton } from '../common';

import { Card } from './index';

const readme = require('./README.md');

const Anchor = styled(UnstyledAnchor)`
  display: flex;
  flex-direction: column;
  flex: 1 0 33.3%;
  margin: 8px;
`;

const StyledButton = styled(UnstyledButton)`
  display: flex;
  flex-direction: column;
  flex: 1 0 33.3%;
  margin: 8px;
`;

const story = storiesOf('Core|Foundations/Card', module);

story.add(
  'default',
  () => (
    <WicaraProvider>
      <Box padding="sm">
        <Card mb="md" p="md">
          I&apos;m inside a card! (layer100)
        </Card>

        <Card mb="md" p="md" elevation="layer200">
          I&apos;m inside a card! (layer200)
        </Card>

        <Card mb="md" p="md" elevation="layer300">
          I&apos;m inside a card! (layer300)
        </Card>

        <Card mb="md" p="md" elevation="layer400">
          I&apos;m inside a card! (layer400)
        </Card>
      </Box>
    </WicaraProvider>
  ),
  {
    notes: { markdown: readme }
  }
);

story.add(
  'composability (image card)',
  () => (
    <WicaraProvider>
      <Box padding="lg">
        <StoryContainer>
          <Box display="flex" flexWrap="wrap" position="relative">
            <Anchor href="https://www.google.com/" target="_blank">
              <Card display="flex" flex={1} flexDirection="column">
                <img
                  alt="Example"
                  src="https://picsum.photos/id/873/1072/708"
                  style={{
                    height: 248,
                    objectFit: 'cover',
                    width: '100%'
                  }}
                />
                <Box padding="sm" flex="1 1 auto">
                  <Heading scale="heading3">An Example Card</Heading>
                  <Paragraph marginTop="xs" marginBottom={0}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi omnis,
                    reiciendis doloremque quisquam sequi vel eaque aperiam vitae facere quia atque,
                    hic, unde animi asperiores repudiandae quis ab enim repellat?
                  </Paragraph>
                </Box>
              </Card>
            </Anchor>
            <StyledButton type="button" onClick={action('button-click')}>
              <Card
                display="flex"
                flex={1}
                flexDirection="column"
                bg="white"
                borderRadius="md"
                boxShadow="layer100"
              >
                <Box padding="sm" flex="1 1 auto">
                  <Heading scale="heading3">An Example Card</Heading>
                  <Paragraph marginTop="xs" marginBottom={0}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi omnis,
                    reiciendis doloremque quisquam sequi vel eaque aperiam vitae facere quia atque,
                    hic, unde animi asperiores repudiandae quis ab enim repellat?
                  </Paragraph>
                </Box>
              </Card>
            </StyledButton>
          </Box>
        </StoryContainer>
      </Box>
    </WicaraProvider>
  ),
  {
    notes: { markdown: readme }
  }
);

story.add(
  'composability (deployments)',
  () => (
    <WicaraProvider>
      <Box padding="lg">
        <StoryContainer>
          <Card bg="white" borderRadius="md" boxShadow="layer100" position="relative">
            <Box px="lg" py="sm" display="flex" flex={1} flexDirection="row" alignItems="center">
              <Box flex="0 0 87px" mr="sm">
                <Heading as="h3" scale="heading3" m={0}>
                  0.0.1
                </Heading>
              </Box>
              <Box flex="1 0 130px" mr="sm">
                <Badge>latest</Badge>
              </Box>
              <Box display="flex" flex="1 0 auto" flexDirection="row">
                <Box width="100%" maxWidth="140px">
                  <Text as="h5" color="gray50" m={0}>
                    Bot Revision
                  </Text>
                  <Text as="p" m={0}>
                    <samp title="f5a065fbe8b2c72283f72fbe3c48808fc1f7e2cc">f5a065f</samp>
                  </Text>
                </Box>
                <Box width="100%" maxWidth="140px">
                  <Text as="h5" color="gray50" m={0}>
                    NLU Revision
                  </Text>
                  <Text as="p" m={0}>
                    <samp title="1a4daaa3fcfecaf67495d492a58e1b921713a02b">1a4daaa</samp>
                  </Text>
                </Box>
                <Box width="100%" maxWidth="140px">
                  <Text as="h5" color="gray50" m={0}>
                    CMS Revision
                  </Text>
                  <Text as="p" m={0}>
                    <samp title="4561c68a78c754e1e4e39e5dede9e12d3e9d6a80">4561c68</samp>
                  </Text>
                </Box>
              </Box>
              <Box>
                <Button
                  icon="view"
                  style={{
                    marginRight: 8
                  }}
                  type="button"
                  variant="support"
                >
                  View
                </Button>
                <Button icon="refresh" type="button" variant="support">
                  Rollback
                </Button>
              </Box>
            </Box>
          </Card>
        </StoryContainer>
      </Box>
    </WicaraProvider>
  ),
  {
    notes: { markdown: readme }
  }
);
