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
        <Badge>base</Badge> <Badge variant="label">label</Badge> <Badge variant="keyword">keyword</Badge>{' '}
        <Badge variant="green">green</Badge> <Badge variant="yellow">yellow</Badge> <Badge variant="red">red</Badge>{' '}
        <Badge variant="turquoise">turquoise</Badge> <Badge variant="blue">blue</Badge>
      </ComponentBlock>
    </SystemBlock>
  ),
  {
    notes: { markdown: readme },
  }
);
