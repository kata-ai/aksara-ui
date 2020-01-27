import * as React from 'react';
import SystemHeader from './SystemHeader';
import SystemContainer from './SystemContainer';

interface SystemBlockProps {
  title: string;
  subtitle?: React.ReactNode;
}

const SystemBlock: React.FC<SystemBlockProps> = ({ children, title, subtitle }) => (
  <>
    <SystemHeader title={title} subtitle={subtitle} />
    <SystemContainer>{children}</SystemContainer>
  </>
);

SystemBlock.displayName = 'SystemBlock';

export default SystemBlock;
