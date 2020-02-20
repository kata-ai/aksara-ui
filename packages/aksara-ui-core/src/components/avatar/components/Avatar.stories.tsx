import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { ComponentBlock, SystemWrapper, SystemBlock } from '../../../utils/storybook';
import Avatar from './Avatar';
import { Inline } from '../../../foundations';

const readme = require('../README.md');

const stories = storiesOf('Core|Components/Avatar', module).addDecorator(SystemWrapper);

stories.add(
  'basic',
  () => (
    <SystemBlock title="Avatar" subtitle="Resizable avatar component.">
      <ComponentBlock title="Usage">
        <Inline spacing="md">
          <Avatar size={24} src="https://picsum.photos/id/225/400/400" />
          <Avatar size={32} src="https://picsum.photos/id/777/600/400" />
          <Avatar size={40} src="https://picsum.photos/id/501/400/400" />
        </Inline>
      </ComponentBlock>
    </SystemBlock>
  ),
  {
    notes: { markdown: readme },
  }
);
