import * as React from 'react';
import { Box, BoxProps } from '../../layout';
import { Heading } from '../../typography';

export interface PageHeaderProps extends BoxProps {
  title: string;
  backButton?: React.ReactNode;
  actions?: React.ReactNode;
  children?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, actions, backButton, children }) => {
  return (
    <Box display={['block', 'flex']} flexDirection="column">
      <Box display={['block', 'flex']} alignItems={[null, 'center']} justifyContent={[null, 'space-between']}>
        {backButton && (
          <Box marginRight={[0, 'md']} marginBottom={['xs', 0]}>
            {backButton}
          </Box>
        )}
        <Box flex="1 1 0%" minWidth={0}>
          <Heading scale={600} fontWeight={700} overflow="hidden" textOverflow="wllipsis" whiteSpace="nowrap">
            {title}
          </Heading>
        </Box>
        {actions && (
          <Box marginTop={['md', 0]} marginLeft={[0, 'md']}>
            {actions}
          </Box>
        )}
      </Box>
      {children}
    </Box>
  );
};

export default PageHeader;
