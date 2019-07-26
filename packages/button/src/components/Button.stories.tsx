import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Wrapper from '../../../../.storybook/components/Wrapper';

import Button from './Button';

const readme = require('../../README.md');

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

storiesOf('Components|Button/Button', module)
  .addDecorator(StoryWrapper)
  .add(
    'default',
    () => (
      <div>
        <Button color="primary" onClick={action('button-click')}>
          Push Me
        </Button>{' '}
        <Button color="primary" disabled onClick={action('button-click')}>
          I'm disabled
        </Button>{' '}
        <Button color="primary" loading onClick={action('button-click')}>
          Loading...
        </Button>
      </div>
    ),
    {
      notes: {
        markdown: readme
      }
    }
  )
  .add(
    'button styles',
    () => (
      <div>
        <div style={{ marginBottom: '8px' }}>
          <Button color="primary">Primary</Button>{' '}
          <Button color="secondary">Secondary</Button>{' '}
          <Button color="success">Success</Button>{' '}
          <Button color="warning">Warning</Button>{' '}
          <Button color="danger">Danger</Button>{' '}
          <Button color="white">White</Button>
        </div>
        <div>
          <Button color="primary" block>
            Block button
          </Button>
        </div>
      </div>
    ),
    {
      notes: {
        markdown: readme
      }
    }
  );
