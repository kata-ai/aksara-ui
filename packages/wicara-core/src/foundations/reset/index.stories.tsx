import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import * as React from 'react';

import { WicaraProvider } from '../reset';

const readme = require('./README.md');

storiesOf('Core|Foundations/Reset', module).add(
  'default',
  () => (
    <WicaraProvider>
      <h1>h1. Heading</h1>
      <h2>h2. Heading</h2>
      <h3>h3. Heading</h3>
      <h4>h4. Heading</h4>
      <h5>h5. Heading</h5>
      <h6>h6. Heading</h6>

      <p>Lorem ipsum other castle, arrow to the knee set us up the bomb.</p>

      <button type="button" onClick={action('button-click')}>
        Do Something
      </button>

      <br />
      <br />

      <div>
        <label htmlFor="test">Test input</label>
        <input id="test" name="test" type="text" placeholder="Type something..." />
      </div>

      <br />

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quos animi{' '}
        <a href="https://www.youtube.com/watch?v=ERU9ZtTs3Fk">necessitatibus</a> dolore ea. Officia
        dolor soluta ut possimus non vero sint tenetur illo nulla, reiciendis quisquam fugiat. Est,
        quidem.
      </p>
    </WicaraProvider>
  ),
  {
    notes: { markdown: readme }
  }
);
