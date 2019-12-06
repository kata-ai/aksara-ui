import { storiesOf } from '@storybook/react';
import * as React from 'react';

import {
  StoryContainer,
  StoryHeader,
  StorybookWrapper,
  ComponentBlock
} from '../../../utils/storybook';
import Tooltip from './Tooltip';
import { Heading, Paragraph, Text, Box } from '../../../foundations';
import { Button } from '../../button';

const readme = require('../README.md');

const story = storiesOf('Core|Components/Tooltip', module).addDecorator(StorybookWrapper);

story.add(
  'default',
  () => (
    <StoryContainer>
      <StoryHeader title="Tooltip" subtitle="Provides additional descriptions to elements." />
      <ComponentBlock title="Default">
        <Box display="flex" flexDirection="row" justifyContent="space-evenly" py="lg">
          <Box>
            <Tooltip placement="top" content="Tooltip text">
              <Text>Top</Text>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip placement="right" content="Tooltip text">
              <Text>Right</Text>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip placement="bottom" content="Tooltip text">
              <Text>Bottom</Text>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip placement="left" content="Tooltip text">
              <Text>Left</Text>
            </Tooltip>
          </Box>
        </Box>
      </ComponentBlock>
      <ComponentBlock title="Custom Content">
        <Box display="flex" flexDirection="row" justifyContent="space-evenly" py="lg">
          <Box>
            <Tooltip
              placement="top"
              content={
                <>
                  <Heading as="h5" scale="heading5" color="white">
                    Tooltip custom heading
                  </Heading>
                  <Paragraph scale="small" m={0}>
                    Tooltip custom text
                  </Paragraph>
                </>
              }
            >
              <span>Top</span>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip
              placement="right"
              content={
                <>
                  <Heading as="h5" scale="heading5" color="white">
                    Tooltip custom heading
                  </Heading>
                  <Paragraph scale="small" m={0}>
                    Tooltip custom text
                  </Paragraph>
                </>
              }
            >
              <span>Bottom</span>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip
              placement="bottom"
              content={
                <>
                  <Heading as="h5" scale="heading5" color="white">
                    Tooltip custom heading
                  </Heading>
                  <Paragraph scale="small" m={0}>
                    Tooltip custom text
                  </Paragraph>
                </>
              }
            >
              <span>Left</span>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip
              placement="left"
              content={
                <>
                  <Heading as="h5" scale="heading5" color="white">
                    Tooltip custom heading
                  </Heading>
                  <Paragraph scale="small" m={0}>
                    Tooltip custom text
                  </Paragraph>
                </>
              }
            >
              <span>Right</span>
            </Tooltip>
          </Box>
        </Box>
      </ComponentBlock>
      <ComponentBlock title="Components">
        <Box display="flex" flexDirection="row" justifyContent="space-evenly" py="lg">
          <Tooltip placement="top" content="Tooltip text">
            <Button>Push Me</Button>
          </Tooltip>
        </Box>
      </ComponentBlock>
    </StoryContainer>
  ),
  {
    notes: { markdown: readme }
  }
);
