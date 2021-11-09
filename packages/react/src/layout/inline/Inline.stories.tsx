import * as React from 'react';
import { Story } from '@storybook/react';

import { Box } from '../box';
import { Text } from '../../typography';
import Inline, { InlineProps } from './Inline';

export default {
  title: 'Core/Layout/Inline',
  component: Inline,
  argTypes: {
    spacing: {
      options: ['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
  },
};

export const Example: Story<InlineProps> = ({ spacing }) => {
  return (
    <Box backgroundColor="red02">
      <Inline spacing={spacing}>
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
  );
};

Example.args = {
  spacing: 'md',
};
