// .storybook/preview.js
import * as React from 'react';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { AksaraProvider, GlobalStyles } from '../src';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    container: ({ children, context }) => (
      <AksaraProvider>
        <GlobalStyles />
        {children}
      </AksaraProvider>
    ),
  },
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
