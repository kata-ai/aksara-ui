import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { StoryContainer, StoryHeader, StorybookWrapper } from '../../utils/storybook';

const readme = require('./README.md');

storiesOf('Core|Components/Button', module)
  .addDecorator(StorybookWrapper)
  .add(
    'basic',
    () => (
      <StoryContainer>
        <StoryHeader title="Button" subtitle="It's a button. What more do you expect?" />
      </StoryContainer>
    ),
    {
      notes: { markdown: readme }
    }
  );
