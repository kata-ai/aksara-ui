# Portal

Helper component to render elements in a portal.

## Usage

```jsx
import { WicaraProvider, Portal, Box } from '@aksara-ui/core';

export default function MyApp({ children }) {
  return (
    <WicaraProvider>
      <Portal>
        <Box padding="sm" color="grey01" bg="blue06">
          I'm a box inside a portal!
        </Box>
      </Portal>
    </WicaraProvider>
  );
}
```
