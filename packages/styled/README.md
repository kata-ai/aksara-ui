# @wicara/styled

> Theming, primitived, and base styled-components theming interface for Wicara.

## Install

```sh
# yarn
yarn add @wicara/styled
# npm
npm install @wicara/styled
```

## Usage

### WicaraThemeProvider

`WicaraThemeProvider` injects default themes for the `styled-system` style props.

```tsx
import { WicaraThemeProvider, Text } from '@wicara/styled';

const Component = () => (
  <WicaraThemeProvider>
    <Text color="kata02">I can now have the `kata02` color!</Text>
  </WicaraThemeProvider>
);
```
