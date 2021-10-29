# Visually Hidden

Hide text content while still being readable by screen reader.

## Usage

```jsx
import { VisuallyHidden } from '@aksara-ui/react';

export default function MyApp({ children }) {
  return (
    <button type="button">
      <span aria-hidden>⚙</span>
      <VisuallyHidden>Settings</VisuallyHidden>
    </button>
  );
}
```
