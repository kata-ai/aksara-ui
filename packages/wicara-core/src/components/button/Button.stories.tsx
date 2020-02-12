import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import * as React from 'react';

import { ComponentBlock, SystemWrapper, SystemBlock } from '../../utils/storybook';
import Button from './Button';
import { Box } from '../../foundations';

const readme = require('./README.md');

const stories = storiesOf('Core|Components/Button/Button', module).addDecorator(SystemWrapper);

stories.add(
  'basic',
  () => (
    <SystemBlock title="Button" subtitle="It's a button. What more do you expect?">
      <ComponentBlock title="Default Button">
        <Button type="button" style={{ marginRight: 16 }} size="sm" onClick={action('button-click')}>
          Push Me
        </Button>
        <Button type="button" style={{ marginRight: 16 }} size="md" onClick={action('button-click')}>
          Push Me
        </Button>
        <Button type="button" style={{ marginRight: 16 }} size="lg" onClick={action('button-click')}>
          Push Me
        </Button>
      </ComponentBlock>
      <ComponentBlock title="Primary Button">
        <Button type="button" variant="primary" style={{ marginRight: 16 }} size="sm" onClick={action('button-click')}>
          Push Me
        </Button>
        <Button type="button" variant="primary" style={{ marginRight: 16 }} size="md" onClick={action('button-click')}>
          Push Me
        </Button>
        <Button type="button" variant="primary" style={{ marginRight: 16 }} size="lg" onClick={action('button-click')}>
          Push Me
        </Button>
      </ComponentBlock>
      <ComponentBlock title="Support Button">
        <Button type="button" variant="support" style={{ marginRight: 16 }} size="sm" onClick={action('button-click')}>
          Push Me
        </Button>
        <Button type="button" variant="support" style={{ marginRight: 16 }} size="md" onClick={action('button-click')}>
          Push Me
        </Button>
        <Button type="button" variant="support" style={{ marginRight: 16 }} size="lg" onClick={action('button-click')}>
          Push Me
        </Button>
      </ComponentBlock>
      <ComponentBlock title="Link Button">
        <Button type="button" variant="link" style={{ marginRight: 16 }} size="sm" onClick={action('button-click')}>
          Push Me
        </Button>
        <Button type="button" variant="link" style={{ marginRight: 16 }} size="md" onClick={action('button-click')}>
          Push Me
        </Button>
        <Button type="button" variant="link" style={{ marginRight: 16 }} size="lg" onClick={action('button-click')}>
          Push Me
        </Button>
      </ComponentBlock>
      <ComponentBlock title="Destructive Button">
        <Button
          type="button"
          variant="destructive"
          style={{ marginRight: 16 }}
          size="sm"
          onClick={action('button-click')}
        >
          Push Me
        </Button>
        <Button
          type="button"
          variant="destructive"
          style={{ marginRight: 16 }}
          size="md"
          onClick={action('button-click')}
        >
          Push Me
        </Button>
        <Button
          type="button"
          variant="destructive"
          style={{ marginRight: 16 }}
          size="lg"
          onClick={action('button-click')}
        >
          Push Me
        </Button>
      </ComponentBlock>
      <ComponentBlock title="Ghost Button">
        <Button type="button" variant="ghost" style={{ marginRight: 16 }} size="sm" onClick={action('button-click')}>
          Push Me
        </Button>
        <Button type="button" variant="ghost" style={{ marginRight: 16 }} size="md" onClick={action('button-click')}>
          Push Me
        </Button>
        <Button type="button" variant="ghost" style={{ marginRight: 16 }} size="lg" onClick={action('button-click')}>
          Push Me
        </Button>
      </ComponentBlock>
      <ComponentBlock title="Inverse Button">
        <Box bg="kataBlue" p="md">
          <Button
            type="button"
            variant="inverse"
            style={{ marginRight: 16 }}
            size="sm"
            onClick={action('button-click')}
          >
            Push Me
          </Button>
          <Button
            type="button"
            variant="inverse"
            style={{ marginRight: 16 }}
            size="md"
            onClick={action('button-click')}
          >
            Push Me
          </Button>
          <Button
            type="button"
            variant="inverse"
            style={{ marginRight: 16 }}
            size="lg"
            onClick={action('button-click')}
          >
            Push Me
          </Button>
        </Box>
      </ComponentBlock>
    </SystemBlock>
  ),
  {
    notes: { markdown: readme },
  }
);

