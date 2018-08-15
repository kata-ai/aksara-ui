import React, { Fragment } from 'react';

import { Button } from '../src/index';

const ButtonExample1 = () => (
  <Fragment>
    <h3>Primary</h3>
    <div style={{ marginBottom: '8px' }}>
      <Button color="primary">Default</Button>{' '}
      <Button color="primary" className="active">
        Active
      </Button>{' '}
      <Button color="primary" disabled>
        Disabled
      </Button>{' '}
      <Button color="primary" loading>
        Loading
      </Button>{' '}
    </div>
    <h3>Secondary</h3>
    <div style={{ marginBottom: '8px' }}>
      <Button color="secondary">Default</Button>{' '}
      <Button color="secondary" active>
        Active
      </Button>{' '}
      <Button color="secondary" disabled>
        Disabled
      </Button>{' '}
      <Button color="secondary" loading>
        Loading
      </Button>{' '}
    </div>
    <h3>Success</h3>
    <div style={{ marginBottom: '8px' }}>
      <Button color="success">Default</Button>{' '}
      <Button color="success" className="active">
        Active
      </Button>{' '}
      <Button color="success" disabled>
        Disabled
      </Button>{' '}
      <Button color="success" loading>
        Loading
      </Button>{' '}
    </div>
    <h3>Warning</h3>
    <div style={{ marginBottom: '8px' }}>
      <Button color="warning">Default</Button>{' '}
      <Button color="warning" className="active">
        Active
      </Button>{' '}
      <Button color="warning" disabled>
        Disabled
      </Button>{' '}
      <Button color="warning" loading>
        Loading
      </Button>{' '}
    </div>
    <h3>Danger</h3>
    <div style={{ marginBottom: '8px' }}>
      <Button color="danger">Default</Button>{' '}
      <Button color="danger" className="active">
        Active
      </Button>{' '}
      <Button color="danger" disabled>
        Disabled
      </Button>{' '}
      <Button color="danger" loading>
        Loading
      </Button>{' '}
    </div>
    <h3>White</h3>
    <div style={{ marginBottom: '8px' }}>
      <Button color="white">Default</Button>{' '}
      <Button color="white" className="active">
        Active
      </Button>{' '}
      <Button color="white" disabled>
        Disabled
      </Button>{' '}
      <Button color="white" loading>
        Loading
      </Button>{' '}
    </div>
  </Fragment>
);

export default ButtonExample1;
