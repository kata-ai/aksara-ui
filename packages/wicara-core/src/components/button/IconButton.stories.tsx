import { storiesOf } from '@storybook/react';
import * as React from 'react';

import {
  StoryContainer,
  StoryHeader,
  StorybookWrapper,
  ComponentBlock
} from '../../utils/storybook';
import IconButton from './IconButton';

const readme = require('./README.md');

const stories = storiesOf('Core|Components/Button/IconButton', module).addDecorator(
  StorybookWrapper
);

stories.add(
  'basic',
  () => (
    <StoryContainer>
      <StoryHeader title="Icon Button" subtitle="Icon-only buttons." />
      <ComponentBlock title="Default Button">
        <IconButton
          type="button"
          style={{ marginRight: 16 }}
          aria-label="Push Me"
          onClick={() => alert('Button clicked!')}
        >
          <i className="icon-add" aria-hidden="true" />
        </IconButton>
        <IconButton
          type="button"
          disabled
          aria-label="Push Me"
          onClick={() => alert('Button clicked!')}
        >
          <i className="icon-add" aria-hidden="true" />
        </IconButton>
      </ComponentBlock>
      <ComponentBlock title="Primary Button">
        <IconButton
          type="button"
          style={{ marginRight: 16 }}
          variant="primary"
          aria-label="Push Me"
          onClick={() => alert('Button clicked!')}
        >
          <i className="icon-add" aria-hidden="true" />
        </IconButton>
        <IconButton
          type="button"
          disabled
          variant="primary"
          aria-label="Push Me"
          onClick={() => alert('Button clicked!')}
        >
          <i className="icon-add" aria-hidden="true" />
        </IconButton>
      </ComponentBlock>
      <ComponentBlock title="Support Button">
        <IconButton
          type="button"
          style={{ marginRight: 16 }}
          variant="support"
          aria-label="Push Me"
          onClick={() => alert('Button clicked!')}
        >
          <i className="icon-add" aria-hidden="true" />
        </IconButton>
        <IconButton
          type="button"
          disabled
          variant="support"
          aria-label="Push Me"
          onClick={() => alert('Button clicked!')}
        >
          <i className="icon-add" aria-hidden="true" />
        </IconButton>
      </ComponentBlock>
      <ComponentBlock title="Destructive Button">
        <IconButton
          type="button"
          style={{ marginRight: 16 }}
          variant="destructive"
          aria-label="Push Me"
          onClick={() => alert('Button clicked!')}
        >
          <i className="icon-add" aria-hidden="true" />
        </IconButton>
        <IconButton
          type="button"
          disabled
          variant="destructive"
          aria-label="Push Me"
          onClick={() => alert('Button clicked!')}
        >
          <i className="icon-add" aria-hidden="true" />
        </IconButton>
      </ComponentBlock>
    </StoryContainer>
  ),
  {
    notes: { markdown: readme }
  }
);
