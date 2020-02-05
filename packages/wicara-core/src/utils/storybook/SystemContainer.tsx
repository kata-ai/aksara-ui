import * as React from 'react';
import { Box } from '../../foundations';
import StoryContainer from './StoryContainer';

interface SystemContainerProps {
  noBackground?: boolean;
}

const SystemContainer: React.FC<SystemContainerProps> = ({ children, noBackground = false }) => (
  <Box px="lg" pb="lg" pt="xxl" backgroundColor={!noBackground ? 'white' : undefined}>
    <StoryContainer>{children}</StoryContainer>
  </Box>
);

SystemContainer.displayName = 'SystemContainer';

export default SystemContainer;
