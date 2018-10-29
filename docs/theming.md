# Theming

`@kata-kit/theme` contains source code for the kata-kit theming framework.

We use `styled-components` for styling our components, which combines the power of CSS-in-JS, as well as the familiarity of regular SCSS, through the power of tagged template literals. This package provides top-level and inner-level style resets, as well as abstractions on top of styled-components, which allows for simpler component theming.

## How Theming Works in `kata-kit`

`styled-components` has its own theming support with the `ThemeProvider` component, however it's quite convoluted when you try to solve global/local theming hierarches.

Therefore, we borrowed some ideas from [Atlaskit](https://atlaskit.atlassian.com/packages/core/theme) and provided a minimal theming API which is based on React's [Context API](https://reactjs.org/docs/context.html).

## Resetting Styles

The `KataReset` component applies CSS resets to all of its descendant nodes.

```jsx
import { KataReset } from '@kata-kit/theme';

export default () => <KataReset>This is the default reset.</KataReset>;
```

Inside the `KataReset` component is the `Consumer` of `ThemeContext`. Here we can easily override the default theme with a `Theme` component.

```jsx
import { Theme, KataReset } from '@kata-kit/theme';

export default () => (
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
);
```

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

## Using `<ThemedComponent />`

A component can have multiple color states. To make switching between them easier to manage, we provided a `ThemedComponent` component which resolves a theme string with its respective `ThemeAttributes` map.

You can see this theming method in action either the `Button` or `Badge` component.
