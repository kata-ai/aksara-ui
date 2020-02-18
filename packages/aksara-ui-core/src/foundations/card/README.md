# Card

Renders a card based on the elevation level.

## Usage

To use this component in your app, import as follows:

```jsx
import { Box, Card } from '@wicara/core';

export default function Component() {
  return (
    <Card elevation={1}>
      <img
        alt="Example"
        src="https://picsum.photos/id/873/1072/708"
        style={{
          height: 248,
          objectFit: 'cover',
          width: '100%',
        }}
      />
      <Box padding="sm" flex="1 1 auto">
        <Heading scale={500}>An Example Card</Heading>
        <Paragraph marginTop="xs" marginBottom={0}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi omnis, reiciendis doloremque quisquam sequi
          vel eaque aperiam vitae facere quia atque, hic, unde animi asperiores repudiandae quis ab enim repellat?
        </Paragraph>
      </Box>
    </Card>
  );
}
```

This component composes the `Box` component, so you can also use the styled-system hooks defined in said component

```jsx
import { Box, Card } from '@wicara/core';

// Example for card with `sm` border radius.
export default function Component({ children }) {
  return (
    <Card elevation={1} borderRadius="sm">
      {children}
    </Card>
  );
}
```
