import * as React from 'react';

import { SystemBlock, ComponentBlock } from '../../utils/storybook';
import { Card } from '../../components';
import { Box } from '../box';
import { Text } from '../typography';
import { Stack } from '.';

const readme = require('./README.md');

export default {
  title: 'Core/Layout/Stack',
  component: Stack,
  parameters: {
    notes: { markdown: readme },
    jsx: { skip: 2 },
  },
};

export const Example = () => {
  return (
    <SystemBlock
      title="Stack"
      subtitle="Use the Stack component to evenly space inner elements vertically"
      noBackground
    >
      <Stack spacing="xl">
        <ComponentBlock title="Stack (spacing=md)">
          <Card padding="sm" elevation={2}>
            <Box backgroundColor="red02" overflow="hidden">
              <Stack spacing="md">
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
            </Box>
          </Card>
        </ComponentBlock>
        <ComponentBlock title="Stack (spacing=lg)">
          <Card padding="sm" elevation={2}>
            <Box backgroundColor="red02" overflow="hidden">
              <Stack spacing="lg">
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
            </Box>
          </Card>
        </ComponentBlock>
      </Stack>
    </SystemBlock>
  );
};
