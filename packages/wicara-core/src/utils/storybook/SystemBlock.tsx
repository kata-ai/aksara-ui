import * as React from 'react';
import SystemHeader from './SystemHeader';
import SystemContainer from './SystemContainer';
import { Box } from '../../foundations';

interface SystemBlockProps {
  title: string;
  subtitle?: React.ReactNode;
  noBackground?: boolean;
}

const SystemBlock: React.FC<SystemBlockProps> = ({ children, title, subtitle, noBackground }) => (
  <Box display="flex" flexDirection="column" position="relative" width="100%" height="100%" minHeight="100%">
    <SystemHeader title={title} subtitle={subtitle} />
    <SystemContainer noBackground={noBackground}>{children}</SystemContainer>
  </Box>
);

SystemBlock.displayName = 'SystemBlock';

export default SystemBlock;
