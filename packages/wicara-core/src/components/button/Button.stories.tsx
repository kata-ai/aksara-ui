import { storiesOf } from '@storybook/react';
import * as React from 'react';

import {
  StoryContainer,
  StoryHeader,
  StorybookWrapper,
  ComponentBlock
} from '../../utils/storybook';
import { Button } from './Button';
import { FloatingButton } from './FloatingButton';

const readme = require('./README.md');

const stories = storiesOf('Core|Components/Button', module).addDecorator(StorybookWrapper);

stories.add(
  'basic',
  () => (
    <StoryContainer>
      <StoryHeader title="Button" subtitle="It's a button. What more do you expect?" />
      <ComponentBlock title="Default Button">
        <Button
          type="button"
          style={{ marginRight: 16 }}
          size="sm"
          onClick={() => alert('Button clicked!')}
        >
          Push Me
        </Button>
        <Button type="button" style={{ marginRight: 16 }} onClick={() => alert('Button clicked!')}>
          Push Me
        </Button>
      </ComponentBlock>
      <ComponentBlock title="Primary Button">
        <Button
          type="button"
          variant="primary"
          style={{ marginRight: 16 }}
          size="sm"
          onClick={() => alert('Button clicked!')}
        >
          Push Me
        </Button>
        <Button
          type="button"
          variant="primary"
          style={{ marginRight: 16 }}
          onClick={() => alert('Button clicked!')}
        >
          Push Me
        </Button>
      </ComponentBlock>
      <ComponentBlock title="Outline Button">
        <Button
          type="button"
          variant="outline"
          style={{ marginRight: 16 }}
          size="sm"
          onClick={() => alert('Button clicked!')}
        >
          Push Me
        </Button>
        <Button
          type="button"
          variant="outline"
          style={{ marginRight: 16 }}
          onClick={() => alert('Button clicked!')}
        >
          Push Me
        </Button>
      </ComponentBlock>
      <ComponentBlock title="Link Button">
        <Button
          type="button"
          variant="link"
          style={{ marginRight: 16 }}
          size="sm"
          onClick={() => alert('Button clicked!')}
        >
          Push Me
        </Button>
        <Button
          type="button"
          variant="link"
          style={{ marginRight: 16 }}
          onClick={() => alert('Button clicked!')}
        >
          Push Me
        </Button>
      </ComponentBlock>
      <ComponentBlock title="Destructive Button">
        <Button
          type="button"
          variant="destructive"
          style={{ marginRight: 16 }}
          size="sm"
          onClick={() => alert('Button clicked!')}
        >
          Push Me
        </Button>
        <Button
          type="button"
          variant="destructive"
          style={{ marginRight: 16 }}
          onClick={() => alert('Button clicked!')}
        >
          Push Me
        </Button>
      </ComponentBlock>
      <ComponentBlock title="Ghost Button">
        <Button
          type="button"
          variant="ghost"
          style={{ marginRight: 16 }}
          size="sm"
          onClick={() => alert('Button clicked!')}
        >
          Push Me
        </Button>
        <Button
          type="button"
          variant="ghost"
          style={{ marginRight: 16 }}
          onClick={() => alert('Button clicked!')}
        >
          Push Me
        </Button>
      </ComponentBlock>
    </StoryContainer>
  ),
  {
    notes: { markdown: readme }
  }
);

stories.add(
  'floating button',
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
          onClick={() => alert('Button clicked!')}
        >
          <i className="icon-add" aria-role="presentation" />
        </FloatingButton>
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          size="md"
          onClick={() => alert('Button clicked!')}
        >
          <i className="icon-add" aria-role="presentation" />
        </FloatingButton>
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          size="lg"
          onClick={() => alert('Button clicked!')}
        >
          <i className="icon-add" aria-role="presentation" />
        </FloatingButton>
      </ComponentBlock>
      <ComponentBlock title="Default Button">
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          onClick={() => alert('Button clicked!')}
        >
          <i className="icon-add" aria-role="presentation" />
        </FloatingButton>
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          disabled
          onClick={() => alert('Button clicked!')}
        >
          <i className="icon-add" aria-role="presentation" />
        </FloatingButton>
      </ComponentBlock>
      <ComponentBlock title="Primary Button">
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          variant="primary"
          onClick={() => alert('Button clicked!')}
        >
          <i className="icon-save" aria-role="presentation" />
        </FloatingButton>
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          variant="primary"
          disabled
          onClick={() => alert('Button clicked!')}
        >
          <i className="icon-save" aria-role="presentation" />
        </FloatingButton>
      </ComponentBlock>
      <ComponentBlock title="Success Button">
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          variant="success"
          onClick={() => alert('Button clicked!')}
        >
          <i className="icon-tick" aria-role="presentation" />
        </FloatingButton>
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          variant="success"
          disabled
          onClick={() => alert('Button clicked!')}
        >
          <i className="icon-tick" aria-role="presentation" />
        </FloatingButton>
      </ComponentBlock>
      <ComponentBlock title="Warning Button">
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          variant="warning"
          onClick={() => alert('Button clicked!')}
        >
          <i className="icon-account" aria-role="presentation" />
        </FloatingButton>
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          variant="warning"
          disabled
          onClick={() => alert('Button clicked!')}
        >
          <i className="icon-account" aria-role="presentation" />
        </FloatingButton>
      </ComponentBlock>
      <ComponentBlock title="Destructive Button">
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          variant="destructive"
          onClick={() => alert('Button clicked!')}
        >
          <i className="icon-trash" aria-role="presentation" />
        </FloatingButton>
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          variant="destructive"
          disabled
          onClick={() => alert('Button clicked!')}
        >
          <i className="icon-trash" aria-role="presentation" />
        </FloatingButton>
      </ComponentBlock>
    </StoryContainer>
  ),
  {
    notes: { markdown: readme }
  }
);

