import * as React from 'react';
import { AksaraProvider, GlobalStyles } from '../src';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  Story => (
    <AksaraProvider>
      <GlobalStyles />
      <Story />
    </AksaraProvider>
  ),
];
