import * as React from 'react';
import { Box, BoxProps } from '../../layout';

export interface PageHeaderProps extends BoxProps {
  className?: string;
  style?: React.CSSProperties;
}

const PageHeader = () => {
  return <Box>PageHeader</Box>;
};

export default PageHeader;
