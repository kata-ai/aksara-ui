import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { IconPlus, IconPen, IconTickSingle, IconTrash, IconRefresh } from '@aksara-ui/icons';

import { ComponentBlock, SystemWrapper, SystemBlock } from '../../utils/storybook';
import FloatingButton from './FloatingButton';
import { Paragraph, Stack } from '../../foundations';

const readme = require('./README.md');

const stories = storiesOf('Core|Components/Button/FloatingButton', module).addDecorator(SystemWrapper);

stories.add(
  'basic',
  () => (
    <SystemBlock
      title="Floating Button"
      subtitle={
        <Stack spacing="xxs">
          <Paragraph>Floating action buttons for primary context actions.</Paragraph>
          <Paragraph>
            <strong>NOTE:</strong> This button type has been deprecated.
          </Paragraph>
        </Stack>
      }
    >
      <ComponentBlock title="Button Sizes">
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
          size="md"
          aria-label="Push Me"
          onClick={action('button-click')}
        >
          <IconPlus fill="currentColor" aria-hidden="true" />
        </FloatingButton>
        <FloatingButton
          type="button"
          style={{ marginRight: 16 }}
          size="lg"
          aria-label="Push Me"
          onClick={action('button-click')}
        >
          <IconPlus fill="currentColor" aria-hidden="true" />
        </FloatingButton>
      </ComponentBlock>
      <ComponentBlock title="Default Button">
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
      <ComponentBlock title="Primary Button">
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
      <ComponentBlock title="Success Button">
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
      <ComponentBlock title="Warning Button">
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
      <ComponentBlock title="Destructive Button">
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
