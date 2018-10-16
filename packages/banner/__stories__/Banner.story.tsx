import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';
import { withKnobs, text, selectV2 } from '@storybook/addon-knobs/react';
import { withState } from '@dump247/storybook-state';

import wInfo from '../../../.storybook/utils/wInfo';
import Wrapper from '../../../.storybook/components/Wrapper';

import Banner, { BannerState } from '../src/components/Banner';

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

const story = storiesOf('Components/Banner', module)
  .addDecorator(StoryWrapper)
  .addDecorator(withKnobs);

const bannerStateOptions: Record<string, BannerState | BannerState[]> = {
  Success: 'success',
  Error: 'error',
  Warning: 'warning',
  Info: 'info'
};

story.add(
  'Documentation',
  wInfo(info, { propTables: [Banner] })(() => (
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
  ))
);

story.add('Basic', () => (
  <Banner
    state={selectV2('State', bannerStateOptions, 'info')}
    message={text('Message', 'Hello! This is a banner.')}
  />
));

story.add(
  'Closable',
  withState({
    active: true
  })(({ store }) => (
    <div>
      <h1>Closable Banners</h1>
      <p>Banners can also be closable.</p>
      {store.state.active ? (
        <Banner
          state={selectV2('State', bannerStateOptions, 'warning')}
          message={text(
            'Message',
            'Hey, no peeking! Close this banner by clicking that X button.'
          )}
          {...store.state}
          onClose={() => store.set({ active: !store.state.active })}
        />
      ) : (
        <button onClick={() => store.set({ active: !store.state.active })}>
          Open banner
        </button>
      )}
    </div>
  ))
);
