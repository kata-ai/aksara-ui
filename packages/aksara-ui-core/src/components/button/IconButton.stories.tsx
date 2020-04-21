import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { IconPen } from '@aksara-ui/icons';

import { ComponentBlock, SystemWrapper, SystemBlock } from '../../utils/storybook';
import { Stack, Box, Heading } from '../../foundations';
import IconButton from './IconButton';

const readme = require('./README.md');

export default {
  title: 'Core|Components/Button/IconButton',
  component: IconButton,
  decorators: [SystemWrapper],
  parameters: {
    notes: { markdown: readme },
  },
};

export const Example = () => (
  <SystemBlock title="Icon Button" subtitle="Icon-only buttons.">
    <Stack spacing="xl">
      <ComponentBlock title="Default Button" withBackground>
        <IconButton type="button" style={{ marginRight: 16 }} aria-label="Push Me" onClick={action('button-click')}>
          <IconPen fill="currentColor" aria-hidden="true" />
        </IconButton>
        <IconButton type="button" disabled aria-label="Push Me" onClick={action('button-click')}>
          <IconPen fill="currentColor" aria-hidden="true" />
        </IconButton>
      </ComponentBlock>
      <ComponentBlock title="Primary Button" withBackground>
        <IconButton
          type="button"
          style={{ marginRight: 16 }}
          variant="primary"
          aria-label="Push Me"
          onClick={action('button-click')}
        >
          <IconPen fill="currentColor" aria-hidden="true" />
        </IconButton>
        <IconButton type="button" disabled variant="primary" aria-label="Push Me" onClick={action('button-click')}>
          <IconPen fill="currentColor" aria-hidden="true" />
        </IconButton>
      </ComponentBlock>
      <ComponentBlock title="Outline Button" withBackground>
        <IconButton
          type="button"
          style={{ marginRight: 16 }}
          variant="outline"
          aria-label="Push Me"
          onClick={action('button-click')}
        >
          <IconPen fill="currentColor" aria-hidden="true" />
        </IconButton>
        <IconButton type="button" disabled variant="outline" aria-label="Push Me" onClick={action('button-click')}>
          <IconPen fill="currentColor" aria-hidden="true" />
        </IconButton>
      </ComponentBlock>
      <ComponentBlock title="Destructive Button" withBackground>
        <IconButton
          type="button"
          style={{ marginRight: 16 }}
          variant="destructive"
          aria-label="Push Me"
          onClick={action('button-click')}
        >
          <IconPen fill="currentColor" aria-hidden="true" />
        </IconButton>
        <IconButton type="button" disabled variant="destructive" aria-label="Push Me" onClick={action('button-click')}>
          <IconPen fill="currentColor" aria-hidden="true" />
        </IconButton>
      </ComponentBlock>
      <ComponentBlock title="Ghost Button" withBackground>
        <IconButton
          type="button"
          style={{ marginRight: 16 }}
          variant="ghost"
          aria-label="Push Me"
          onClick={action('button-click')}
        >
          <IconPen fill="currentColor" aria-hidden="true" />
        </IconButton>
        <IconButton type="button" disabled variant="ghost" aria-label="Push Me" onClick={action('button-click')}>
          <IconPen fill="currentColor" aria-hidden="true" />
        </IconButton>
      </ComponentBlock>
    </Stack>
  </SystemBlock>
);

export const ButtonSizes = () => (
  <SystemBlock title="Icon Button" subtitle="Icon-only buttons." noBackground>
    <ComponentBlock title="Button Sizes">
      <Box
        mt="md"
        mb="xl"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(calc(1116px / 12 - 24px), 1fr))"
        gridGap="24px"
      >
        <Box display="flex" flexDirection="column">
          <Heading as="h4" scale={200}>
            Size 24
          </Heading>
          <Box display="flex" flexDirection="column" flex="1 1 auto" mt="sm">
            <Box flex="1 1 auto" height="100%" minHeight={72}>
              <IconButton
                type="button"
                variant="primary"
                aria-label="Push Me"
                size={24}
                onClick={action('button-click')}
              >
                <IconPen fill="currentColor" aria-hidden="true" />
              </IconButton>
            </Box>
            <Box flex="1 1 auto" height="100%" minHeight={72}>
              <IconButton
                type="button"
                variant="outline"
                aria-label="Push Me"
                size={24}
                onClick={action('button-click')}
              >
                <IconPen fill="currentColor" aria-hidden="true" />
              </IconButton>
            </Box>
            <Box flex="1 1 auto" height="100%" minHeight={72}>
              <IconButton
                type="button"
                variant="destructive"
                aria-label="Push Me"
                size={24}
                onClick={action('button-click')}
              >
                <IconPen fill="currentColor" aria-hidden="true" />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          <Heading as="h4" scale={200}>
            Size 32
          </Heading>
          <Box display="flex" flexDirection="column" flex="1 1 auto" mt="sm">
            <Box flex="1 1 auto" height="100%" minHeight={72}>
              <IconButton
                type="button"
                aria-label="Push Me"
                size={32}
                variant="primary"
                onClick={action('button-click')}
              >
                <IconPen fill="currentColor" aria-hidden="true" />
              </IconButton>
            </Box>
            <Box flex="1 1 auto" height="100%" minHeight={72}>
              <IconButton
                type="button"
                aria-label="Push Me"
                size={32}
                variant="outline"
                onClick={action('button-click')}
              >
                <IconPen fill="currentColor" aria-hidden="true" />
              </IconButton>
            </Box>
            <Box flex="1 1 auto" height="100%" minHeight={72}>
              <IconButton
                type="button"
                aria-label="Push Me"
                size={32}
                variant="destructive"
                onClick={action('button-click')}
              >
                <IconPen fill="currentColor" aria-hidden="true" />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          <Heading as="h4" scale={200}>
            Size 40
          </Heading>
          <Box display="flex" flexDirection="column" flex="1 1 auto" mt="sm">
            <Box flex="1 1 auto" height="100%" minHeight={72}>
              <IconButton
                type="button"
                aria-label="Push Me"
                size={40}
                variant="primary"
                onClick={action('button-click')}
              >
                <IconPen fill="currentColor" aria-hidden="true" />
              </IconButton>
            </Box>
            <Box flex="1 1 auto" height="100%" minHeight={72}>
              <IconButton
                type="button"
                aria-label="Push Me"
                size={40}
                variant="outline"
                onClick={action('button-click')}
              >
                <IconPen fill="currentColor" aria-hidden="true" />
              </IconButton>
            </Box>
            <Box flex="1 1 auto" height="100%" minHeight={72}>
              <IconButton
                type="button"
                aria-label="Push Me"
                size={40}
                variant="destructive"
                onClick={action('button-click')}
              >
                <IconPen fill="currentColor" aria-hidden="true" />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </ComponentBlock>
  </SystemBlock>
);
