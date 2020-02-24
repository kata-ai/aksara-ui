import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { IconPlus, IconPen, IconTickSingle, IconTrash, IconRefresh } from '@aksara-ui/icons';

import { ComponentBlock, SystemWrapper, SystemBlock, SystemSubheading } from '../../utils/storybook';
import { Message } from '../message';
import FloatingButton from './FloatingButton';

const readme = require('./README.md');

const stories = storiesOf('Core|Components/Button/FloatingButton', module).addDecorator(SystemWrapper);

stories.add(
  'example',
  () => (
    <SystemBlock title="Floating Button" subtitle="Floating action buttons for primary context actions.">
      <Message state="warning" message="This button type has been deprecated. Proceed with caution." mb="lg" />
      <SystemSubheading>Sizes</SystemSubheading>
      <ComponentBlock title="Small" withBackground>
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          size="sm"
          aria-label="Push Me"
          onClick={action('button-click')}
        >
          <IconPlus fill="currentColor" aria-hidden="true" />
        </FloatingButton>
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          size="sm"
          disabled
          aria-label="Push Me"
          onClick={action('button-click')}
        >
          <IconPlus fill="currentColor" aria-hidden="true" />
        </FloatingButton>
      </ComponentBlock>
      <ComponentBlock title="Medium" withBackground>
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          size="md"
          aria-label="Push Me"
          onClick={action('button-click')}
        >
          <IconPlus fill="currentColor" aria-hidden="true" />
        </FloatingButton>
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          size="md"
          disabled
          aria-label="Push Me"
          onClick={action('button-click')}
        >
          <IconPlus fill="currentColor" aria-hidden="true" />
        </FloatingButton>
      </ComponentBlock>
      <ComponentBlock title="Large" withBackground>
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          size="lg"
          aria-label="Push Me"
          onClick={action('button-click')}
        >
          <IconPlus fill="currentColor" aria-hidden="true" />
        </FloatingButton>
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          size="lg"
          disabled
          aria-label="Push Me"
          onClick={action('button-click')}
        >
          <IconPlus fill="currentColor" aria-hidden="true" />
        </FloatingButton>
      </ComponentBlock>
      <SystemSubheading>Default Theme</SystemSubheading>
      <ComponentBlock title="Default Button" withBackground>
        <FloatingButton type="button" style={{ marginRight: 16 }} aria-label="Push Me" onClick={action('button-click')}>
          <IconPlus fill="currentColor" aria-hidden="true" />
        </FloatingButton>
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          aria-label="I'm disabled"
          disabled
          onClick={action('button-click')}
        >
          <IconPlus fill="currentColor" aria-hidden="true" />
        </FloatingButton>
      </ComponentBlock>
      <ComponentBlock title="Primary Button" withBackground>
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          aria-label="Push Me"
          variant="primary"
          onClick={action('button-click')}
        >
          <IconPen fill="currentColor" aria-hidden="true" />
        </FloatingButton>
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          aria-label="I'm disabled"
          variant="primary"
          disabled
          onClick={action('button-click')}
        >
          <IconPen fill="currentColor" aria-hidden="true" />
        </FloatingButton>
      </ComponentBlock>
      <ComponentBlock title="Success Button" withBackground>
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          aria-label="Push Me"
          variant="success"
          onClick={action('button-click')}
        >
          <IconTickSingle fill="currentColor" aria-hidden="true" />
        </FloatingButton>
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          aria-label="I'm disabled"
          variant="success"
          disabled
          onClick={action('button-click')}
        >
          <IconTickSingle fill="currentColor" aria-hidden="true" />
        </FloatingButton>
      </ComponentBlock>
      <ComponentBlock title="Warning Button" withBackground>
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          aria-label="Push Me"
          variant="warning"
          onClick={action('button-click')}
        >
          <IconRefresh fill="currentColor" aria-hidden="true" />
        </FloatingButton>
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          aria-label="I'm disabled"
          variant="warning"
          disabled
          onClick={action('button-click')}
        >
          <IconRefresh fill="currentColor" aria-hidden="true" />
        </FloatingButton>
      </ComponentBlock>
      <ComponentBlock title="Destructive Button" withBackground>
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          aria-label="Push Me"
          variant="destructive"
          onClick={action('button-click')}
        >
          <IconTrash fill="currentColor" aria-hidden="true" />
        </FloatingButton>
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          aria-label="I'm disabled"
          variant="destructive"
          disabled
          onClick={action('button-click')}
        >
          <IconTrash fill="currentColor" aria-hidden="true" />
        </FloatingButton>
      </ComponentBlock>
    </SystemBlock>
  ),
  {
    notes: { markdown: readme },
  }
);