stories.add(
  'button states',
  () => (
    <StoryContainer>
      <StoryHeader
        title="Button States"
        subtitle="Left to right: default, hover, focus, disabled"
      />
      <ComponentBlock title="Default Button">
        <Button type="button" style={{ marginRight: 16 }}>
          Push Me
        </Button>
        <Button type="button" className="hover" style={{ marginRight: 16 }}>
          Push Me
        </Button>
        <Button type="button" className="focus" style={{ marginRight: 16 }}>
          Push Me
        </Button>
        <Button type="button" disabled style={{ marginRight: 16 }}>
          I'm disabled
        </Button>
      </ComponentBlock>
      <ComponentBlock title="Primary Button">
        <Button type="button" variant="primary" style={{ marginRight: 16 }}>
          Push Me
        </Button>
        <Button type="button" variant="primary" className="hover" style={{ marginRight: 16 }}>
          Push Me
        </Button>
        <Button type="button" variant="primary" className="focus" style={{ marginRight: 16 }}>
          Push Me
        </Button>
        <Button type="button" variant="primary" disabled style={{ marginRight: 16 }}>
          I'm disabled
        </Button>
      </ComponentBlock>
      <ComponentBlock title="Outline Button">
        <Button type="button" variant="outline" style={{ marginRight: 16 }}>
          Push Me
        </Button>
        <Button type="button" variant="outline" className="hover" style={{ marginRight: 16 }}>
          Push Me
        </Button>
        <Button type="button" variant="outline" className="focus" style={{ marginRight: 16 }}>
          Push Me
        </Button>
        <Button type="button" variant="outline" disabled style={{ marginRight: 16 }}>
          I'm disabled
        </Button>
      </ComponentBlock>
      <ComponentBlock title="Link Button">
        <Button type="button" variant="link" style={{ marginRight: 16 }}>
          Push Me
        </Button>
        <Button type="button" variant="link" className="hover" style={{ marginRight: 16 }}>
          Push Me
        </Button>
        <Button type="button" variant="link" className="focus" style={{ marginRight: 16 }}>
          Push Me
        </Button>
        <Button type="button" variant="link" disabled style={{ marginRight: 16 }}>
          I'm disabled
        </Button>
      </ComponentBlock>
      <ComponentBlock title="Destructive Button">
        <Button type="button" variant="destructive" style={{ marginRight: 16 }}>
          Push Me
        </Button>
        <Button type="button" variant="destructive" className="hover" style={{ marginRight: 16 }}>
          Push Me
        </Button>
        <Button type="button" variant="destructive" className="focus" style={{ marginRight: 16 }}>
          Push Me
        </Button>
        <Button type="button" variant="destructive" disabled style={{ marginRight: 16 }}>
          I'm disabled
        </Button>
      </ComponentBlock>
      <ComponentBlock title="Ghost Button">
        <Button type="button" variant="ghost" style={{ marginRight: 16 }}>
          Push Me
        </Button>
        <Button type="button" variant="ghost" className="hover" style={{ marginRight: 16 }}>
          Push Me
        </Button>
        <Button type="button" variant="ghost" className="focus" style={{ marginRight: 16 }}>
          Push Me
        </Button>
        <Button type="button" variant="ghost" disabled style={{ marginRight: 16 }}>
          I'm disabled
        </Button>
      </ComponentBlock>
    </StoryContainer>
  ),
  {
    notes: { markdown: readme }
  }
);

stories.add(
  'additional props',
  () => (
    <StoryContainer>
      <StoryHeader
        title="Button Props"
        subtitle="Additional props to modify the look of the button."
      />
      <ComponentBlock title="Block Button">
        <Button type="button" variant="primary" block>
          Push Me
        </Button>
      </ComponentBlock>
      <ComponentBlock title="With Icons (left)">
        <Button type="button" size="sm" variant="primary" style={{ marginRight: 16 }}>
          Push Me
        </Button>
        <Button type="button" variant="primary">
          Push Me
        </Button>
      </ComponentBlock>
      <ComponentBlock title="With Icons (right)">
        <Button type="button" size="sm" variant="primary" style={{ marginRight: 16 }}>
          Push Me
        </Button>
        <Button type="button" variant="primary">
          Push Me
        </Button>
      </ComponentBlock>
    </StoryContainer>
  ),
  {
    notes: { markdown: readme }
  }
);
