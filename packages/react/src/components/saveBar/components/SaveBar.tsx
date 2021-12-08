import * as React from 'react';
import { Box, BoxProps } from '../../../layout';
import { Text } from '../../../typography';
import { useComponentStyles } from '../../../system';

export interface SaveBarProps extends BoxProps {
  label: string;
  actions: React.ReactNode;
}
const SaveBar: React.FC<SaveBarProps> = ({ label, actions, maxWidth, sx, ...rest }) => {
  const savebarStyle = useComponentStyles('saveBarBase');
  return (
    <Box sx={{ ...savebarStyle, ...sx }} {...rest}>
      <Box display="flex" justifyContent="space-between" maxWidth={maxWidth}>
        <Text scale={400}>{label}</Text>
        <Box>{actions}</Box>
      </Box>
    </Box>
  );
};

export default SaveBar;
