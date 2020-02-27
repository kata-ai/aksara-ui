import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { IconPen } from '@aksara-ui/icons';

import { ComponentBlock, SystemWrapper, SystemBlock, SystemSubheading } from '../../utils/storybook';
import Button from './Button';
import { Box, Inline, Heading, Paragraph, Stack } from '../../foundations';
import { LinkButton } from './components/LinkButton';

const readme = require('./README.md');

const stories = storiesOf('Core|Components/Button/Button', module).addDecorator(SystemWrapper);

stories.add(
  'example',
  () => (
    <SystemBlock title="Button" subtitle="It's a button. What more do you expect?">
      <SystemSubheading mb="xl">Default Theme</SystemSubheading>
      <Stack spacing="xl">
        <ComponentBlock title="Default Button">
          <Box display="flex" flexWrap="wrap">
            <Box p="md" backgroundColor="grey02">
              <Button type="button" variant="primary" onClick={action('button-click')}>
                Push Me
              </Button>
            </Box>
            <Box p="md" backgroundColor="grey02">
              <Button type="button" variant="outline" onClick={action('button-click')}>
                Push Me
              </Button>
            </Box>
            <Box p="md" backgroundColor="grey02">
              <Button type="button" variant="destructive" onClick={action('button-click')}>
                Push Me
              </Button>
            </Box>
            <Box p="md" backgroundColor="grey02">
              <Button type="button" variant="primary" icon={IconPen} onClick={action('button-click')}>
                Push Me
              </Button>
            </Box>
            <Box p="md" backgroundColor="grey02">
              <Button type="button" variant="outline" icon={IconPen} onClick={action('button-click')}>
                Push Me
              </Button>
            </Box>
            <Box p="md" backgroundColor="blue08">
              <Button type="button" variant="inverse" onClick={action('button-click')}>
                Push Me
              </Button>
            </Box>
          </Box>
        </ComponentBlock>
        <ComponentBlock title="Link Button (TODO)">
          <Box display="flex" flexWrap="wrap">
            <Box p="md" backgroundColor="grey02">
              <LinkButton variant="primary" onClick={action('button-click')}>
                Primary Link
              </LinkButton>
            </Box>
            <Box p="md" backgroundColor="grey02">
              <LinkButton variant="destructive" onClick={action('button-click')}>
                Destructive Link
              </LinkButton>
            </Box>
            <Box p="md" backgroundColor="grey02">
              <LinkButton variant="primary" icon={IconPen} onClick={action('button-click')}>
                Primary Link with Icon
              </LinkButton>
            </Box>
            <Box p="md" backgroundColor="blue08">
              <LinkButton variant="inverse" onClick={action('button-click')}>
                Inverse Link
              </LinkButton>
            </Box>
          </Box>
        </ComponentBlock>
      </Stack>

      <SystemSubheading mt="xl" mb="md">
        Button States
      </SystemSubheading>
      <Stack spacing="xl">
        <Paragraph>Left to right: default, hover, focus, disabled, loading.</Paragraph>
        <ComponentBlock title="Default Button" withBackground>
          <Inline spacing="md">
            <Button type="button" variant="default">
              Push Me
            </Button>
            <Button type="button" variant="default" className="hover">
              Push Me
            </Button>
            <Button type="button" variant="default" className="focus">
              Push Me
            </Button>
            <Button type="button" variant="default" disabled>
              I&apos;m disabled
            </Button>
            <Button type="button" variant="default" isLoading>
              I&apos;m loading
            </Button>
          </Inline>
        </ComponentBlock>
        <ComponentBlock title="Primary Button" withBackground>
          <Inline spacing="md">
            <Button type="button" variant="primary">
              Push Me
            </Button>
            <Button type="button" variant="primary" className="hover">
              Push Me
            </Button>
            <Button type="button" variant="primary" className="focus">
              Push Me
            </Button>
            <Button type="button" variant="primary" disabled>
              I&apos;m disabled
            </Button>
            <Button type="button" variant="primary" isLoading>
              I&apos;m loading
            </Button>
          </Inline>
        </ComponentBlock>
        <ComponentBlock title="Outline Button" withBackground>
          <Inline spacing="md">
            <Button type="button" variant="outline">
              Push Me
            </Button>
            <Button type="button" variant="outline" className="hover">
              Push Me
            </Button>
            <Button type="button" variant="outline" className="focus">
              Push Me
            </Button>
            <Button type="button" variant="outline" disabled>
              I&apos;m disabled
            </Button>
            <Button type="button" variant="outline" isLoading>
              I&apos;m loading
            </Button>
          </Inline>
        </ComponentBlock>
        <ComponentBlock title="Destructive Button" withBackground>
          <Inline spacing="md">
            <Button type="button" variant="destructive">
              Push Me
            </Button>
            <Button type="button" variant="destructive" className="hover">
              Push Me
            </Button>
            <Button type="button" variant="destructive" className="focus">
              Push Me
            </Button>
            <Button type="button" variant="destructive" disabled>
              I&apos;m disabled
            </Button>
            <Button type="button" variant="destructive" isLoading>
              I&apos;m loading
            </Button>
          </Inline>
        </ComponentBlock>
        <ComponentBlock title="Ghost Button" withBackground>
          <Inline spacing="md">
            <Button type="button" variant="ghost">
              Push Me
            </Button>
            <Button type="button" variant="ghost" className="hover">
              Push Me
            </Button>
            <Button type="button" variant="ghost" className="focus">
              Push Me
            </Button>
            <Button type="button" variant="ghost" disabled>
              I&apos;m disabled
            </Button>
            <Button type="button" variant="ghost" isLoading>
              I&apos;m loading
            </Button>
          </Inline>
        </ComponentBlock>
        <ComponentBlock title="Inverse Button">
          <Box backgroundColor="blue08" p="md">
            <Inline spacing="md">
              <Button type="button" variant="inverse">
                Push Me
              </Button>
              <Button type="button" variant="inverse" className="hover">
                Push Me
              </Button>
              <Button type="button" variant="inverse" className="focus">
                Push Me
              </Button>
              <Button type="button" variant="inverse" disabled>
                I&apos;m disabled
              </Button>
              <Button type="button" variant="inverse" isLoading>
                I&apos;m loading
              </Button>
            </Inline>
          </Box>
        </ComponentBlock>
      </Stack>

      <SystemSubheading my="xl">Button Sizes</SystemSubheading>
      <Box
        mt="md"
        mb="xl"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(calc(1116px / 8 - 24px), 1fr))"
        gridGap="24px"
      >
        <Box display="flex" flexDirection="column">
          <Heading as="h4" scale={200}>
            Small
          </Heading>
          <Box display="flex" flexDirection="column" flex="1 1 auto" mt="sm">
            <Box flex="1 1 auto" height="100%" minHeight={72}>
              <Button type="button" variant="primary" size="sm">
                Push Me
              </Button>
            </Box>
            <Box flex="1 1 auto" height="100%" minHeight={72}>
              <Button type="button" variant="outline" size="sm">
                Push Me
              </Button>
            </Box>
            <Box flex="1 1 auto" height="100%" minHeight={72}>
              <Button type="button" variant="destructive" size="sm">
                Push Me
              </Button>
            </Box>
            <Box flex="1 1 auto" height="100%" minHeight={72}>
              <Button type="button" variant="primary" icon={IconPen} size="sm">
                Push Me
              </Button>
            </Box>
            <Box flex="1 1 auto" height="100%" minHeight={72}>
              <Button type="button" variant="outline" icon={IconPen} size="sm">
                Push Me
              </Button>
            </Box>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          <Heading as="h4" scale={200}>
            Medium
          </Heading>
          <Box display="flex" flexDirection="column" flex="1 1 auto" mt="sm">
            <Box flex="1 1 auto" height="100%" minHeight={72}>
              <Button type="button" variant="primary" size="md">
                Push Me
              </Button>
            </Box>
            <Box flex="1 1 auto" height="100%" minHeight={72}>
              <Button type="button" variant="outline" size="md">
                Push Me
              </Button>
            </Box>
            <Box flex="1 1 auto" height="100%" minHeight={72}>
              <Button type="button" variant="destructive" size="md">
                Push Me
              </Button>
            </Box>
            <Box flex="1 1 auto" height="100%" minHeight={72}>
              <Button type="button" variant="primary" icon={IconPen} size="md">
                Push Me
              </Button>
            </Box>
            <Box flex="1 1 auto" height="100%" minHeight={72}>
              <Button type="button" variant="outline" icon={IconPen} size="md">
                Push Me
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </SystemBlock>
  ),
  {
    notes: { markdown: readme },
  }
);

