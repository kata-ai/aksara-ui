# Wrap

Wrap spaces its child elements evenly, as well as wraps them automatically if no more elements can be fit in the same row.

## Usage

To use this component within your app, import as follows:

```jsx
import { Wrap, Badge } from '@aksara-ui/react';

export default function Component() {
  return (
    <Wrap spacing="xs">
      <WrapItem><Badge>item 1</Badge></WrapItem>
      <WrapItem><Badge>item 2</Badge></WrapItem>
      <WrapItem><Badge>item 3</Badge></WrapItem>
    </Wrap>
  );
}
```
