import * as React from 'react';

import { SystemWrapper, SystemBlock, ComponentBlock } from '../../../../utils/storybook';
import { Box } from '../../../box';
import { Card } from '../../../card';
import { Text } from '../../../typography';
import { Inline } from '.';
import { Stack } from '../Stack';

const readme = require('../../README.md');

export default {
  title: 'Core|Foundations/Common/Inline',
  component: Inline,
  decorators: [SystemWrapper],
  parameters: {
    notes: { markdown: readme },
    jsx: { skip: 2 },
  },
};

export const Example = () => {
  return (
    <SystemBlock
      title="Inline"
      subtitle="Use the Inline component to evenly space inner elements horizontally"
      noBackground
    >
      <Stack spacing="xl">
        <ComponentBlock title="Inline (spacing=xs)">
          <Card padding="sm" elevation={2}>
            <Box backgroundColor="red02" overflow="hidden">
              <Inline spacing="xs">
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
            </Box>
          </Card>
        </ComponentBlock>
        <ComponentBlock title="Inline (spacing=sm)">
          <Card padding="sm" elevation={2}>
            <Box backgroundColor="red02" overflow="hidden">
              <Inline spacing="sm">
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
            </Box>
          </Card>
        </ComponentBlock>
      </Stack>
    </SystemBlock>
  );
};
