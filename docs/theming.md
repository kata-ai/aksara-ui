# Theming

> _This section is a candidate for deprecation._

`@kata-kit/theme` contains source code for the Wicara theming framework.

We use `styled-components` for styling our components, which combines the power of CSS-in-JS, as well as the familiarity of regular SCSS, through the power of tagged template literals. This package provides top-level and inner-level style resets, as well as abstractions on top of styled-components, which allows for simpler component theming.

## How Theming Works in Wicara

`styled-components` has its own theming support with the `ThemeProvider` component, however it's quite convoluted when you try to solve global/local theming hierarches.

Therefore, we borrowed some ideas from [Atlaskit](https://atlaskit.atlassian.com/packages/core/theme) and provided a minimal theming API which is based on React's [Context API](https://reactjs.org/docs/context.html).

## Theme Attributes

The default values that can be overridden are as follows:

```ts
export type ThemeAttributes = {
  backgroundColor: string;
  backgroundColorHover?: string;
  backgroundColorActive?: string;
  textColor: string;
  linkColor?: string;
  linkColorHover?: string;
  linkColorActive?: string;
  linkColorOutline?: string;
  borderColor?: string;
  borderColorHover?: string;
  borderColorActive?: string;
  focusOutlineColor?: string;
  headingColor?: string;
  mutedHeadingColor?: string;
  mutedTextColor?: string;
};
```

## Using `<Theme />`

You can easily override the default theme context with a `Theme` component.

```jsx
function ExampleTheme() {
  return (
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
          You can use <code>&lt;Theme /&gt;</code> to modify the theme context.
        </div>
      )}
    </Theme>
  );
}
```

## Using `<ThemedComponent />`

A component can have multiple color states. To make switching between them easier to manage, we provided a `ThemedComponent` component which resolves a theme string with its respective `ThemeAttributes` map.

```jsx
function ExampleThemedComponent() {
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
}
```
