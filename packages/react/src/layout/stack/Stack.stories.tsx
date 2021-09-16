import * as React from 'react';
import { Story } from '@storybook/react';

import { Box } from '../box';
import { Text } from '../../typography';
import Stack, { StackProps } from './Stack';

export default {
  title: 'Core/Layout/Stack',
  component: Stack,
  argTypes: {
    spacing: {
      options: ['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
  },
};

export const Example: Story<StackProps> = ({ spacing }) => {
  return (
    <Box backgroundColor="red02">
      <Stack spacing={spacing}>
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
  );
};

Example.args = {
  spacing: 'md',
};
