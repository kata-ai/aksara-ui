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
      {/* stylable won't work if we set a custom className inside the component */}
      <Button className="btn">Demo Component</Button>{' '}
      <Button className="btn" color="primary">
        Primary Button
      </Button>{' '}
      <Button className="btn" color="secondary">
        Secondary Button
      </Button>{' '}
      <Button className="btn" color="danger">
        Danger Button
      </Button>{' '}
      <Button className="btn" color="primary" disabled>
        Disabled Button
      </Button>{' '}
      <Button className="btn" color="primary" loading>
        Loading
      </Button>{' '}
    </div>
  </div>
);

export default Main;
