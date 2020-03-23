# Reset

> Provides necessary CSS resets to use Aksara UI components.

## Usage

Wrap your app inside the `WicaraProvider` to use the resets and `ThemeProvider` component provided by Aksara UI. Then import the `GlobalStyles` component to import the global styles that we use.

```jsx
import { AksaraProvider, GlobalStyles } from '@aksara-ui/core';

export default function MyApp({ children }) {
  return (
    <AksaraProvider>
      <GlobalStyles />
      {children}
    </AksaraProvider>
  );
}
```
