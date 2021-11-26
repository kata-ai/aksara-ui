# Toast

> Displays toast notification to show feedback to dynamic data.

## Usage

To use this component in your app, import as follows:

```tsx
import { useToast } from '@aksara-ui/react';

export default function Component() {
  const { addToast } = useToast();

  return <button onClick={() => addToast({ message: 'This is a toast!' })}>Show toast</button>;
}
```

## API

TBA
