# Avatar

> Resizable avatar component.

## Usage

To use this component within your React app, import as follows:

```jsx
import { WicaraProvider, Avatar } from '@wicara/core';

export default function MyApp({ children }) {
  return (
    <WicaraProvider>
      <Avatar src="path/to/image" />
    </WicaraProvider>
  );
}
```

Avatar also accepts any `px` values as number for size. If not set, the default is 40.

```jsx
import { WicaraProvider, Avatar } from '@wicara/core';

export default function MyApp({ children }) {
  return (
    <WicaraProvider>
      <Avatar src="path/to/image" size={24} />
    </WicaraProvider>
  );
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
