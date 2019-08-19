import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import RootWrapper from '../../../.storybook/components/Wrapper';
import { KataReset } from '../../reset/src';

import ThemedComponent, { Theme, variables } from './index';

const readme = require('../README.md');

const StoryWrapper: StoryDecorator = storyFn => (
  <RootWrapper noPadding>{storyFn()}</RootWrapper>
);

storiesOf('Components|Theme', module)
  .addDecorator(StoryWrapper)
  .add(
    '<KataReset />',
    () => (
      <KataReset style={{ padding: '8px 16px' }}>
        This is the default reset.
      </KataReset>
    ),
    {
      notes: {
        markdown: readme
      }
    }
  )
  .add(
    '<Theme />',
    () => (
      <Theme
        values={{
          backgroundColor: variables.colors.gray80,
          textColor: variables.colors.gray20
        }}
      >
        {innerTheme => (
          <div
            style={{
              padding: '8px 16px',
              backgroundColor: innerTheme.backgroundColor,
              color: innerTheme.textColor
            }}
          >
            You can use <code>&lt;Theme /&gt;</code> to modify the theme
            context.
          </div>
        )}
      </Theme>
    ),
    {
      notes: {
        markdown: readme
      }
    }
  )
  .add(
    '<ThemedComponent />',
    () => {
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
                This example shows application of ThemedComponent on a `style`
                prop inside a div.
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
    },
    {
      notes: {
        markdown: readme
      }
    }
  );
