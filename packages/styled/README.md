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

### Base components

Use the `Box` and `Text` base components to use the [styling props](https://styled-system.com/table) provided by `styled-system`.

```tsx
import { Box, Text } from '@wicara/foundations';

const Component = () => (
  <Box bg="kata02" p={8}>
    <Text color="white">
      I'm a white text inside a box with background and padding!
    </Text>
  </Box>
);
```

### Typography

`Text` is a `div` with typography-based styling props injected to the component. You can replace the `div` using styled-components' `as=""` prop, or use the provided helper component.

```tsx
import {
  Text,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Paragraph
} from '@wicara/foundations';

const Component = () => (
  <>
    {/* Using `as` prop */}
    <Text as="h1">h1. Heading</Text>
    <Text as="h2">h2. Heading</Text>
    <Text as="h3">h3. Heading</Text>
    <Text as="h4">h4. Heading</Text>
    <Text as="h5">h5. Heading</Text>
    <Text as="h6">h6. Heading</Text>

    {/* Using helper components */}
    <Heading1>h1. Heading</Heading1>
    <Heading2>h2. Heading</Heading2>
    <Heading3>h3. Heading</Heading3>
    <Heading4>h4. Heading</Heading4>
    <Heading5>h5. Heading</Heading5>
    <Heading6>h6. Heading</Heading6>
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quam nostrum
      veritatis delectus harum accusantium commodi in itaque illo, vitae ratione
      deleniti dolores necessitatibus temporibus dolorem doloribus aperiam aut
      esse?
    </Paragraph>
  </>
);
```
