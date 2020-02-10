# Message

> Banners are used to convey important information to users.

## Message blocks

To use this component within your React app, import as follows:

```jsx
import { Message } from '@wicara/core';

const Component = () => <Message state="success" message="A banner! - You've succesfully read it." />;
```

See more usage in the _JSX_ panel

## Props

| Property  | Type                                                       | Required | Default     |
| --------- | ---------------------------------------------------------- | -------- | ----------- |
| color     | `'general'`, `'error'`, `'success'`, `'warning'`, `'info'` | **Yes**  | -           |
| message   | `string | React.ReactNode`                                 | **Yes**  | -           |
| className | `string`                                                   | -        | `undefined` |
| onClose   | `(e: any) => void`                                         | -        | `undefined` |
