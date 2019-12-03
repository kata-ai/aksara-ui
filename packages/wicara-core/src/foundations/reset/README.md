# Reset

> Provides necessary CSS resets to use Wicara components.

## Usage

Wrap your app inside the `WicaraReset` to use the resets and `ThemeProvider` component provided by Wicara.

```jsx
import { WicaraReset } from '@wicara/core';

export default function MyApp({ children }) {
  return <WicaraReset>{children}</WicaraReset>;
}
```

You can also use `GlobalStyles` as a standalone component which injects the base styles into the component.

```jsx
import { GlobalStyles, Theme } from '@wicara/core';

export default function MyApp({ children }) {
  return (
    <Theme>
      <GlobalStyles />
      {children}
    </Theme>
  );
}
```
