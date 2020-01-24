import { storiesOf } from '@storybook/react';
import * as React from 'react';

import {
  ComponentBlock,
  SystemWrapper,
  SystemHeader,
  SystemContainer
} from '../../../utils/storybook';
import Banner from './Banner';

const readme = require('../README.md');

const stories = storiesOf('Core|Components/Banner', module).addDecorator(SystemWrapper);

stories.add(
  'basic',
  () => (
    <>
      <SystemHeader
        title="Banner"
        subtitle="Banners are used to convey important information to users."
      />
      <SystemContainer>
        <ComponentBlock title="Usage">
          <Banner
            style={{ marginBottom: 8 }}
            message="A banner! - You've succesfully read it."
            state="success"
          />
          <Banner
            style={{ marginBottom: 8 }}
            message="This banner shows information that isn't critical, but worth knowing."
            state="info"
          />
          <Banner
            style={{ marginBottom: 8 }}
            message="Uh oh, something's not right with this banner - try fixing some things?"
          />
          <Banner
            message="Heads up - this banner isn't looking good, tread with caution."
            state="warning"
          />
        </ComponentBlock>
      </SystemContainer>
    </>
  ),
  {
    notes: { markdown: readme }
  }
);

stories.add(
  'closable',
  () => {
    const [isOpen, setIsOpen] = React.useState(true);

    return (
      <>
        <SystemHeader
          title="Closable Banner"
          subtitle="Add an 'onClose' prop to add a close button handler"
        />
        <SystemContainer>
          <ComponentBlock title="Usage">
            {isOpen ? (
              <Banner
                message="Hey, no peeking! Close this banner by clicking that X button."
                state="warning"
                onClose={() => setIsOpen(false)}
              />
            ) : (
              <button type="button" onClick={() => setIsOpen(true)}>
                Toggle banner
              </button>
            )}
          </ComponentBlock>
        </SystemContainer>
      </>
    );
  },
  {
    notes: { markdown: readme }
  }
);
