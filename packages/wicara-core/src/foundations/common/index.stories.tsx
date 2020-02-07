import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { UnstyledAnchor, UnstyledButton } from '.';
import { Box } from '../box';
import { SystemWrapper, SystemBlock, ComponentBlock } from '../../utils/storybook';
import { Stack, Inline } from './components';
import { Text } from '../typography';
import { Card } from '../card';

const readme = require('./README.md');

storiesOf('Core|Foundations/Common', module)
  .addDecorator(SystemWrapper)
  .add(
    'UnstyledAnchor',
    () => (
      <Box padding="sm">
        <a
          href="https://www.youtube.com/watch?v=ORyw6TGLBvk"
          target="_blank"
          rel="noopener noreferrer"
        >
          I&apos;m an anchor!
        </a>{' '}
        <UnstyledAnchor
          href="https://www.youtube.com/watch?v=ORyw6TGLBvk"
          target="_blank"
          rel="noopener noreferrer"
        >
          I&apos;m an unstyled anchor!
        </UnstyledAnchor>
      </Box>
    ),
    {
      notes: { markdown: readme }
    }
  )
  .add(
    'UnstyledButton',
    () => (
      <Box padding="sm">
        <button type="button">I&apos;m a button!</button>{' '}
        <UnstyledButton type="button">I&apos;m an unstyled button!</UnstyledButton>
      </Box>
    ),
    {
      notes: { markdown: readme }
    }
  )
  .add(
    'Stack',
    () => {
      return (
        <SystemBlock
          title="Stack"
          subtitle="Use the Stack component to evenly space inner elements vertically"
        >
          <ComponentBlock title="Stack (spacing=md)">
            <Card padding="sm" elevation="layer200">
              <Stack spacing="md" backgroundColor="special01">
                <Box backgroundColor="white">
                  <Text>Box (backgroundColor=white)</Text>
                </Box>
                <Box backgroundColor="white">
                  <Text>Box (backgroundColor=white)</Text>
                </Box>
                <Box backgroundColor="white">
                  <Text>Box (backgroundColor=white)</Text>
                </Box>
              </Stack>
            </Card>
          </ComponentBlock>
          <ComponentBlock title="Stack (spacing=lg)">
            <Card padding="sm" elevation="layer200">
              <Stack spacing="lg" backgroundColor="special01">
                <Box backgroundColor="white">
                  <Text>Box (backgroundColor=white)</Text>
                </Box>
                <Box backgroundColor="white">
                  <Text>Box (backgroundColor=white)</Text>
                </Box>
                <Box backgroundColor="white">
                  <Text>Box (backgroundColor=white)</Text>
                </Box>
              </Stack>
            </Card>
          </ComponentBlock>
        </SystemBlock>
      );
    },
    {
      notes: { markdown: readme }
    }
  )
  .add(
    'Inline',
    () => {
      return (
        <SystemBlock
          title="Inline"
          subtitle="Use the Inline component to evenly space inner elements horizontally"
        >
          <ComponentBlock title="Inline (spacing=xs)">
            <Card padding="sm" elevation="layer200">
              <Inline spacing="xs" backgroundColor="special01">
                <Box backgroundColor="white">
                  <Text>Box (backgroundColor=white)</Text>
                </Box>
                <Box backgroundColor="white">
                  <Text>Box (backgroundColor=white)</Text>
                </Box>
                <Box backgroundColor="white">
                  <Text>Box (backgroundColor=white)</Text>
                </Box>
              </Inline>
            </Card>
          </ComponentBlock>
          <ComponentBlock title="Inline (spacing=sm)">
            <Card padding="sm" elevation="layer200">
              <Inline spacing="sm" backgroundColor="special01">
                <Box backgroundColor="white">
                  <Text>Box (backgroundColor=white)</Text>
                </Box>
                <Box backgroundColor="white">
                  <Text>Box (backgroundColor=white)</Text>
                </Box>
                <Box backgroundColor="white">
                  <Text>Box (backgroundColor=white)</Text>
                </Box>
              </Inline>
            </Card>
          </ComponentBlock>
        </SystemBlock>
      );
    },
    {
      notes: { markdown: readme }
    }
  );
