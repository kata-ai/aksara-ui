import * as React from 'react';
import { StoryDecorator } from '@storybook/react';

import { WicaraReset } from '../../foundations/reset';

import 'typeface-barlow';

export const StorybookWrapper: StoryDecorator = storyFn => (
  <WicaraReset>{storyFn()}</WicaraReset>
);
