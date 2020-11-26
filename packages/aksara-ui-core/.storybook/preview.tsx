// .storybook/preview.js
import * as React from 'react';
import { Title, Subtitle, Description, Primary, ArgsTable, Stories, PRIMARY_STORY } from '@storybook/addon-docs/blocks';
import { AksaraProvider, GlobalStyles } from '../src';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

// .storybook/preview.js

export const decorators = [
  Story => (
    <AksaraProvider>
      <GlobalStyles />
      <Story />
    </AksaraProvider>
  ),
];
