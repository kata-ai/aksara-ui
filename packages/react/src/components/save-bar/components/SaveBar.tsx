import * as React from 'react';
import { Box, BoxProps } from '../../../layout';
import { Text } from '../../../typography';
import { useComponentStyles } from '../../../system';

export interface SaveBarProps extends BoxProps {
  /** set label of savebar  */
  label: string;
  /** set icon of savebar  */
  icon?: React.ReactNode;
  /** render actions */
  actions: React.ReactNode;
  /** Set max width of content */
  maxWidth: string | number;
}
const SaveBar: React.FC<SaveBarProps> = ({ label, icon, actions, maxWidth, sx, ...rest }) => {
  const savebarStyle = useComponentStyles('saveBarBase');
  return (
    <Box sx={{ ...savebarStyle, ...sx }} {...rest}>
      <Box position="absolute" left="24px">
        {icon}
      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-between" width="100%" maxWidth={maxWidth}>
        <Text color="greylight01" scale={400}>
          {label}
        </Text>
        <Box>{actions}</Box>
      </Box>
    </Box>
  );
};

export default SaveBar;
