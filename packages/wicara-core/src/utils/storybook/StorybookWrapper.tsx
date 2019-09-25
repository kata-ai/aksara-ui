import * as React from 'react';
import { StoryDecorator } from '@storybook/react';

import { WicaraReset } from '../../foundations/reset';

export const StorybookWrapper: StoryDecorator = storyFn => (
  <WicaraReset>{storyFn()}</WicaraReset>
);
