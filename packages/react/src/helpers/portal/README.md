# Portal

Helper component to render elements in a portal.

## Usage

```jsx
import { Portal, Box } from '@aksara-ui/react';

export default function MyApp({ children }) {
  return (
    <Portal>
      <Box padding="sm" color="grey01" bg="blue06">
        I'm a box inside a portal!
      </Box>
    </Portal>
  );
}
```
