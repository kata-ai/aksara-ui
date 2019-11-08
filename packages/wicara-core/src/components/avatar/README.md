# Avatar

> Resizable avatar component.

## Usage

To use this component within your React app, import as follows:

```jsx
import { WicaraReset, Avatar } from '@wicara/core';

export default function MyApp({ children }) {
  return (
    <WicaraReset>
      <Avatar src="path/to/image" />
    </WicaraReset>
  );
}
```

Avatar also accepts any `px` values as number for size. If not set, the default is 40.

```jsx
import { WicaraReset, Avatar } from '@wicara/core';

export default function MyApp({ children }) {
  return (
    <WicaraReset>
      <Avatar src="path/to/image" size={24} />
    </WicaraReset>
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
