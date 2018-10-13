import * as React from 'react';
import { setAddon, storiesOf, StoryDecorator } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

import RootWrapper from '../../../.storybook/components/Wrapper';

import ThemedComponent, { KataReset, Theme, variables } from '../src';

setAddon(JSXAddon);

const StoryWrapper: StoryDecorator = storyFn => (
  <RootWrapper noPadding>{storyFn()}</RootWrapper>
);

const story = storiesOf('Components/Theme', module).addDecorator(StoryWrapper);

story.addWithJSX('Reset', () => (
  <KataReset>This is the default reset.</KataReset>
));

story.addWithJSX('Themed Reset', () => (
  <Theme
    values={{
      backgroundColor: variables.colors.gray80,
      textColor: variables.colors.gray20
    }}
  >
    {innerTheme => (
      <KataReset {...innerTheme} style={{ padding: '8px 16px' }}>
        A reset can be themed.
      </KataReset>
    )}
  </Theme>
));

story.addWithJSX('ThemedComponent', () => {
  const themes = {
    defaultTheme: {
      backgroundColor: variables.colors.softKataBlue,
      textColor: variables.colors.gray70
    },
    red: {
      backgroundColor: variables.colors.red,
      textColor: variables.colors.white
    }
  };

  return (
    <div>
      <ThemedComponent color="defaultTheme" themes={themes}>
        {innerTheme => (
          <div
            style={{
              marginBottom: '8px',
              padding: '8px 16px',
              color: innerTheme.textColor,
              backgroundColor: innerTheme.backgroundColor
            }}
          >
            This example shows application of ThemedComponent on a `style` prop
            inside a div.
          </div>
        )}
      </ThemedComponent>
      <ThemedComponent color="red" themes={themes}>
        {innerTheme => (
          <div
            style={{
              padding: '8px 16px',
              color: innerTheme.textColor,
              backgroundColor: innerTheme.backgroundColor
            }}
          >
            You can, of course, include these as a theme prop in your
            `styled-components`.
          </div>
        )}
      </ThemedComponent>
    </div>
  );
});
