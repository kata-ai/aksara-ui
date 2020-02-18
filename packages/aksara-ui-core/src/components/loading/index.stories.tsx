import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { ComponentBlock, SystemWrapper, SystemBlock } from '../../utils/storybook';
import Circle from './components/Circle';

const readme = require('./README.md');

const story = storiesOf('Core|Components/Loading', module).addDecorator(SystemWrapper);

story.add(
  'default',
  () => (
    <SystemBlock title="Loading" subtitle="Renders a spinner to indicate loading state">
      <ComponentBlock title="Circle">
        <Circle />
      </ComponentBlock>
    </SystemBlock>
  ),
  {
    notes: { markdown: readme },
  }
);
