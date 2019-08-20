import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import Wrapper from '../../../../.storybook/components/Wrapper';

import Tooltip from './Tooltip';
import TooltipTarget from './TooltipTarget';

const readme = require('../../README.md');

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

storiesOf('Components|Tooltip', module)
  .addDecorator(StoryWrapper)
  .add(
    'default',
    () => (
      <div>
        <div style={{ display: 'inline-block', margin: '0 16px' }}>
          <TooltipTarget
            placement="top"
            component={<Tooltip>Hello! This is a top tooltip.</Tooltip>}
          >
            <span>Hover over me!</span>
          </TooltipTarget>
        </div>
        <div style={{ display: 'inline-block', margin: '0 16px' }}>
          <TooltipTarget
            placement="right"
            component={<Tooltip>Hello! This is a right tooltip.</Tooltip>}
          >
            <span>Hover over me!</span>
          </TooltipTarget>
        </div>
        <div style={{ display: 'inline-block', margin: '0 16px' }}>
          <TooltipTarget
            placement="bottom"
            component={<Tooltip>Hello! This is a bottom tooltip.</Tooltip>}
          >
            <span>Hover over me!</span>
          </TooltipTarget>
        </div>
        <div style={{ display: 'inline-block', margin: '0 16px' }}>
          <TooltipTarget
            placement="left"
            component={<Tooltip>Hello! This is a left tooltip.</Tooltip>}
          >
            <span>Hover over me!</span>
          </TooltipTarget>
        </div>
      </div>
    ),
    {
      notes: {
        markdown: readme
      }
    }
  );
