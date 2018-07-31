import React from 'react';

import { Button } from '@kata-kit/button';

const Main = () => (
  <div>
    <div>
      <h1>kata-kit Demo</h1>
      <p>
        This project is intended to test the look and feel of the kata-kit
        component, as well as a development environment.
      </p>
    </div>
    <div>
      <h2>Button</h2>
      <Button>Demo Component</Button>{' '}
      <Button color="primary">Primary Button</Button>{' '}
      <Button color="secondary">Secondary Button</Button>{' '}
      <Button color="danger">Danger Button</Button>{' '}
    </div>
  </div>
);

export default Main;
