# Notifications

Pluggable notifications element that doesn't rely on Redux.

## Usage

### Toasters

```jsx
import { WicaraReset, Button, notification } from '@wicara/core';

export default function MyApp({ children }) {
  return (
    <WicaraReset>
      <Button
        variant="primary"
        onClick={() =>
          notification.toaster({
            title: 'Toaster',
            message: 'Hello world! This is a toaster',
            status: 'success',
            dismissible: true,
            dismissAfter: 5000
          })
        }
      >
        Push Me
      </Button>
    </WicaraReset>
  );
}
```

## Toaster Options

### `id?: string`

Optional unique id to give to the toaster. Will be automatically generated if not given.

### `title?: string`

Optional title of the toaster.

### `message: string`

The message of the toaster.

### `status?: 'default' | 'info' | 'success' | 'warning' | 'error'`

Status icons/colors to render in the toaster. Will default to `'default'`.

### `dismissible?: boolean`

Whether the notification is dismissible with a click. Default is `false`.

### `dismissAfter?: number`

The amount of time it takes for the toaster to dismiss (in miliseconds). Default is `5000`.

### `oonRemove?: () => void`

Optional callback to run when the toaster has fully exited the screen.