stories.add(
  'button states',
  () => (
    <SystemBlock title="Button States" subtitle="Left to right: default, hover, focus, disabled, loading">
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
          I&apos;m disabled
        </Button>
        <Button type="button" isLoading style={{ marginRight: 16 }}>
          I&apos;m loading
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
          I&apos;m disabled
        </Button>
        <Button type="button" variant="primary" isLoading style={{ marginRight: 16 }}>
          I&apos;m loading
        </Button>
      </ComponentBlock>
      <ComponentBlock title="Support Button">
        <Button type="button" variant="support" style={{ marginRight: 16 }}>
          Push Me
        </Button>
        <Button type="button" variant="support" className="hover" style={{ marginRight: 16 }}>
          Push Me
        </Button>
        <Button type="button" variant="support" className="focus" style={{ marginRight: 16 }}>
          Push Me
        </Button>
        <Button type="button" variant="support" disabled style={{ marginRight: 16 }}>
          I&apos;m disabled
        </Button>
        <Button type="button" variant="support" isLoading style={{ marginRight: 16 }}>
          I&apos;m loading
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
          I&apos;m disabled
        </Button>
        <Button type="button" variant="link" isLoading style={{ marginRight: 16 }}>
          I&apos;m loading
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
          I&apos;m disabled
        </Button>
        <Button type="button" variant="destructive" isLoading style={{ marginRight: 16 }}>
          I&apos;m loading
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
          I&apos;m disabled
        </Button>
        <Button type="button" variant="ghost" isLoading style={{ marginRight: 16 }}>
          I&apos;m loading
        </Button>
      </ComponentBlock>
      <ComponentBlock title="Inverse Button">
        <Box bg="kataBlue" p="md">
          <Button type="button" variant="inverse" style={{ marginRight: 16 }}>
            Push Me
          </Button>
          <Button type="button" variant="inverse" className="hover" style={{ marginRight: 16 }}>
            Push Me
          </Button>
          <Button type="button" variant="inverse" className="focus" style={{ marginRight: 16 }}>
            Push Me
          </Button>
          <Button type="button" variant="inverse" disabled style={{ marginRight: 16 }}>
            I&apos;m disabled
          </Button>
          <Button type="button" variant="inverse" isLoading style={{ marginRight: 16 }}>
            I&apos;m loading
          </Button>
        </Box>
      </ComponentBlock>
    </SystemBlock>
  ),
  {
    notes: { markdown: readme },
  }
);

stories.add(
  'additional props',
  () => (
    <SystemBlock title="Button Props" subtitle="Additional props to modify the look of the button.">
      <ComponentBlock title="Block Button">
        <Button type="button" variant="primary" block>
          Push Me
        </Button>
      </ComponentBlock>
      <ComponentBlock title="Loading">
        <Button type="button" size="sm" variant="primary" isLoading style={{ marginRight: 16 }}>
          Push Me
        </Button>
        <Button type="button" size="md" variant="primary" isLoading style={{ marginRight: 16 }}>
          Push Me
        </Button>
        <Button type="button" size="lg" variant="primary" isLoading>
          Push Me
        </Button>
      </ComponentBlock>
      <ComponentBlock title="With Icons (left)">
        <Button type="button" size="sm" variant="primary" icon="add" iconPosition="left" style={{ marginRight: 16 }}>
          Push Me
        </Button>
        <Button type="button" size="md" variant="primary" icon="add" iconPosition="left" style={{ marginRight: 16 }}>
          Push Me
        </Button>
        <Button type="button" size="lg" variant="primary" icon="add" iconPosition="left">
          Push Me
        </Button>
      </ComponentBlock>
      <ComponentBlock title="With Icons (right)">
        <Button type="button" size="sm" variant="primary" icon="add" iconPosition="right" style={{ marginRight: 16 }}>
          Push Me
        </Button>
        <Button size="md" type="button" variant="primary" icon="add" iconPosition="right" style={{ marginRight: 16 }}>
          Push Me
        </Button>
        <Button size="lg" type="button" variant="primary" icon="add" iconPosition="right">
          Push Me
        </Button>
      </ComponentBlock>
      <ComponentBlock title="With Icons (block)">
        <Button type="button" block variant="primary" icon="add" style={{ marginBottom: 16 }}>
          Push Me
        </Button>
        <Button type="button" block variant="primary" icon="add" iconPosition="right">
          Push Me
        </Button>
      </ComponentBlock>
      <ComponentBlock title="With Icons loading">
        <Button type="button" isLoading variant="primary" icon="add" size="sm" style={{ marginRight: 16 }}>
          Push Me
        </Button>
        <Button type="button" isLoading variant="primary" icon="add">
          Push Me
        </Button>
      </ComponentBlock>
    </SystemBlock>
  ),
  {
    notes: { markdown: readme },
  }
);
