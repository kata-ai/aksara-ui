import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { WicaraProvider } from '../../foundations/reset';
import { space, colors } from '../variables';

import '../../../../wicara-fonts/kata-icons.css';
import '../../../../wicara-fonts/museo-sans-rounded.css';

const StorybookGlobal = createGlobalStyle`
  body {
    background-color: ${colors.white};
  }
`;

const StoryWrapperRoot = styled('div')`
  padding: ${space.lg}px;
`;

StoryWrapperRoot.displayName = 'StoryWrapperRoot';

const StorybookWrapper = (storyFn: () => any) => (
  <WicaraProvider>
    <StorybookGlobal />
    <StoryWrapperRoot>{storyFn()}</StoryWrapperRoot>
  </WicaraProvider>
);

export default StorybookWrapper;
