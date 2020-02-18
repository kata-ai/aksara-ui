# Skeleton

> Renders a loading state that mimics the wrapping component.

## Usage

To use this component in your app, import as follows:

### `<Skeleton />`

```jsx
import { Box, Skeleton } from '@wicara/core';

export default function Component({ isLoading }) {
  return <Box>{isLoading ? <Skeleton /> : <LoadedContent />}</Box>;
}
```

See more usage in the _JSX_ panel

### `<SkeletonBox />`

```jsx
import { SkeletonBox } from '@wicara/core';

export default function Component({ isLoading }) {
  if (isLoading) {
    return <SkeletonBox style={{ height: 200 }} />;
  }

  return <LoadedComponent />;
}
```

See more usage in the _JSX_ panel
