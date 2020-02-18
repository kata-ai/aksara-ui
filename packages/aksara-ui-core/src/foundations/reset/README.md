# Reset

> Provides necessary CSS resets to use Wicara components.

## Usage

Wrap your app inside the `WicaraProvider` to use the resets and `ThemeProvider` component provided by Wicara.

```jsx
import { WicaraProvider } from '@aksara-ui/core';

export default function MyApp({ children }) {
  return <WicaraProvider>{children}</WicaraProvider>;
}
```

You can also use `GlobalStyles` as a standalone component which injects the base styles into the component.

```jsx
import { GlobalStyles, Theme } from '@aksara-ui/core';

export default function MyApp({ children }) {
  return (
    <Theme>
      <GlobalStyles />
      {children}
    </Theme>
  );
}
```
