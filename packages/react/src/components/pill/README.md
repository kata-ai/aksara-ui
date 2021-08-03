# Pill

> Pills are elements that represent a value or attribute.

## Usage

To use this component within your React app, import as follows:

### Basic Example

```jsx
import { Pill } from '@aksara-ui/react';

export default function Component() {
  return <Pill>Keyword item 1</Pill>;
}
```

### Closable

```jsx
import { Pill } from '@aksara-ui/react';

export default function Component() {
  const handleClose = () => {
    //
  };

  return (
    <Pill closable onClose={handleClose}>
      Keyword item 1
    </Pill>
  );
}
```
