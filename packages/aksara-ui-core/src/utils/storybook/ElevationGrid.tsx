import * as React from 'react';
import { Box } from '../../foundations';

const ElevationGrid: React.FC = ({ children }) => {
  return (
    <Box
      mt="md"
      mb="xl"
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(calc(1116px / 3 - 24px), 1fr))"
      gridGap="24px"
    >
      {children}
    </Box>
  );
};

export default ElevationGrid;
