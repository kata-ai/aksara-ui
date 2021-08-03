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
import { Box } from '@aksara-ui/react';

export default function Component() {
  return (
    <Box padding="sm" color="grey01" bg="blue06">
      I&apos;m inside a box!
    </Box>
  );
}
```

Note that there's no `border` or `shadow` hooks placed in this component. That's because you will have to use the `Card` primitive to enable borders + box-shadows.

### Pseudo elements

You can also set pseudo elements through props, e.g.

```jsx
import { Box } from '@aksara-ui/react';

export default function Component() {
  return (
    <Box padding="sm" color="grey09" backgroundColor="grey01" _hover={{ backgroundColor: 'blue01' }}>
      I&apos;m inside a box!
    </Box>
  );
}
```

This will set the box to have a colour of `blue01` _only_ when the element is hovered. All props are adapted from `chakra-ui`'s [pseudo props](https://chakra-ui.com/docs/features/style-props#pseudo)

### `sx` prop

You can also use the `sx` prop to add any valid CSS to an element, and use system tokens to ensure consistency.

_Note that while this prop is considered an escape hatch, there are few cases where it is needed._

```jsx
import { Box, Heading } from '@aksara-ui/react';

export default function Component() {
  return <Box as="img" src="" sx={{ filter: 'blur(8px)' }} />;
}
```

```jsx
import { Box, Heading } from '@aksara-ui/react';

export default function Component() {
  return (
    <Box sx={{ '--heading-color': '#0070f3' }}>
      <Heading color="var(--heading-color)" scale={800}>
        This heading is styled using CSS variables!
      </Heading>
    </Box>
  );
}
```
