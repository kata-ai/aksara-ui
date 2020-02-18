import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { ComponentBlock, SystemWrapper, SystemBlock } from '../../../utils/storybook';
import Tooltip from './Tooltip';
import { Heading, Paragraph, Text, Box } from '../../../foundations';
import { Button } from '../../button';

const readme = require('../README.md');

const story = storiesOf('Core|Components/Tooltip', module).addDecorator(SystemWrapper);

const TooltipCustomContent: React.FC = () => {
  return (
    <>
      <Heading as="h5" scale={300} color="white" m={0}>
        Tooltip custom heading
      </Heading>
      <Paragraph scale={300} m={0}>
        Tooltip custom text
      </Paragraph>
    </>
  );
};

const TooltipLargeContent: React.FC = () => {
  return (
    <>
      <Paragraph scale={300}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate recusandae sequi facere delectus id fugit.
      </Paragraph>
      <Paragraph scale={300} mb={0}>
        <a
          style={{ color: 'white', textDecoration: 'underline' }}
          href="https://www.youtube.com/watch?v=p8MLqBcwJJY"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to link
        </a>
      </Paragraph>
    </>
  );
};

story.add(
  'default',
  () => (
    <SystemBlock title="Tooltip" subtitle="Provides additional descriptions to elements.">
      <ComponentBlock title="Default (size small)">
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
      <ComponentBlock title="Default (size medium)">
        <Box display="flex" flexDirection="row" justifyContent="space-evenly" py="lg">
          <Box>
            <Tooltip placement="top" size="md" content="This is a medium tooltip which renders slightly more content.">
              <Text>Top</Text>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip
              placement="right"
              size="md"
              content="This is a medium tooltip which renders slightly more content."
            >
              <Text>Right</Text>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip
              placement="bottom"
              size="md"
              content="This is a medium tooltip which renders slightly more content."
            >
              <Text>Bottom</Text>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip placement="left" size="md" content="This is a medium tooltip which renders slightly more content.">
              <Text>Left</Text>
            </Tooltip>
          </Box>
        </Box>
      </ComponentBlock>
      <ComponentBlock title="Default (size large)">
        <Box display="flex" flexDirection="row" justifyContent="space-evenly" py="lg">
          <Box>
            <Tooltip placement="top" size="lg" content={<TooltipLargeContent />}>
              <Text>Top</Text>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip placement="right" size="lg" content={<TooltipLargeContent />}>
              <Text>Right</Text>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip placement="bottom" size="lg" content={<TooltipLargeContent />}>
              <Text>Bottom</Text>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip placement="left" size="lg" content={<TooltipLargeContent />}>
              <Text>Left</Text>
            </Tooltip>
          </Box>
        </Box>
      </ComponentBlock>
      <ComponentBlock title="Custom Content">
        <Box display="flex" flexDirection="row" justifyContent="space-evenly" py="lg">
          <Box>
            <Tooltip placement="top" content={<TooltipCustomContent />}>
              <span>Top</span>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip placement="right" content={<TooltipCustomContent />}>
              <span>Right</span>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip placement="bottom" content={<TooltipCustomContent />}>
              <span>Bottom</span>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip placement="left" content={<TooltipCustomContent />}>
              <span>Left</span>
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
    </SystemBlock>
  ),
  {
    notes: { markdown: readme },
  }
);
