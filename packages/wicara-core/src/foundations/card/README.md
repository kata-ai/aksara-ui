# Card

Similar to `Box`, but with additional `shadow` and `border` styled-system hooks.

## Usage

The Card contains the same styled-system hooks as `Box`, but with a couple additions:

- border
- shadow

Read the [`styled-system` reference table](https://styled-system.com/table) for more information about these hooks and how they work.

You can use these to compose multiple UI elements into one, for example:

```jsx
import { Box, Card } from '@wicara/core';

export default function Component() {
  return (
    <Card bg="white" borderRadius="md" boxShadow="layer100">
      <img
        alt="Example"
        src="https://picsum.photos/id/873/1072/708"
        style={{
          height: 248,
          objectFit: 'cover',
          width: '100%'
        }}
      />
      <Box padding="sm" flex="1 1 auto">
        <Heading scale="heading3">An Example Card</Heading>
        <Paragraph marginTop="xs" marginBottom={0}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi omnis, reiciendis
          doloremque quisquam sequi vel eaque aperiam vitae facere quia atque, hic, unde animi
          asperiores repudiandae quis ab enim repellat?
        </Paragraph>
      </Box>
    </Card>
  );
}
```
