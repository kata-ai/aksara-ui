import * as React from 'react';
import { Box, BoxProps } from '../../../layout';
import { Heading } from '../../../typography';

export interface PanelHeaderProps extends BoxProps {
  title?: string;
}

const PanelHeader: React.FC<PanelHeaderProps> = ({ children, className, style, title, ...rest }) => {
  return (
    <Box
      className={className}
      style={style}
      display="flex"
      alignItems="center"
      height={64}
      px="lg"
      borderBottom="1px solid"
      borderBottomColor="grey04"
      {...rest}
    >
      {title ? <Heading scale={300}>{title}</Heading> : children}
    </Box>
  );
};

export default PanelHeader;
