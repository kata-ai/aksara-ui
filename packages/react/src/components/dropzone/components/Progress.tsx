import React from 'react';
import { Box } from '../../../layout';
import { theme } from '../../../theme';

interface ProgressProps {
  percentage: number;
}

const Progress: React.FC<ProgressProps> = ({ percentage }) => {
  return (
    <Box width="70%" margin="0 auto">
      <Box borderRadius={12} height={8} backgroundColor={theme.colors.greylight03} />
      <Box mt={-8} width={`${percentage}%`} borderRadius={12} height={8} backgroundColor={theme.colors.blue07} />
    </Box>
  );
};

export default Progress;
