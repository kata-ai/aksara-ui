import { storiesOf } from '@storybook/react';
import * as React from 'react';

import {
  ComponentBlock,
  SystemWrapper,
  SystemHeader,
  SystemContainer
} from '../../../utils/storybook';
import Badge from './Badge';

const readme = require('../README.md');

const stories = storiesOf('Core|Components/Badge', module).addDecorator(SystemWrapper);

stories.add(
  'basic',
  () => (
    <>
      <SystemHeader title="Avatar" subtitle="Resizable avatar component." />
      <SystemContainer>
        <ComponentBlock title="Usage">
          <Badge>entity</Badge> <Badge variant="primary">primary</Badge>{' '}
          <Badge variant="secondary">secondary</Badge> <Badge variant="success">success</Badge>{' '}
          <Badge variant="warning">warning</Badge> <Badge variant="danger">danger</Badge>
        </ComponentBlock>
      </SystemContainer>
    </>
  ),
  {
    notes: { markdown: readme }
  }
);
