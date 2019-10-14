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

## Notification options

TODO
