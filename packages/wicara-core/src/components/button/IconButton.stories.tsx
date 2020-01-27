import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import * as React from 'react';

import { ComponentBlock, SystemWrapper, SystemBlock } from '../../utils/storybook';
import IconButton from './IconButton';

const readme = require('./README.md');

const stories = storiesOf('Core|Components/Button/IconButton', module).addDecorator(SystemWrapper);

stories
  .add(
    'basic',
    () => (
      <SystemBlock title="Icon Button" subtitle="Icon-only buttons.">
        <ComponentBlock title="Default Button">
          <IconButton
            type="button"
            style={{ marginRight: 16 }}
            aria-label="Push Me"
            onClick={action('button-click')}
          >
            <i className="icon-add" aria-hidden="true" />
          </IconButton>
          <IconButton type="button" disabled aria-label="Push Me" onClick={action('button-click')}>
            <i className="icon-add" aria-hidden="true" />
          </IconButton>
        </ComponentBlock>
        <ComponentBlock title="Primary Button">
          <IconButton
            type="button"
            style={{ marginRight: 16 }}
            variant="primary"
            aria-label="Push Me"
            onClick={action('button-click')}
          >
            <i className="icon-add" aria-hidden="true" />
          </IconButton>
          <IconButton
            type="button"
            disabled
            variant="primary"
            aria-label="Push Me"
            onClick={action('button-click')}
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
            onClick={action('button-click')}
          >
            <i className="icon-add" aria-hidden="true" />
          </IconButton>
          <IconButton
            type="button"
            disabled
            variant="support"
            aria-label="Push Me"
            onClick={action('button-click')}
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
            onClick={action('button-click')}
          >
            <i className="icon-add" aria-hidden="true" />
          </IconButton>
          <IconButton
            type="button"
            disabled
            variant="destructive"
            aria-label="Push Me"
            onClick={action('button-click')}
          >
            <i className="icon-add" aria-hidden="true" />
          </IconButton>
        </ComponentBlock>
        <ComponentBlock title="Ghost Button">
          <IconButton
            type="button"
            style={{ marginRight: 16 }}
            variant="ghost"
            aria-label="Push Me"
            onClick={action('button-click')}
          >
            <i className="icon-add" aria-hidden="true" />
          </IconButton>
          <IconButton
            type="button"
            disabled
            variant="ghost"
            aria-label="Push Me"
            onClick={action('button-click')}
          >
            <i className="icon-add" aria-hidden="true" />
          </IconButton>
        </ComponentBlock>
      </SystemBlock>
    ),
    {
      notes: { markdown: readme }
    }
  )
  .add(
    'button sizes',
    () => (
      <SystemBlock title="Icon Button" subtitle="Icon-only buttons.">
        <ComponentBlock title="Button Sizes">
          <IconButton
            type="button"
            style={{ marginRight: 16 }}
            variant="support"
            aria-label="Push Me"
            onClick={action('button-click')}
          >
            <i className="icon-add" aria-hidden="true" />
          </IconButton>
          <IconButton
            type="button"
            aria-label="Push Me"
            size="md"
            variant="support"
            onClick={action('button-click')}
          >
            <i className="icon-add" aria-hidden="true" />
          </IconButton>
        </ComponentBlock>
      </SystemBlock>
    ),
    {
      notes: { markdown: readme }
    }
  );
