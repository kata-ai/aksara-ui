import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Wrapper from '../../../../.storybook/components/Wrapper';

import HollowButton from './HollowButton';

const readme = require('../../README.md');

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

storiesOf('Components|Button/SupportButton', module)
  .addDecorator(StoryWrapper)
  .add(
    'default',
    () => (
      <div>
        <div style={{ marginBottom: '8px' }}>
          <HollowButton onClick={action('hollow-button-click')}>
            Push Me
          </HollowButton>
        </div>
        <div style={{ marginBottom: '8px' }}>
          <HollowButton disabled onClick={action('hollow-button-click')}>
            I'm Disabled
          </HollowButton>
        </div>
        <div style={{ marginBottom: '8px' }}>
          <HollowButton loading onClick={action('hollow-button-click')}>
            Loading...
          </HollowButton>
        </div>
        <div style={{ marginBottom: '8px' }}>
          <HollowButton onClick={action('hollow-button-click')}>
            <i className="icon-arrow-left mr-1" />
            Back
          </HollowButton>
        </div>
      </div>
    ),
    {
      notes: {
        markdown: readme
      }
    }
  );
