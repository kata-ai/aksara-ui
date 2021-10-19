import * as React from 'react';
import { Box, BoxProps } from '../../layout';
import { useComponentStyles } from '../../system';

export type StickVariant = 'stick' | 'stand';

export interface StickSubHeaderProps extends BoxProps {
  label: React.ReactNode;
  actions?: React.ReactNode;
  variant: StickVariant;
}

const SubHeader: React.FC<StickSubHeaderProps> = ({ label, actions, variant }) => {
  const subHeaderStyle = useComponentStyles('subHeaderBase', { variant });
  return (
    <Box sx={subHeaderStyle}>
      <Box display={['block', 'flex']} alignItems={[null, 'center']} justifyContent={[null, 'space-between']}>
        <Box flex="1 1 0%" minWidth={0}>
          {label}
        </Box>
        <Box marginTop={['md', 0]} marginLeft={[0, 'md']}>
          {actions}
        </Box>
      </Box>
    </Box>
  );
};

export default SubHeader;
