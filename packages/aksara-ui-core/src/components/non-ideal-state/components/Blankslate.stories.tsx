import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { SystemWrapper, SystemBlock } from '../../../utils/storybook';

import { Paragraph } from '../../../foundations';
import Blankslate from './Blankslate';

const readme = require('../README.md');

const story = storiesOf('Core|Components/Blankslate', module).addDecorator(SystemWrapper);

story.add(
  'default',
  () => (
    <SystemBlock title="Blankslate" subtitle="Used to inform users that some contents are unavailable.">
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
  ),
  {
    notes: {
      markdown: readme,
    },
  }
);
