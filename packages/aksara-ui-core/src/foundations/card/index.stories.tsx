import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { IconRefresh, IconEyeOpen } from '@aksara-ui/icons';

import { Badge } from '../../components/badge';
import { OutlineButton } from '../../components/button';
import { SystemWrapper, SystemBlock } from '../../utils/storybook';
import { Box } from '../box';
import { Heading, Paragraph, Text } from '../typography';
import { UnstyledAnchor, Stack } from '../common';

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

const ElevationDetail: React.FC<{ title: string; description: string }> = ({ title, description }) => {
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
    notes: { markdown: readme },
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
      <ExampleGrid>
        <UnstyledAnchor
          display="flex"
          flexDirection="column"
          href="https://sweettrip.bandcamp.com/album/velocity-design-comfort"
          target="_blank"
        >
          <Card display="flex" flex={1} flexDirection="column" elevation={2}>
            <img
              alt="Sweet Trip - Velocity:Design:Comfort. album art"
              src="https://f4.bcbits.com/img/a0341989491_10.jpg"
              style={{
                height: 356,
                objectFit: 'cover',
                width: '100%',
              }}
            />
            <Box padding="sm" flex="1 1 auto">
              <Box mb="sm">
                <Heading scale={500} m={0}>
                  Velocity:Design:Comfort.
                </Heading>
                <Text as="p" scale={400} fontWeight={400} m={0}>
                  Sweet Trip &middot; 2003
                </Text>
              </Box>
              <Stack spacing="sm">
                <Paragraph>
                  Reiciendis facere hic modi inventore fugiat laboriosam, maiores omnis molestiae sequi. Adipisci
                  doloremque cum ea distinctio officiis ab rem quo sint non.
                </Paragraph>
              </Stack>
            </Box>
          </Card>
        </UnstyledAnchor>
        <UnstyledAnchor
          display="flex"
          flexDirection="column"
          href="https://miraclemusical.bandcamp.com/album/hawaii-part-ii"
          target="_blank"
        >
          <Card display="flex" flex={1} flexDirection="column" elevation={2}>
            <img
              alt="Example"
              src="https://f4.bcbits.com/img/a3955451029_10.jpg"
              style={{
                height: 356,
                objectFit: 'cover',
                width: '100%',
              }}
            />
            <Box padding="sm" flex="1 1 auto">
              <Box mb="sm">
                <Heading scale={500} m={0}>
                  Hawaii: Part II
                </Heading>
                <Text as="p" scale={400} fontWeight={400} m={0}>
                  ミラクルミュージカル &middot; 2012
                </Text>
              </Box>
              <Stack spacing="sm">
                <Paragraph>
                  Dolor earum, reiciendis expedita placeat magnam porro ipsam libero. Perspiciatis suscipit optio, ut,
                  cum accusantium, facilis quis ipsa est saepe veniam nostrum!
                </Paragraph>
              </Stack>
            </Box>
          </Card>
        </UnstyledAnchor>
        <UnstyledAnchor
          display="flex"
          flexDirection="column"
          href="https://software100p.bandcamp.com/album/digital-dance"
          target="_blank"
        >
          <Card display="flex" flex={1} flexDirection="column" elevation={2}>
            <img
              alt="Example"
              src="https://f4.bcbits.com/img/a3380857970_10.jpg"
              style={{
                height: 356,
                objectFit: 'cover',
                width: '100%',
              }}
            />
            <Box padding="sm" flex="1 1 auto">
              <Box mb="sm">
                <Heading scale={500} m={0}>
                  Digital-Dance
                </Heading>
                <Text as="p" scale={400} fontWeight={400} m={0}>
                  SOFTWARE &middot; 1988
                </Text>
              </Box>
              <Stack spacing="sm">
                <Paragraph>
                  Minima hic, corporis soluta mollitia explicabo voluptatibus magni minus, dolore culpa deserunt facilis
                  voluptatem alias velit maxime atque vero officia tempora animi.
                </Paragraph>
              </Stack>
            </Box>
          </Card>
        </UnstyledAnchor>
      </ExampleGrid>
    </SystemBlock>
  ),
  {
    notes: { markdown: readme },
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
              icon={IconEyeOpen}
              style={{
                marginRight: 8,
              }}
              type="button"
              variant="primary"
            >
              View
            </OutlineButton>
            <OutlineButton icon={IconRefresh} type="button" variant="destructive">
              Rollback
            </OutlineButton>
          </Box>
        </Box>
      </Card>
    </SystemBlock>
  ),
  {
    notes: { markdown: readme },
  }
);
