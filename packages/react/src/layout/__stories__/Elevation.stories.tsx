import * as React from 'react';
import { ElevationDetail, ElevationGrid } from '../../utils/storybook';
import { Card } from '../../components';
import { Box } from '../box';

export default {
  title: 'Core/Foundations/Elevation',
  parameters: {
    controls: {
      disabled: true,
    },
  },
};

export const Elevation = () => (
  <ElevationGrid>
    <Box>
      <ElevationDetail title="Level 0" description="Base" />
    </Box>
    <Card elevation={1}>
      <ElevationDetail title="Level 1" description="Flat" />
    </Card>
    <Card elevation={2}>
      <ElevationDetail title="Level 2" description="Floating" />
    </Card>
    <Card elevation={3}>
      <ElevationDetail title="Level 3" description="Sticky Nav" />
    </Card>
    <Card elevation={4}>
      <ElevationDetail title="Level 4" description="Dialog" />
    </Card>
    <Card elevation={5}>
      <ElevationDetail title="Level 5" description="Toast" />
    </Card>
  </ElevationGrid>
);
