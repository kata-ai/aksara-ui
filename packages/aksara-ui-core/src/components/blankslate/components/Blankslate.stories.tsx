import * as React from 'react';

import { SystemWrapper, SystemBlock, SystemSubheading } from '../../../utils/storybook';

import { Paragraph, Anchor, Stack } from '../../../foundations';
import Blankslate from './Blankslate';

const readme = require('../README.md');

export default {
  title: 'Core|Components/Blankslate',
  component: Blankslate,
  decorators: [SystemWrapper],
  parameters: {
    notes: { markdown: readme },
  },
};

export const BasicExample = () => (
  <SystemBlock title="Blankslate" subtitle="Used to provide additional information when no dynamic content exists.">
    <Stack spacing="lg">
      <Stack spacing="md">
        <SystemSubheading>Page level</SystemSubheading>
        <Blankslate
          image={<img src="https://via.placeholder.com/528x352.png" alt="Create a model" />}
          title="Create a model"
          variant="page"
          content={
            <Paragraph color="grey07">
              Perform specific text analysis tasks, like detecting topics, extracting specific words, and more.{' '}
              <Anchor href="#">Learn more</Anchor>
            </Paragraph>
          }
        />
      </Stack>
      <Stack spacing="md">
        <SystemSubheading>Inner level</SystemSubheading>
        <Blankslate
          variant="inner"
          image={<img src="https://via.placeholder.com/120x120.png" alt="Create a model" />}
          content="No data yet."
        />
      </Stack>
    </Stack>
  </SystemBlock>
);
