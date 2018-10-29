import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import wInfo from '../../../.storybook/utils/wInfo';
import Wrapper from '../../../.storybook/components/Wrapper';

import Tooltip from '../src/components/Tooltip';
import TooltipTarget from '../src/components/TooltipTarget';

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

const story: any = storiesOf('Components|Tooltip', module)
  .addDecorator(StoryWrapper)
  .addDecorator(
    wInfo({
      propTables: [Tooltip, TooltipTarget]
    })
  );

const infoText = `
## Install

~~~sh
# yarn
yarn add @kata-kit/tooltip
# npm
npm install @kata-kit/tooltip
~~~

## Usage

~~~jsx
import { TooltipTarget, Tooltip } from '@kata-kit/tooltip';

const Component = () => (
  <TooltipTarget component={<Tooltip>Hello! This is a tooltip.</Tooltip>}>
    <span>Hover over me!</span>
  </TooltipTarget>
);
~~~
`;

story.add(
  'Documentation',
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
  { info: { text: infoText } }
);
