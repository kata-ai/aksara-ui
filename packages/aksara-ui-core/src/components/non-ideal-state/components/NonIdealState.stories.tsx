import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { SystemWrapper, SystemBlock } from '../../../utils/storybook';

import { Paragraph } from '../../../foundations';
import NonIdealState from './NonIdealState';

const readme = require('../README.md');

const story = storiesOf('Core|Components/Non-Ideal State', module).addDecorator(SystemWrapper);

story.add(
  'default',
  () => (
    <SystemBlock title="Non-Ideal State" subtitle="Used to inform users that some contents are unavailable.">
      <NonIdealState
        image={<img src="https://via.placeholder.com/528x352.png" alt="Create a model" />}
        title="Create a model"
      >
        <Paragraph color="grey07">
          Perform specific text analysis tasks, like detecting topics, extracting specific words, and more.{' '}
          <a href="#">Learn more</a>
        </Paragraph>
      </NonIdealState>
    </SystemBlock>
  ),
  {
    notes: {
      markdown: readme,
    },
  }
);
