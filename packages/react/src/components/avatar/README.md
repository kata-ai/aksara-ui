# Avatar

> Resizable avatar component.

## Usage

To use this component within your React app, import as follows:

```jsx
import { Avatar } from '@aksara-ui/react';

export default function MyApp({ children }) {
  return <Avatar src="path/to/image" />;
}
```

Avatar also accepts any `px` values as number for size. If not set, the default is 40.

```jsx
import { Avatar } from '@aksara-ui/react';

export default function MyApp({ children }) {
  return <Avatar src="path/to/image" size={24} />;
}
```

See more usage in the _JSX_ panel

## Props

| Property  | Type                  | Required | Default     |
| --------- | --------------------- | -------- | ----------- |
| src       | `any`                 | **Yes**  | -           |
| size      | `number`              | -        | `40`        |
| className | `string`              | -        | `undefined` |
| style     | `React.CSSProperties` | -        | `undefined` |
