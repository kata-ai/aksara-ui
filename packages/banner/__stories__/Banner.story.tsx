import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import wInfo from '../../../.storybook/utils/wInfo';
import Wrapper from '../../../.storybook/components/Wrapper';
import WithState from '../../../.storybook/components/WithState';

import Banner from '../src/components/Banner';

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

const info = `
## Install

~~~sh
# yarn
yarn add @kata-kit/banner
# npm
npm install @kata-kit/banner
~~~

## Usage

~~~jsx
import { Banner } from '@kata-kit/banner';

<Banner
  state="success"
  message="A banner! - You've succesfully read it."
/>
~~~
`;

const story = storiesOf('Components|Banner', module)
  .addDecorator(StoryWrapper)
  .addDecorator(wInfo({ propTables: [Banner] }))
  .addDecorator(withKnobs);

const bannerStateOptions = {
  Success: 'success',
  Error: 'error',
  Warning: 'warning',
  Info: 'info'
};

story.add(
  'Documentation',
  () => (
    <div>
      <div style={{ marginBottom: '8px' }}>
        <Banner
          state="success"
          message="A banner! - You've succesfully read it."
        />
      </div>
      <div style={{ marginBottom: '8px' }}>
        <Banner
          state="info"
          message="This banner shows information that isn't critical, but worth knowing."
        />
      </div>
      <div style={{ marginBottom: '8px' }}>
        <Banner
          state="error"
          message="Uh oh, something's not right with this banner - try fixing some things?"
        />
      </div>
      <div>
        <Banner
          state="warning"
          message="Heads up - this banner isn't looking good, tread with caution."
        />
      </div>
    </div>
  ),
  { info }
);

story.add(
  'Basic',
  () => (
    <Banner
      state={select('State', bannerStateOptions, 'info')}
      message={text('Message', 'Hello! This is a banner.')}
    />
  ),
  { info: { disable: true } }
);

story.add(
  'Closable',
  () => (
    <WithState initialState={{ active: false }}>
      {({ active }, { setState }) => (
        <div>
          <h1>Closable Banners</h1>
          <p>Banners can also be closable.</p>
          {active ? (
            <Banner
              state={select('State', bannerStateOptions, 'warning')}
              message={text(
                'Message',
                'Hey, no peeking! Close this banner by clicking that X button.'
              )}
              onClose={() => setState({ active: !active })}
            />
          ) : (
            <button onClick={() => setState({ active: !active })}>
              Open banner
            </button>
          )}
        </div>
      )}
    </WithState>
  ),
  { info: { disable: true } }
);
