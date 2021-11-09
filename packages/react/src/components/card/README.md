# Card

Renders a card based on the elevation level.

## Usage

### `<Card />`

To use this component in your app, import as follows:

```jsx
import { Box, Card } from '@aksara-ui/react';

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
import { Box, Card } from '@aksara-ui/react';

// Example for card with `sm` border radius.
export default function Component({ children }) {
  return (
    <Card elevation={1} borderRadius="sm">
      {children}
    </Card>
  );
}
```

### `<InteractiveCard />`

To use this component in your app, import as follows:

```tsx
import { InteractiveCard, Box, Text, Heading } from '@aksara-ui/react';

export default function Component() {
  return (
    <InteractiveCard>
      <Box p="lg">
        <Heading scale={400}>Deno</Heading>
      </Box>
      <Box p="lg" pt={0}>
        <Text scale={200} color="grey07">
          A secure runtime for JavaScript and TypeScript
        </Text>
      </Box>
    </InteractiveCard>
  );
}
```

#### Props

| Property | Type            | Required | Default   | Description                                     |
| -------- | --------------- | -------- | --------- | ----------------------------------------------- |
| actions  | React.ReactNode | -        | undefined | Additional action buttons that appear on hover. |
| image    | string          | -        | undefined | Any image to add to the card.                   |
| imageAlt | string          | -        | undefined | Alt text to the card image.                     |
