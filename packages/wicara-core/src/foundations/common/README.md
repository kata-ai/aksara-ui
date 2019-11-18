# Common

Other uncategorised series of foundational components.

## Usage

### `<UnstyledAnchor />`

This is basically an anchor element with all styling elements removed (incl. hover/focus effects).

```jsx
import { UnstyledAnchor } from '@aksara/ui-kit';

export default function Component({ children }) {
  return <UnstyledAnchor>I'm an unstyled link!</UnstyledAnchor>;
}
```

### `<UnstyledButton />`

Same as above, but with the `<button>` tag.

```jsx
import { UnstyledButton } from '@aksara/ui-kit';

export default function Component({ children }) {
  return <UnstyledButton>I'm an unstyled button!</UnstyledButton>;
}
```
