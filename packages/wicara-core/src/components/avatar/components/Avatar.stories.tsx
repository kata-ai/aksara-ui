import { storiesOf } from '@storybook/react';
import * as React from 'react';

import {
  ComponentBlock,
  SystemWrapper,
  SystemHeader,
  SystemContainer
} from '../../../utils/storybook';
import Avatar from './Avatar';

const readme = require('../README.md');

const stories = storiesOf('Core|Components/Avatar', module).addDecorator(SystemWrapper);

stories.add(
  'basic',
  () => (
    <>
      <SystemHeader title="Avatar" subtitle="Resizable avatar component." />
      <SystemContainer>
        <ComponentBlock title="Usage">
          <Avatar size={24} src="https://picsum.photos/400/400/?image=225" />{' '}
          <Avatar src="https://picsum.photos/600/400/?image=777" />
        </ComponentBlock>
      </SystemContainer>
    </>
  ),
  {
    notes: { markdown: readme }
  }
);
