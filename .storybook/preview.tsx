import * as React from 'react';
import { AksaraProvider } from '../packages/aksara-ui-core/src';

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
