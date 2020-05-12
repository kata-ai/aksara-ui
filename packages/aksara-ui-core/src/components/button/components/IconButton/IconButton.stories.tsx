import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { IconPen } from '@aksara-ui/icons';

import { ComponentBlock, SystemWrapper, SystemBlock, SystemSubheading } from '../../../../utils/storybook';
import { Stack, Box, Heading, Inline } from '../../../../foundations';
import IconButton from './IconButton';
import { IconButtonVariants } from './styles';

const readme = require('../../README.md');

const buttonVariants: IconButtonVariants[] = ['default', 'outline', 'destructive', 'ghost'];

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
    <SystemSubheading mb="xl">Default Theme</SystemSubheading>
    <Stack spacing="xl">
      {buttonVariants.map(variant => (
        <ComponentBlock title={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Button`} withBackground>
          <Inline spacing="md">
            <IconButton type="button" variant={variant} aria-label="Push Me" onClick={action('button-click')}>
              <IconPen fill="currentColor" aria-hidden="true" />
            </IconButton>
            <IconButton type="button" variant={variant} disabled aria-label="Push Me" onClick={action('button-click')}>
              <IconPen fill="currentColor" aria-hidden="true" />
            </IconButton>
          </Inline>
        </ComponentBlock>
      ))}
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
            {buttonVariants.map(variant => (
              <Box flex="1 1 auto" height="100%" minHeight={72}>
                <IconButton
                  type="button"
                  variant={variant}
                  aria-label="Push Me"
                  size={24}
                  onClick={action('button-click')}
                >
                  <IconPen fill="currentColor" aria-hidden="true" />
                </IconButton>
              </Box>
            ))}
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          <Heading as="h4" scale={200}>
            Size 32
          </Heading>
          <Box display="flex" flexDirection="column" flex="1 1 auto" mt="sm">
            {buttonVariants.map(variant => (
              <Box flex="1 1 auto" height="100%" minHeight={72}>
                <IconButton
                  type="button"
                  variant={variant}
                  aria-label="Push Me"
                  size={32}
                  onClick={action('button-click')}
                >
                  <IconPen fill="currentColor" aria-hidden="true" />
                </IconButton>
              </Box>
            ))}
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          <Heading as="h4" scale={200}>
            Size 40
          </Heading>
          <Box display="flex" flexDirection="column" flex="1 1 auto" mt="sm">
            {buttonVariants.map(variant => (
              <Box flex="1 1 auto" height="100%" minHeight={72}>
                <IconButton
                  type="button"
                  variant={variant}
                  aria-label="Push Me"
                  size={40}
                  onClick={action('button-click')}
                >
                  <IconPen fill="currentColor" aria-hidden="true" />
                </IconButton>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </ComponentBlock>
  </SystemBlock>
);
