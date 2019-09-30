import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { StoryDecorator } from '@storybook/react';

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

export const StorybookWrapper: StoryDecorator = storyFn => (
  <WicaraReset>
    <StorybookGlobal />
    <StoryWrapperRoot>{storyFn()}</StoryWrapperRoot>
  </WicaraReset>
);
