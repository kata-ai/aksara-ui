import * as React from 'react';

import { SystemWrapper, SystemBlock } from '../../../utils/storybook';

import { Paragraph } from '../../../foundations';
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
    <Blankslate
      image={<img src="https://via.placeholder.com/528x352.png" alt="Create a model" />}
      title="Create a model"
    >
      <Paragraph color="grey07">
        Perform specific text analysis tasks, like detecting topics, extracting specific words, and more.{' '}
        <a href="#">Learn more</a>
      </Paragraph>
    </Blankslate>
  </SystemBlock>
);
