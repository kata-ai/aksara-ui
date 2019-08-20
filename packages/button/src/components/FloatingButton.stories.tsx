import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Wrapper from '../../../../.storybook/components/Wrapper';

import FloatingButton from './FloatingButton';

const readme = require('../../README.md');

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

storiesOf('Components|Button/FloatingButton', module)
  .addDecorator(StoryWrapper)
  .add(
    'default',
    () => (
      <>
        <div style={{ marginBottom: 8 }}>
          <FloatingButton
            icon="bot"
            onClick={action('floating-button-click')}
          />{' '}
          <FloatingButton
            icon="bot"
            disabled
            onClick={action('floating-button-click')}
          />{' '}
          <FloatingButton
            icon="bot"
            isLoading
            onClick={action('floating-button-click')}
          />{' '}
        </div>
        <div>
          <FloatingButton
            icon="bot"
            size="sm"
            onClick={action('floating-button-click')}
          />{' '}
          <FloatingButton
            icon="bot"
            size="sm"
            disabled
            onClick={action('floating-button-click')}
          />{' '}
          <FloatingButton
            icon="bot"
            size="sm"
            isLoading
            onClick={action('floating-button-click')}
          />{' '}
        </div>
      </>
    ),
    {
      notes: {
        markdown: readme
      }
    }
  );
