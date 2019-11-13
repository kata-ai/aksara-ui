import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { WicaraReset } from '../../foundations/reset';
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

export const StorybookWrapper = (storyFn: () => any) => (
  <WicaraReset>
    <StorybookGlobal />
    <StoryWrapperRoot>{storyFn()}</StoryWrapperRoot>
  </WicaraReset>
);
