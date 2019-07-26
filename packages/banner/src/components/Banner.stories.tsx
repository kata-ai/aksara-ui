import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import Wrapper from '@storybook-utils/components/Wrapper';
import WithState from '@storybook-utils/components/WithState';

import Banner from './Banner';

import readme from '../../README.md';

const StoryWrapper: StoryDecorator = storyFn => <Wrapper>{storyFn()}</Wrapper>;

storiesOf('Components|Banner', module)
  .addDecorator(StoryWrapper)
  .add(
    'default',
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
    { notes: { markdown: readme } }
  )
  .add(
    'closable',
    () => (
      <WithState initialState={{ active: true }}>
        {({ active }, { setState }) => (
          <div>
            <h1>Closable Banners</h1>
            <p>Banners can also be closable.</p>
            {active ? (
              <Banner
                state="warning"
                message="Hey, no peeking! Close this banner by clicking that X button."
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
    { notes: { markdown: readme } }
  );
