# Portal

Helper component to render elements in a portal.

## Usage

```jsx
import { WicaraReset, Portal, Box } from '@wicara/core';

export default function MyApp({ children }) {
  return (
    <WicaraReset>
      <Portal>
        <Box padding="sm" color="grey01" bg="blue06">
          I'm a box inside a portal!
        </Box>
      </Portal>
    </WicaraReset>
  );
}
```
