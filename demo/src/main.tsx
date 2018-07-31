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
      <h2>Typography</h2>
      <div>
        <h1>Understanding Conversation, Humanizing Interaction</h1>
        <h2>Understanding Conversation, Humanizing Interaction</h2>
        <h3>Understanding Conversation, Humanizing Interaction</h3>
        <h4>Understanding Conversation, Humanizing Interaction</h4>
        <h5 className="text-label">
          Understanding Conversation, Humanizing Interaction
        </h5>
        <h6 className="text-small">
          Understanding Conversation, Humanizing Interaction
        </h6>
      </div>
      <div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
    </div>
    <div>
      <h2>Button</h2>
      <div>
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
  </div>
);

export default Main;
