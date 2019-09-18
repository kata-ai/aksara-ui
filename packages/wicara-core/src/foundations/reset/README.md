# Reset

Provides necessary CSS resets to use Aksara UI Kit.

## Usage

Wrap your app inside the `AksaraReset` to use the resets and `ThemeProvider` component provided by Aksara UI Kit.

```jsx
import { AksaraReset } from '@aksara/ui-kit';

export default function MyApp({ children }) {
  return <AksaraReset>{children}</AksaraReset>;
}
```

You can also use `GlobalStyles` as a standalone component which injects the base styles into the component.

```jsx
import { GlobalStyles, Theme } from '@aksara/ui-kit';

export default function MyApp({ children }) {
  return (
    <Theme>
      <GlobalStyles />
      {children}
    </Theme>
  );
}
```
