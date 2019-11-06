import { storiesOf } from '@storybook/react';
import * as React from 'react';

import {
  StoryContainer,
  StoryHeader,
  StorybookWrapper,
  ComponentBlock
} from '../../utils/storybook';
import FloatingButton from './FloatingButton';

const readme = require('./README.md');

const stories = storiesOf('Core|Components/Button/FloatingButton', module).addDecorator(
  StorybookWrapper
);

stories.add(
  'basic',
  () => (
    <StoryContainer>
      <StoryHeader
        title="Floating Button"
        subtitle="Floating action buttons for primary context actions."
      />
      <ComponentBlock title="Button Sizes">
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          size="sm"
          aria-label="Push Me"
          onClick={() => alert('Button clicked!')}
        >
          <i className="icon-add" aria-hidden="true" />
        </FloatingButton>
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          size="md"
          aria-label="Push Me"
          onClick={() => alert('Button clicked!')}
        >
          <i className="icon-add" aria-hidden="true" />
        </FloatingButton>
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          size="lg"
          aria-label="Push Me"
          onClick={() => alert('Button clicked!')}
        >
          <i className="icon-add" aria-hidden="true" />
        </FloatingButton>
      </ComponentBlock>
      <ComponentBlock title="Default Button">
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          aria-label="Push Me"
          onClick={() => alert('Button clicked!')}
        >
          <i className="icon-add" aria-hidden="true" />
        </FloatingButton>
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          aria-label="I'm disabled"
          disabled
          onClick={() => alert('Button clicked!')}
        >
          <i className="icon-add" aria-hidden="true" />
        </FloatingButton>
      </ComponentBlock>
      <ComponentBlock title="Primary Button">
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          aria-label="Push Me"
          variant="primary"
          onClick={() => alert('Button clicked!')}
        >
          <i className="icon-save" aria-hidden="true" />
        </FloatingButton>
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          aria-label="I'm disabled"
          variant="primary"
          disabled
          onClick={() => alert('Button clicked!')}
        >
          <i className="icon-save" aria-hidden="true" />
        </FloatingButton>
      </ComponentBlock>
      <ComponentBlock title="Success Button">
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          aria-label="Push Me"
          variant="success"
          onClick={() => alert('Button clicked!')}
        >
          <i className="icon-tick" aria-hidden="true" />
        </FloatingButton>
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          aria-label="I'm disabled"
          variant="success"
          disabled
          onClick={() => alert('Button clicked!')}
        >
          <i className="icon-tick" aria-hidden="true" />
        </FloatingButton>
      </ComponentBlock>
      <ComponentBlock title="Warning Button">
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          aria-label="Push Me"
          variant="warning"
          onClick={() => alert('Button clicked!')}
        >
          <i className="icon-account" aria-hidden="true" />
        </FloatingButton>
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          aria-label="I'm disabled"
          variant="warning"
          disabled
          onClick={() => alert('Button clicked!')}
        >
          <i className="icon-account" aria-hidden="true" />
        </FloatingButton>
      </ComponentBlock>
      <ComponentBlock title="Destructive Button">
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          aria-label="Push Me"
          variant="destructive"
          onClick={() => alert('Button clicked!')}
        >
          <i className="icon-trash" aria-hidden="true" />
        </FloatingButton>
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          aria-label="I'm disabled"
          variant="destructive"
          disabled
          onClick={() => alert('Button clicked!')}
        >
          <i className="icon-trash" aria-hidden="true" />
        </FloatingButton>
      </ComponentBlock>
    </StoryContainer>
  ),
  {
    notes: { markdown: readme }
  }
);
