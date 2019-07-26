import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import Wrapper from '../../../../.storybook/components/Wrapper';

import IconicButton from './IconicButton';

const readme = require('../../README.md');

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

storiesOf('Components|Button/IconicButton', module)
  .addDecorator(StoryWrapper)
  .add(
    'default',
    () => (
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginBottom: '8px'
          }}
        >
          <IconicButton style={{ marginRight: '8px' }}>
            <i className="icon icon-arrow-left mr-1" />
            Back
          </IconicButton>
          <IconicButton disabled>
            <i className="icon icon-arrow-left mr-1" />
            Back
          </IconicButton>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginBottom: '8px'
          }}
        >
          <IconicButton variant="primary" style={{ marginRight: '8px' }}>
            <i className="icon icon-view mr-1" />
            View
          </IconicButton>
          <IconicButton variant="primary" disabled>
            <i className="icon icon-view mr-1" />
            View
          </IconicButton>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginBottom: '8px'
          }}
        >
          <IconicButton variant="danger" style={{ marginRight: '8px' }}>
            <i className="icon icon-trash mr-1" />
            Delete
          </IconicButton>
          <IconicButton variant="danger" disabled>
            <i className="icon icon-trash mr-1" />
            Delete
          </IconicButton>
        </div>
      </div>
    ),
    {
      notes: {
        markdown: readme
      }
    }
  );
