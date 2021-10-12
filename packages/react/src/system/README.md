# @aksara-ui/system

Base library for extending themes/styles in aksara-ui.

This documentation is a work in progress. Bear with us.

## Implementation model

`aksara-ui`'s System API is heavily inspired by `chakra-ui`'s [Component Style API](https://chakra-ui.com/docs/theming/component-style). Read their docs to understand more on how they work.

## Component styles

### Theme config

The theme config for styling a component is as follows:

```tsx
export type ComponentThemeConfig<Props = Record<string, any>> = {
  propToScaleMap?: Array<[string, string]>;
  baseStyle?: ComponentThemeScale<Props>;
  scales?: {
    [scale: string]: {
      [key: string]: ComponentThemeScale<Props> | undefined;
    };
  };
};
```

```tsx
export default {
  // Base styles of the component
  baseStyle: {},
  propToStyleMap: [],
  scales: {},
};
```

### API reference

#### useComponentStyles

Hook for resolving a component's styles. The result of which can then be passed to the `sx` prop.

```ts
const styles = useComponentStyles(componentKey, props);
```

Parameters:

- `componentKey`: the key in the `theme.componentStyles` object that corresponds to the component.
- `props`: any props used to compute the component styles. This is usually `size` or `variant`, but can be added to include more properties as defined by the component's `propToScaleMap`.

#### componentStylesMixin

Parser for resolving a component's styles. This can be used to directly inject component styles to any styled component. All props passed to the styled component will also be passed into `componentStylesMixin`.

```ts
import styled from 'styled-components';

const Component = styled('div')(componentStylesMixin('componentKey'));
```

Parameters:

- `componentKey`: the key in the `theme.componentStyles` object that corresponds to the component.
