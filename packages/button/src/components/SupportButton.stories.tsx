import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Wrapper from '../../../../.storybook/components/Wrapper';

import SupportButton from './SupportButton';

const readme = require('../../README.md');

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

storiesOf('Components|Button/SupportButton', module)
  .addDecorator(StoryWrapper)
  .add(
    'default',
    () => (
      <div>
        <SupportButton active onClick={action('floating-button-click')}>
          Support Button
        </SupportButton>{' '}
        <SupportButton isIcon onClick={action('floating-button-click')}>
          <i className="icon-bot" />
        </SupportButton>{' '}
        <SupportButton loading onClick={action('floating-button-click')}>
          Support Button
        </SupportButton>{' '}
      </div>
    ),
    {
      notes: {
        markdown: readme
      }
    }
  );
