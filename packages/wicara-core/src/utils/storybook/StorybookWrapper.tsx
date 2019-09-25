import * as React from 'react';
import styled from 'styled-components';
import { StoryDecorator } from '@storybook/react';

import { WicaraReset } from '../../foundations/reset';
import { space } from '../variables';

const StoryWrapperRoot = styled('div')`
  padding: ${space.lg}px;
`;

export const StorybookWrapper: StoryDecorator = storyFn => (
  <WicaraReset>
    <StoryWrapperRoot>{storyFn()}</StoryWrapperRoot>
  </WicaraReset>
);
