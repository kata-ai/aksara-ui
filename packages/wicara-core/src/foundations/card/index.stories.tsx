import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import * as React from 'react';
import styled from 'styled-components';

import { Badge } from '../../components/badge';
import { OutlineButton } from '../../components/button';
import { SystemWrapper, SystemBlock } from '../../utils/storybook';
import { Box } from '../box';
import { Heading, Paragraph, Text } from '../typography';
import { UnstyledAnchor, UnstyledButton } from '../common';

import { Card } from './index';

const readme = require('./README.md');

const ElevationGrid: React.FC = ({ children }) => {
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

const ElevationDetail: React.FC<{ title: string; description: string }> = ({
  title,
  description
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height={210}
      p="md"
    >
      <Text as="h5" scale={300} fontWeight={400} color="grey05" m={0}>
        {title}
      </Text>
      <Text as="p" scale={300} color="grey07" m={0} mt="xs">
        {description}
      </Text>
    </Box>
  );
};

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

const story = storiesOf('Core|Foundations/Card', module).addDecorator(SystemWrapper);

story.add(
  'elevation',
  () => (
    <SystemBlock
      title="Elevation"
      subtitle="This page contains Elevation levels, the distance between two surface where content and components live. The distance from the front of one surface to the front of another is measured along the z-axis and portrayed using shadows."
      noBackground
    >
      <ElevationGrid>
        <Box>
          <ElevationDetail title="Level 0" description="Base" />
        </Box>
        <Card elevation={1}>
          <ElevationDetail title="Level 1" description="Flat" />
        </Card>
        <Card elevation={2}>
          <ElevationDetail title="Level 2" description="Floating" />
        </Card>
        <Card elevation={3}>
          <ElevationDetail title="Level 3" description="Sticky Nav" />
        </Card>
        <Card elevation={4}>
          <ElevationDetail title="Level 4" description="Dialog" />
        </Card>
        <Card elevation={5}>
          <ElevationDetail title="Level 5" description="Toast" />
        </Card>
      </ElevationGrid>
    </SystemBlock>
  ),
  {
    notes: { markdown: readme }
  }
);

story.add(
  'composability (image card)',
  () => (
    <SystemBlock
      title="Composability"
      subtitle="Cards provide a base building block for composing UI patterns with other foundational components (e.g. Box and Text)."
      noBackground
    >
      <Box display="flex" flexWrap="wrap" position="relative">
        <Anchor href="https://www.google.com/" target="_blank">
          <Card display="flex" flex={1} flexDirection="column" elevation={2}>
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
              <Heading scale={600}>An Example Card</Heading>
              <Paragraph marginTop="xs" marginBottom={0}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi omnis, reiciendis
                doloremque quisquam sequi vel eaque aperiam vitae facere quia atque, hic, unde animi
                asperiores repudiandae quis ab enim repellat?
              </Paragraph>
            </Box>
          </Card>
        </Anchor>
        <StyledButton type="button" onClick={action('button-click')}>
          <Card display="flex" flex={1} flexDirection="column" elevation={2}>
            <Box padding="sm" flex="1 1 auto">
              <Heading scale={600}>An Example Card</Heading>
              <Paragraph marginTop="xs" marginBottom={0}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi omnis, reiciendis
                doloremque quisquam sequi vel eaque aperiam vitae facere quia atque, hic, unde animi
                asperiores repudiandae quis ab enim repellat?
              </Paragraph>
            </Box>
          </Card>
        </StyledButton>
      </Box>
    </SystemBlock>
  ),
  {
    notes: { markdown: readme }
  }
);

story.add(
  'composability (deployments)',
  () => (
    <SystemBlock
      title="Composability"
      subtitle="Cards provide a base building block for composing UI patterns with other foundational components (e.g. Box and Text)."
      noBackground
    >
      <Card elevation={2}>
        <Box px="lg" py="sm" display="flex" flex={1} flexDirection="row" alignItems="center">
          <Box flex="0 0 87px" mr="sm">
            <Heading as="h3" scale={600} m={0}>
              0.0.1
            </Heading>
          </Box>
          <Box flex="1 0 130px" mr="sm">
            <Badge>latest</Badge>
          </Box>
          <Box display="flex" flex="1 0 auto" flexDirection="row">
            <Box width="100%" maxWidth="140px">
              <Heading as="h5" scale={100} color="grey07" m={0}>
                Bot Revision
              </Heading>
              <Text as="p" m={0}>
                <samp title="f5a065fbe8b2c72283f72fbe3c48808fc1f7e2cc">f5a065f</samp>
              </Text>
            </Box>
            <Box width="100%" maxWidth="140px">
              <Heading as="h5" scale={100} color="grey07" m={0}>
                NLU Revision
              </Heading>
              <Text as="p" m={0}>
                <samp title="1a4daaa3fcfecaf67495d492a58e1b921713a02b">1a4daaa</samp>
              </Text>
            </Box>
            <Box width="100%" maxWidth="140px">
              <Heading as="h5" scale={100} color="grey07" m={0}>
                CMS Revision
              </Heading>
              <Text as="p" m={0}>
                <samp title="4561c68a78c754e1e4e39e5dede9e12d3e9d6a80">4561c68</samp>
              </Text>
            </Box>
          </Box>
          <Box>
            <OutlineButton
              icon="view"
              style={{
                marginRight: 8
              }}
              type="button"
              variant="primary"
            >
              View
            </OutlineButton>
            <OutlineButton icon="refresh" type="button" variant="destructive">
              Rollback
            </OutlineButton>
          </Box>
        </Box>
      </Card>
    </SystemBlock>
  ),
  {
    notes: { markdown: readme }
  }
);
