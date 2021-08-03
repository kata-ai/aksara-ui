import * as React from 'react';
import { Box, BoxProps } from '../../../layout';

export type PanelFooterProps = BoxProps;

const PanelHeader: React.FC<PanelFooterProps> = ({ children, className, style, ...rest }) => {
  return (
    <Box
      className={className}
      style={style}
      display="flex"
      alignItems="center"
      height={64}
      px="lg"
      borderTop="1px solid"
      borderTopColor="grey04"
      {...rest}
    >
      {children}
    </Box>
  );
};

export default PanelHeader;
