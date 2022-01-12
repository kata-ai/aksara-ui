import * as React from 'react';
import { Box, BoxProps } from '../../../layout';
import { Text } from '../../../typography';
import { useComponentStyles } from '../../../system';
import { Portal } from '../../../helpers';

export interface SaveBarProps extends BoxProps {
  /** set label of savebar  */
  label: string;
  /** set icon of savebar  */
  icon?: React.ReactNode;
  /** render actions */
  actions: React.ReactNode;
  /** Set max width of content */
  maxWidth: string | number;
  /**  */
  isShow: boolean;
}
const SaveBar: React.FC<SaveBarProps> = ({ label, icon, actions, maxWidth, sx, isShow, ...rest }) => {
  const savebarStyle = useComponentStyles('saveBarBase');
  return (
    <Portal>
      {isShow && (
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
      )}
    </Portal>
  );
};

export default SaveBar;
