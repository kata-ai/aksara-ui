# Blankslate

> Banners are used to convey important information to users.

## Message blocks

To use this component within your React app, import as follows:

```jsx
import { Message } from '@aksara-ui/react';

const Component = () => <Message state="success" message="A banner! - You've succesfully read it." />;
```

See more usage in the _JSX_ panel

## Props

| Property  | Type                                                       | Required         | Default     |
| --------- | ---------------------------------------------------------- | ---------------- | ----------- | --- |
| message   | `string                                                    | React.ReactNode` | **Yes**     | -   |
| state     | `'general'`, `'error'`, `'success'`, `'warning'`, `'info'` | -                | `'general'` |
| title     | `string`                                                   | -                | -           |
| className | `string`                                                   | -                | `undefined` |
| onClose   | `(e: any) => void`                                         | -                | `undefined` |