stories.add(
  'additional props',
  () => (
    <SystemBlock title="Button" subtitle="It's a button. What more do you expect?">
      <SystemSubheading>Additional Props</SystemSubheading>
      <ComponentBlock title="Block Button" withBackground>
        <Button type="button" variant="primary" block>
          Push Me
        </Button>
      </ComponentBlock>
      <ComponentBlock title="Loading" withBackground>
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
      <ComponentBlock title="With Icons (left)" withBackground>
        <Button
          type="button"
          size="sm"
          variant="primary"
          icon={IconPen}
          iconPosition="left"
          style={{ marginRight: 16 }}
        >
          Push Me
        </Button>
        <Button
          type="button"
          size="md"
          variant="primary"
          icon={IconPen}
          iconPosition="left"
          style={{ marginRight: 16 }}
        >
          Push Me
        </Button>
        <Button type="button" size="lg" variant="primary" icon={IconPen} iconPosition="left">
          Push Me
        </Button>
      </ComponentBlock>
      <ComponentBlock title="With Icons (right)" withBackground>
        <Button
          type="button"
          size="sm"
          variant="primary"
          icon={IconPen}
          iconPosition="right"
          style={{ marginRight: 16 }}
        >
          Push Me
        </Button>
        <Button
          size="md"
          type="button"
          variant="primary"
          icon={IconPen}
          iconPosition="right"
          style={{ marginRight: 16 }}
        >
          Push Me
        </Button>
        <Button size="lg" type="button" variant="primary" icon={IconPen} iconPosition="right">
          Push Me
        </Button>
      </ComponentBlock>
      <ComponentBlock title="With Icons (block)" withBackground>
        <Button type="button" block variant="primary" icon={IconPen} style={{ marginBottom: 16 }}>
          Push Me
        </Button>
        <Button type="button" block variant="primary" icon={IconPen} iconPosition="right">
          Push Me
        </Button>
      </ComponentBlock>
      <ComponentBlock title="With Icons loading" withBackground>
        <Button type="button" isLoading variant="primary" icon={IconPen} size="sm" style={{ marginRight: 16 }}>
          Push Me
        </Button>
        <Button type="button" isLoading variant="primary" icon={IconPen}>
          Push Me
        </Button>
      </ComponentBlock>
    </SystemBlock>
  ),
  {
    notes: { markdown: readme },
  }
);
