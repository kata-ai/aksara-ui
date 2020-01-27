import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { ComponentBlock, SystemWrapper, SystemBlock } from '../../../utils/storybook';
import Badge from './Badge';

const readme = require('../README.md');

const stories = storiesOf('Core|Components/Badge', module).addDecorator(SystemWrapper);

stories.add(
  'basic',
  () => (
    <SystemBlock title="Badge" subtitle="Badge text for entity, status, etc.">
      <ComponentBlock title="Usage">
        <Badge>entity</Badge> <Badge variant="primary">primary</Badge>{' '}
        <Badge variant="secondary">secondary</Badge> <Badge variant="success">success</Badge>{' '}
        <Badge variant="warning">warning</Badge> <Badge variant="danger">danger</Badge>
      </ComponentBlock>
    </SystemBlock>
  ),
  {
    notes: { markdown: readme }
  }
);
