import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { IconPlus, IconPen, IconTickSingle, IconTrash, IconRefresh } from '@aksara-ui/icons';

import { ComponentBlock, SystemWrapper, SystemBlock, SystemSubheading } from '../../utils/storybook';
import { Message } from '../message';
import FloatingButton from './FloatingButton';
import { Box, Heading, Stack } from '../../foundations';

const readme = require('./README.md');

const stories = storiesOf('Core|Components/Button/FloatingButton', module).addDecorator(SystemWrapper);

stories.add(
  'example',
  () => (
    <SystemBlock title="Floating Button" subtitle="Floating action buttons for primary context actions.">
      <Message state="warning" message="This button type has been deprecated. Proceed with caution." mb="xl" />
      <SystemSubheading mb="xl">Sizes</SystemSubheading>
      <Box
        mt="md"
        mb="xl"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(calc(1116px / 10 - 24px), 1fr))"
        gridGap="24px"
      >
        <Box display="flex" flexDirection="column">
          <Heading as="h4" scale={200} textAlign="center">
            Small
          </Heading>
          <Box flex="1 1 auto" textAlign="center" mt="sm">
            <FloatingButton type="button" size="sm" aria-label="Push Me" onClick={action('button-click')}>
              <IconPlus fill="currentColor" aria-hidden="true" />
            </FloatingButton>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          <Heading as="h4" scale={200} textAlign="center">
            Medium
          </Heading>
          <Box flex="1 1 auto" textAlign="center" mt="sm">
            <FloatingButton type="button" size="md" aria-label="Push Me" onClick={action('button-click')}>
              <IconPlus fill="currentColor" aria-hidden="true" />
            </FloatingButton>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          <Heading as="h4" scale={200} textAlign="center">
            Large
          </Heading>
          <Box flex="1 1 auto" textAlign="center" mt="sm">
            <FloatingButton type="button" size="lg" aria-label="Push Me" onClick={action('button-click')}>
              <IconPlus fill="currentColor" aria-hidden="true" />
            </FloatingButton>
          </Box>
        </Box>
      </Box>
      <SystemSubheading my="xl">Default Theme</SystemSubheading>
      <Stack spacing="xl">
        <ComponentBlock title="Default Button" withBackground>
          <FloatingButton
            type="button"
            style={{ marginRight: 16 }}
            aria-label="Push Me"
            onClick={action('button-click')}
          >
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
      </Stack>
    </SystemBlock>
  ),
  {
    notes: { markdown: readme },
  }
);
