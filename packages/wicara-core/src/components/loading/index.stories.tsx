import { storiesOf } from '@storybook/react';
import * as React from 'react';

import {
  ComponentBlock,
  SystemWrapper,
  SystemHeader,
  SystemContainer
} from '../../utils/storybook';
import Circle from './components/Circle';

const readme = require('./README.md');

const story = storiesOf('Core|Components/Loading', module).addDecorator(SystemWrapper);

story.add(
  'default',
  () => (
    <>
      <SystemHeader title="Loading" subtitle="Renders a spinner to indicate loading state" />
      <SystemContainer>
        <ComponentBlock title="Circle">
          <Circle />
        </ComponentBlock>
      </SystemContainer>
    </>
  ),
  {
    notes: { markdown: readme }
  }
);
