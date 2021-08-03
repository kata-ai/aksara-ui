# Aksara Provider

> Provides necessary resets to use aksara-ui.

## Usage

Wrap your entire app with `AksaraProvider`. This will apply the theme provider as well as the default global styles.

```jsx
import { AksaraProvider } from '@aksara-ui/react';

export default function MyApp({ children }) {
  return <AksaraProvider>{children}</AksaraProvider>;
}
```

If you would like to use additional styles for `AksaraProvider`, add the `disableInjection` prop to `AksaraProvider` and add your custom styles as follows.

```jsx
import { css } from 'styled-components';
import { AksaraProvider, injectGlobalStyles } from '@aksara-ui/react';

const styles = css`
  [data-reach-tooltip] {
    z-index: 1;
    pointer-events: none;
    position: absolute;
    padding: 0.25em 0.5em;
    box-shadow: 2px 2px 10px hsla(0, 0%, 0%, 0.1);
    white-space: nowrap;
    font-size: 85%;
    background: #f0f0f0;
    color: #444;
    border: solid 1px #ccc;
  }
`;

const { GlobalStyles } = injectGlobalStyles(styles);

export default function MyApp({ children }) {
  return (
    <AksaraProvider disableInjection>
      <GlobalStyles />
      {children}
    </AksaraProvider>
  );
}
```

Once you've applied the provider, you can use Aksara UI components in your app.
