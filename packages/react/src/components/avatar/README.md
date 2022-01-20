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

### Avatar Background Color

When src and bg props not provided, Avatar component will generate bgColor based on name value to randomize the bgColor

_List generated bgColor_ :
`['indigo06', 'red07', 'yellow07', 'blue07', 'green07']`

## Props

| Property  | Type                       | Required | Default     |
| --------- | -------------------------- | -------- | ----------- |
| src       | `any`                      | -        | -           |
| size      | `AvatarSize`               | -        | `lg`        |
| className | `string`                   | -        | `undefined` |
| style     | `React.CSSProperties`      | -        | `undefined` |
| presence  | `PresenceProps`            | -        | `undefined` |
| icon      | `React.ComponentType<any>` | -        | `undefined` |
| bg        | `string`                   | -        | `undefined` |
| alt       | `string`                   | -        | `undefined` |
| name      | `string`                   | -        | `undefined` |
