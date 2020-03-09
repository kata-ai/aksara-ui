# Box

Box is a primitive element with all `styled-system` hooks attached to it.

## Usage

Box contains the following styled-system hooks:

- layout
- position
- flexbox
- grid
- space
- background
- color
- typography

Read the [`styled-system` reference table](https://styled-system.com/table) for more information about these hooks and how they work.

In general, this is how you compose an element with the `Box` primitive.

```jsx
import { Box } from '@aksara-ui/core';

export default function Component() {
  return (
    <Box padding="sm" color="grey01" bg="blue06">
      I&apos;m inside a box!
    </Box>
  );
}
```

Note that there's no `border` or `shadow` hooks placed in this component. That's because you will have to use the `Card` primitive to enable borders + box-shadows.
