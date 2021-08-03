import * as React from 'react';
import { AksaraProvider } from '../src';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  Story => (
    <AksaraProvider>
      <Story />
    </AksaraProvider>
  ),
];
