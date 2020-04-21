import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { IconPen } from '@aksara-ui/icons';

import { ComponentBlock, SystemWrapper, SystemBlock, SystemSubheading } from '../../utils/storybook';
import { Message } from '../message';
import OutlineButton from './OutlineButton';
import { Stack } from '../../foundations';

const readme = require('./README.md');

export default {
  title: 'Core|Components/Button/OutlineButton',
  component: OutlineButton,
  decorators: [SystemWrapper],
  parameters: {
    notes: { markdown: readme },
  },
};

export const Example = () => (
  <SystemBlock title="Outline Button" subtitle="Outline-styled button for alternate styling.">
    <Message state="warning" message="This button type has been deprecated. Proceed with caution." mb="lg" />
    <SystemSubheading mb="xl">Default Theme</SystemSubheading>
    <Stack spacing="xl">
      <ComponentBlock title="Default Button" withBackground>
        <OutlineButton type="button" style={{ marginRight: 16 }} size={32} onClick={action('button-click')}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" style={{ marginRight: 16 }} onClick={action('button-click')}>
          Push Me
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="Primary Button" withBackground>
        <OutlineButton
          type="button"
          variant="primary"
          style={{ marginRight: 16 }}
          size={32}
          onClick={action('button-click')}
        >
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="primary" style={{ marginRight: 16 }} onClick={action('button-click')}>
          Push Me
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="Success Button" withBackground>
        <OutlineButton
          type="button"
          variant="success"
          style={{ marginRight: 16 }}
          size={32}
          onClick={action('button-click')}
        >
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="success" style={{ marginRight: 16 }} onClick={action('button-click')}>
          Push Me
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="Warning Button" withBackground>
        <OutlineButton
          type="button"
          variant="warning"
          style={{ marginRight: 16 }}
          size={32}
          onClick={action('button-click')}
        >
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="warning" style={{ marginRight: 16 }} onClick={action('button-click')}>
          Push Me
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="Destructive Button" withBackground>
        <OutlineButton
          type="button"
          variant="destructive"
          style={{ marginRight: 16 }}
          size={32}
          onClick={action('button-click')}
        >
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="destructive" style={{ marginRight: 16 }} onClick={action('button-click')}>
          Push Me
        </OutlineButton>
      </ComponentBlock>

      <SystemSubheading>Button States</SystemSubheading>

      <ComponentBlock title="Default Button" withBackground>
        <OutlineButton type="button" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" className="hover" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" className="focus" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" disabled style={{ marginRight: 16 }}>
          I&apos;m disabled
        </OutlineButton>
        <OutlineButton type="button" isLoading style={{ marginRight: 16 }}>
          I&apos;m loading
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="Primary Button" withBackground>
        <OutlineButton type="button" variant="primary" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="primary" className="hover" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="primary" className="focus" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="primary" disabled style={{ marginRight: 16 }}>
          I&apos;m disabled
        </OutlineButton>
        <OutlineButton type="button" variant="primary" isLoading style={{ marginRight: 16 }}>
          I&apos;m loading
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="Success Button" withBackground>
        <OutlineButton type="button" variant="success" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="success" className="hover" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="success" className="focus" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="success" disabled style={{ marginRight: 16 }}>
          I&apos;m disabled
        </OutlineButton>
        <OutlineButton type="button" variant="success" isLoading style={{ marginRight: 16 }}>
          I&apos;m loading
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="Warning Button" withBackground>
        <OutlineButton type="button" variant="warning" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="warning" className="hover" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="warning" className="focus" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="warning" disabled style={{ marginRight: 16 }}>
          I&apos;m disabled
        </OutlineButton>
        <OutlineButton type="button" variant="warning" isLoading style={{ marginRight: 16 }}>
          I&apos;m loading
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="Destructive Button" withBackground>
        <OutlineButton type="button" variant="destructive" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="destructive" className="hover" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="destructive" className="focus" style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="destructive" disabled style={{ marginRight: 16 }}>
          I&apos;m disabled
        </OutlineButton>
        <OutlineButton type="button" variant="destructive" isLoading style={{ marginRight: 16 }}>
          I&apos;m loading
        </OutlineButton>
      </ComponentBlock>
    </Stack>
  </SystemBlock>
);

export const AdditionalProps = () => (
  <SystemBlock title="Outline Button" subtitle="Outline-styled button for alternate styling.">
    <Message state="warning" message="This button type has been deprecated. Proceed with caution." mb="lg" />
    <SystemSubheading mb="xl">Additional Props</SystemSubheading>
    <Stack spacing="xl">
      <ComponentBlock title="Block Button" withBackground>
        <OutlineButton type="button" variant="primary" block>
          Push Me
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="Loading" withBackground>
        <OutlineButton type="button" size={32} variant="primary" isLoading style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="primary" isLoading>
          Push Me
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="With Icons (left)" withBackground>
        <OutlineButton
          type="button"
          size={32}
          variant="primary"
          icon={IconPen}
          iconPosition="left"
          style={{ marginRight: 16 }}
        >
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="primary" icon="add" iconPosition="left">
          Push Me
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="With Icons (right)" withBackground>
        <OutlineButton
          type="button"
          size={32}
          variant="primary"
          icon={IconPen}
          iconPosition="right"
          style={{ marginRight: 16 }}
        >
          Push Me
        </OutlineButton>
        <OutlineButton type="button" variant="primary" icon={IconPen} iconPosition="right">
          Push Me
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="With Icons (block)" withBackground>
        <OutlineButton type="button" block variant="primary" icon={IconPen} style={{ marginBottom: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" block variant="primary" icon={IconPen} iconPosition="right">
          Push Me
        </OutlineButton>
      </ComponentBlock>
      <ComponentBlock title="With Icons loading" withBackground>
        <OutlineButton type="button" isLoading variant="primary" icon={IconPen} size={32} style={{ marginRight: 16 }}>
          Push Me
        </OutlineButton>
        <OutlineButton type="button" isLoading variant="primary" icon={IconPen}>
          Push Me
        </OutlineButton>
      </ComponentBlock>
    </Stack>
  </SystemBlock>
);
