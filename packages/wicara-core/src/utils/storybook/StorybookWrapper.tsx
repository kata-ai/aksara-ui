import * as React from 'react';
import styled from 'styled-components';

import { WicaraProvider } from '../../foundations/reset';
import { space } from '../variables';

import '../../../../wicara-fonts/kata-icons.css';
import '../../../../wicara-fonts/museo-sans-rounded.css';
import StorybookGlobal from './StorybookGlobal';

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
