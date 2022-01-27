# Tag

> Tags are elements that represent a value or attribute.

## Usage

To use this component within your React app, import as follows:

### Basic Example

```jsx
import { Tag } from '@aksara-ui/react';

export default function Component() {
  return <Tag>Keyword item 1</Tag>;
}
```

### Closable

```jsx
import { Tag } from '@aksara-ui/react';

export default function Component() {
  const handleClose = () => {
    //
  };

  return (
    <Tag closable onClose={handleClose}>
      Keyword item 1
    </Tag>
  );
}
```
