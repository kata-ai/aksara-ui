import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { WicaraReset } from '../../foundations/reset';
import { space, colors } from '../variables';

import '../../../../fonts/kata-icons.css';
import '../../../../fonts/museo-sans-rounded.css';

const StorybookGlobal = createGlobalStyle`
  body {
    background-color: ${colors.white};
  }
`;

const StoryWrapperRoot = styled('div')`
  padding: ${space.lg}px;
`;

StoryWrapperRoot.displayName = 'StoryWrapperRoot';

export const StorybookWrapper = (storyFn: () => any) => (
  <WicaraReset>
    <StorybookGlobal />
    <StoryWrapperRoot>{storyFn()}</StoryWrapperRoot>
  </WicaraReset>
);
