import '@storybook/react';
import { RenderFunction } from '@storybook/react';
import * as React from 'react';
import * as AddonInfo from '@storybook/addon-info';

// Type shims for new Storybook 4.0 features
declare module '@storybook/react' {
  export interface AddStoryOptions {
    info: string | object;
  }

  export interface Story {
    add(
      storyName: string,
      callback: RenderFunction,
      options?: AddStoryOptions
    ): this;
    addParameters(parameters: any): this;
  }
}

declare module '*.svg' {
  const urlToFile: string;
  export default urlToFile;
}

declare module '*.css' {
  const stylesheet: void;
  export default stylesheet;
}

declare module '*.md';
declare module '*.mdx';
