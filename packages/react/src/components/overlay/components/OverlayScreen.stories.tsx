import * as React from 'react';
import { Story } from '@storybook/react';

import OverlayScreen, { OverlayScreenProps } from './OverlayScreen';
import { Box } from '../../../layout';
import { Text } from '../../../typography';

export default {
  title: 'Core/Components/Overlay',
  component: OverlayScreen,
  argTypes: {
    backdropBlur: {
      control: 'boolean',
    },
  },
};
export const Example: Story<OverlayScreenProps> = ({ backdropBlur }) => {
  return (
    <Box p="md">
      <Text as="p">This will be blured if your browser support backdrop filter</Text>
      <OverlayScreen backdropBlur={backdropBlur} data-state className="entered" />
    </Box>
  );
};
Example.args = {
  backdropBlur: true,
};
