# Common

Other uncategorised series of foundational components.

## Usage

### `<Stack />`

Use the `<Stack />` component to evenly space inner elements vertically.

```jsx
import { Stack } from '@aksara-ui/core';

export default function Component({ children }) {
  return (
    <Stack>
      <Box>example</Box>
      <Box>example</Box>
      <Box>example</Box>
    </Stack>
  );
}
```

### `<Inline />`

Use the `<Inline />` component to evenly space inner elements horizontally.

```jsx
import { Inline } from '@aksara-ui/core';

export default function Component({ children }) {
  return (
    <Inline>
      <Box>example</Box>
      <Box>example</Box>
      <Box>example</Box>
    </Inline>
  );
}
```
