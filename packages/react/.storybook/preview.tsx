import * as React from 'react';
import { AksaraProvider } from '../src';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'base',
    values: [
      {
        name: 'base',
        value: '#fff',
      },
      {
        name: 'dark',
        value: '#b6b2b2',
      },
    ],
  },
};

export const decorators = [
  Story => (
    <AksaraProvider>
      <Story />
    </AksaraProvider>
  ),
];
