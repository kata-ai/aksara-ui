import * as React from 'react';
import SystemHeader from './SystemHeader';
import SystemContainer from './SystemContainer';

interface SystemBlockProps {
  title: string;
  subtitle?: React.ReactNode;
  noBackground?: boolean;
}

const SystemBlock: React.FC<SystemBlockProps> = ({ children, title, subtitle, noBackground }) => (
  <>
    <SystemHeader title={title} subtitle={subtitle} />
    <SystemContainer noBackground={noBackground}>{children}</SystemContainer>
  </>
);

SystemBlock.displayName = 'SystemBlock';

export default SystemBlock;
