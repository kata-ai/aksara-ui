# Reset

Provides necessary CSS resets to use Aksara UI Kit.

## Usage

Wrap your app inside the `AksaraReset` to use the resets provided by Aksara UI Kit.

```jsx
import { AksaraReset } from '@aksara/ui-kit';

export default function MyApp({ children }) {
  return <KataReset>{children}</KataReset>;
}
```

You can also use `GlobalStyles` as a standalone component which injects the base styles into the component.

```jsx
import { GlobalStyles } from '@aksara/ui-kit';

export default function MyApp({ children }) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
}
```
