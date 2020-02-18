# Common

Other uncategorised series of foundational components.

## Usage

### `<UnstyledAnchor />`

This is basically an anchor element with all styling elements removed (incl. hover/focus effects).

```jsx
import { UnstyledAnchor } from '@aksara-ui/core';

export default function Component({ children }) {
  return <UnstyledAnchor>I'm an unstyled link!</UnstyledAnchor>;
}
```

### `<UnstyledButton />`

Same as above, but with the `<button>` tag.

```jsx
import { UnstyledButton } from '@aksara-ui/core';

export default function Component({ children }) {
  return <UnstyledButton>I'm an unstyled button!</UnstyledButton>;
}
```

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
