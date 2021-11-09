import * as React from 'react';
import { Box } from '../../layout';

const ElevationGrid: React.FC = ({ children }) => {
  return (
    <Box
      mt="md"
      mb="xl"
      p="xxl"
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(calc(1116px / 3 - 24px), 1fr))"
      gridGap="24px"
      backgroundColor="grey02"
    >
      {children}
    </Box>
  );
};

export default ElevationGrid;
