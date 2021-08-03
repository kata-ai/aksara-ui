import * as React from 'react';
import { SpacingBlock } from '../../utils/storybook';
import { Stack } from '../stack';

export default {
  title: 'Core/Foundations/Spacing',
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

export const Spacing = () => (
  <Stack spacing="lg">
    <SpacingBlock spacing="xxxs" />
    <SpacingBlock spacing="xxs" />
    <SpacingBlock spacing="xs" />
    <SpacingBlock spacing="sm" />
    <SpacingBlock spacing="md" />
    <SpacingBlock spacing="lg" />
    <SpacingBlock spacing="xl" />
    <SpacingBlock spacing="xxl" />
  </Stack>
);
