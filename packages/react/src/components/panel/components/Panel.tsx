import * as React from 'react';
import { Box, BoxProps } from '../../../layout';

export type PanelSizes = 'sm' | 'lg';

export interface PanelProps extends Omit<BoxProps, 'width' | 'maxWidth' | 'backgroundColor'> {
  size?: PanelSizes;
}

const Panel: React.FC<PanelProps> = ({ children, size, ...rest }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      maxWidth={size === 'sm' ? 280 : 400}
      height="100%"
      backgroundColor="grey01"
      {...rest}
    >
      {children}
    </Box>
  );
};

Panel.defaultProps = {
  size: 'sm',
};

export default Panel;
