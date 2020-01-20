import * as React from 'react';
import { Box } from '../../foundations';
import StoryContainer from './StoryContainer';

const SystemContainer: React.FC = ({ children }) => (
  <Box px="lg" pb="lg" pt="xxl">
    <StoryContainer>{children}</StoryContainer>
  </Box>
);

SystemContainer.displayName = 'SystemContainer';

export default SystemContainer;
