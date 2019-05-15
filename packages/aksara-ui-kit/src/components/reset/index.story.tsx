import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { AksaraReset } from '.';

const readme = require('./README.md');

storiesOf('Reset', module).add(
  'default',
  () => (
    <AksaraReset>
      <h4>default</h4>
      <button onClick={() => alert('Hello!')}>Do Something</button>

      <br />

      <h4>variants</h4>
      <button>Do Something</button>

      <br />

      <h4>block</h4>
      <button>Do Something</button>
    </AksaraReset>
  ),
  { notes: { markdown: readme } }
);
