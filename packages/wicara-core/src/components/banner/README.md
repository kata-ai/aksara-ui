# Banner

> Banners are used to convey important information to users.

## Usage

To use this component within your React app, import as follows:

```jsx
import { Banner } from '@wicara/core';

const Component = () => (
  <Banner state="success" message="A banner! - You've succesfully read it." />
);
```

See more usage in the _JSX_ panel

## Props

| Property  | Type                                          | Required | Default     |
| --------- | --------------------------------------------- | -------- | ----------- |
| color     | `'error'`, `'success'`, `'warning'`, `'info'` | **Yes**  | -           |
| message   | `string | React.ReactNode`                    | **Yes**  | -           |
| className | `string`                                      | -        | `undefined` |
| onClose   | `(e: any) => void`                            | -        | `undefined` |
