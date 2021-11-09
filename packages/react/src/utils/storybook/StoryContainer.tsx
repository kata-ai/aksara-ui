import * as React from 'react';
import styled from 'styled-components';

const StoryContainerRoot = styled('div')`
  margin: 0 auto;
  width: 100%;
  max-width: 1116px;
`;

const StoryContainer: React.FC = ({ children }) => <StoryContainerRoot>{children}</StoryContainerRoot>;

export default StoryContainer;
