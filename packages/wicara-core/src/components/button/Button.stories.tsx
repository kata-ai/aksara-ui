import { storiesOf } from '@storybook/react';
import * as React from 'react';

import {
  StoryContainer,
  StoryHeader,
  StorybookWrapper,
  ComponentBlock
} from '../../utils/storybook';
import { Button } from './Button';

const readme = require('./README.md');

storiesOf('Core|Components/Button', module)
  .addDecorator(StorybookWrapper)
  .add(
    'basic',
    () => (
      <StoryContainer>
        <StoryHeader title="Button" subtitle="It's a button. What more do you expect?" />
        <ComponentBlock title="Default Button">
          <Button
            type="button"
            style={{ margin: '0 8px' }}
            size="sm"
            onClick={() => alert('Button clicked!')}
          >
            Push Me
          </Button>
          <Button
            type="button"
            style={{ margin: '0 8px' }}
            onClick={() => alert('Button clicked!')}
          >
            Push Me
          </Button>
        </ComponentBlock>
        <ComponentBlock title="Primary Button">
          <Button
            type="button"
            variant="primary"
            style={{ margin: '0 8px' }}
            size="sm"
            onClick={() => alert('Button clicked!')}
          >
            Push Me
          </Button>
          <Button
            type="button"
            variant="primary"
            style={{ margin: '0 8px' }}
            onClick={() => alert('Button clicked!')}
          >
            Push Me
          </Button>
        </ComponentBlock>
        <ComponentBlock title="Outline Button">
          <Button
            type="button"
            variant="outline"
            style={{ margin: '0 8px' }}
            size="sm"
            onClick={() => alert('Button clicked!')}
          >
            Push Me
          </Button>
          <Button
            type="button"
            variant="outline"
            style={{ margin: '0 8px' }}
            onClick={() => alert('Button clicked!')}
          >
            Push Me
          </Button>
        </ComponentBlock>
        <ComponentBlock title="Link Button">
          <Button
            type="button"
            variant="link"
            style={{ margin: '0 8px' }}
            size="sm"
            onClick={() => alert('Button clicked!')}
          >
            Push Me
          </Button>
          <Button
            type="button"
            variant="link"
            style={{ margin: '0 8px' }}
            onClick={() => alert('Button clicked!')}
          >
            Push Me
          </Button>
        </ComponentBlock>
        <ComponentBlock title="Destructive Button">
          <Button
            type="button"
            variant="destructive"
            style={{ margin: '0 8px' }}
            size="sm"
            onClick={() => alert('Button clicked!')}
          >
            Push Me
          </Button>
          <Button
            type="button"
            variant="destructive"
            style={{ margin: '0 8px' }}
            onClick={() => alert('Button clicked!')}
          >
            Push Me
          </Button>
        </ComponentBlock>
        <ComponentBlock title="Ghost Button">
          <Button
            type="button"
            variant="ghost"
            style={{ margin: '0 8px' }}
            size="sm"
            onClick={() => alert('Button clicked!')}
          >
            Push Me
          </Button>
          <Button
            type="button"
            variant="ghost"
            style={{ margin: '0 8px' }}
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
  )
  .add(
    'button states',
    () => (
      <StoryContainer>
        <StoryHeader
          title="Button States"
          subtitle="Left to right: default, hover, focus, disabled"
        />
        <ComponentBlock title="Default Button">
          <Button
            type="button"
            style={{ margin: '0 8px' }}
            onClick={() => alert('Button clicked!')}
          >
            Push Me
          </Button>
          <Button
            type="button"
            className="hover"
            style={{ margin: '0 8px' }}
            onClick={() => alert('Button clicked!')}
          >
            Push Me
          </Button>
          <Button
            type="button"
            className="focus"
            style={{ margin: '0 8px' }}
            onClick={() => alert('Button clicked!')}
          >
            Push Me
          </Button>
          <Button
            type="button"
            disabled
            style={{ margin: '0 8px' }}
            onClick={() => alert('Button clicked!')}
          >
            I'm disabled
          </Button>
        </ComponentBlock>
        <ComponentBlock title="Primary Button">
          <Button
            type="button"
            variant="primary"
            style={{ margin: '0 8px' }}
            onClick={() => alert('Button clicked!')}
          >
            Push Me
          </Button>
          <Button
            type="button"
            variant="primary"
            className="hover"
            style={{ margin: '0 8px' }}
            onClick={() => alert('Button clicked!')}
          >
            Push Me
          </Button>
          <Button
            type="button"
            variant="primary"
            className="focus"
            style={{ margin: '0 8px' }}
            onClick={() => alert('Button clicked!')}
          >
            Push Me
          </Button>
          <Button
            type="button"
            variant="primary"
            disabled
            style={{ margin: '0 8px' }}
            onClick={() => alert('Button clicked!')}
          >
            I'm disabled
          </Button>
        </ComponentBlock>
        <ComponentBlock title="Outline Button">
          <Button
            type="button"
            variant="outline"
            style={{ margin: '0 8px' }}
            onClick={() => alert('Button clicked!')}
          >
            Push Me
          </Button>
          <Button
            type="button"
            variant="outline"
            className="hover"
            style={{ margin: '0 8px' }}
            onClick={() => alert('Button clicked!')}
          >
            Push Me
          </Button>
          <Button
            type="button"
            variant="outline"
            className="focus"
            style={{ margin: '0 8px' }}
            onClick={() => alert('Button clicked!')}
          >
            Push Me
          </Button>
          <Button
            type="button"
            variant="outline"
            disabled
            style={{ margin: '0 8px' }}
            onClick={() => alert('Button clicked!')}
          >
            I'm disabled
          </Button>
        </ComponentBlock>
        <ComponentBlock title="Link Button">
          <Button type="button" variant="link" style={{ margin: '0 8px' }}>
            Push Me
          </Button>
          <Button type="button" variant="link" className="hover" style={{ margin: '0 8px' }}>
            Push Me
          </Button>
          <Button type="button" variant="link" className="focus" style={{ margin: '0 8px' }}>
            Push Me
          </Button>
          <Button type="button" variant="link" disabled style={{ margin: '0 8px' }}>
            I'm disabled
          </Button>
        </ComponentBlock>
        <ComponentBlock title="Destructive Button">
          <Button
            type="button"
            variant="destructive"
            style={{ margin: '0 8px' }}
            onClick={() => alert('Button clicked!')}
          >
            Push Me
          </Button>
          <Button
            type="button"
            variant="destructive"
            className="hover"
            style={{ margin: '0 8px' }}
            onClick={() => alert('Button clicked!')}
          >
            Push Me
          </Button>
          <Button
            type="button"
            variant="destructive"
            className="focus"
            style={{ margin: '0 8px' }}
            onClick={() => alert('Button clicked!')}
          >
            Push Me
          </Button>
          <Button
            type="button"
            variant="destructive"
            disabled
            style={{ margin: '0 8px' }}
            onClick={() => alert('Button clicked!')}
          >
            I'm disabled
          </Button>
        </ComponentBlock>
        <ComponentBlock title="Ghost Button">
          <Button
            type="button"
            variant="ghost"
            style={{ margin: '0 8px' }}
            onClick={() => alert('Button clicked!')}
          >
            Push Me
          </Button>
          <Button
            type="button"
            variant="ghost"
            className="hover"
            style={{ margin: '0 8px' }}
            onClick={() => alert('Button clicked!')}
          >
            Push Me
          </Button>
          <Button
            type="button"
            variant="ghost"
            className="focus"
            style={{ margin: '0 8px' }}
            onClick={() => alert('Button clicked!')}
          >
            Push Me
          </Button>
          <Button
            type="button"
            variant="ghost"
            disabled
            style={{ margin: '0 8px' }}
            onClick={() => alert('Button clicked!')}
          >
            I'm disabled
          </Button>
        </ComponentBlock>
      </StoryContainer>
    ),
    {
      notes: { markdown: readme }
    }
  )
  .add(
    'additional props',
    () => (
      <StoryContainer>
        <StoryHeader
          title="Button Props"
          subtitle="Additional props to modify the look of the button."
        />
        <ComponentBlock title="Block Button">
          <Button
            type="button"
            block
            style={{ margin: '0 8px' }}
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
