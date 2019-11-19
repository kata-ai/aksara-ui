# Common

Other uncategorised series of foundational components.

## Usage

### `<UnstyledAnchor />`

This is basically an anchor element with all styling elements removed (incl. hover/focus effects).

```jsx
import { UnstyledAnchor } from '@wicara/core';

export default function Component({ children }) {
  return <UnstyledAnchor>I'm an unstyled link!</UnstyledAnchor>;
}
```

### `<UnstyledButton />`

Same as above, but with the `<button>` tag.

```jsx
import { UnstyledButton } from '@wicara/core';

export default function Component({ children }) {
  return <UnstyledButton>I'm an unstyled button!</UnstyledButton>;
}
```
