import '@storybook/react';
import * as AddonInfo from '@storybook/addon-info';

declare module '*.svg' {
  const urlToFile: string;
  export default urlToFile;
}

declare module '*.css' {
  const stylesheet: void;
  export default stylesheet;
}

declare module '*.mdx' {
  const MDXComponent: (props) => JSX.Element;
  export const meta: Record<string, any>;
  export default MDXComponent;
}

declare module '@dump247/storybook-state' {
  export class StoryState extends React.Component {}
}

// Type shims for new Storybook 4.0 features
declare module '@storybook/react' {
  interface AddStoryOptions {
    info: string | object;
  }

  interface Story {
    add(kind: string, fn: () => ReactNode, options?: AddStoryOptions): Story;
    addParameters(parameters: any): Story;
  }
}
