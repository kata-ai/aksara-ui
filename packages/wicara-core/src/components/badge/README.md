# Badge

> Badge text for entity, status, etc.

## Usage

To use this component within your React app, import as follows:

```jsx
import { Badge } from '@wicara/core';

const Component = () => <Badge variant="default" message="text" />;
```

See more usage in the _JSX_ panel

## Props

| Property  | Type                                                             | Required | Default     |
| --------- | ---------------------------------------------------------------- | -------- | ----------- |
| variant   | `'primary'`, `'secondary'`, `'success'`, `'warning'`, `'danger'` | -        | -           |
| className | `string`                                                         | -        | `undefined` |
| style     | `React.CSSProperties`                                            | -        | `undefined` |
