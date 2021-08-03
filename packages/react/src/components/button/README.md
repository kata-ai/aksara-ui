# Button

It's a button. What more do you expect?

## Usage

Buttons express what action will occur when the user clicks or touches it. Buttons are used to initialize an action, either in the background or foreground of an experience.

### `<Button />`

```jsx
import { AksaraProvider, Button } from '@aksara-ui/react';

export default function MyApp({ children }) {
  return (
    <AksaraProvider>
      <Button variant="primary" onClick={() => alert('Hello!')}>
        Push Me
      </Button>
    </AksaraProvider>
  );
}
```

Button accepts all the HTML props available in a standard HTML `<button>` element. It has three supported sizes, `sm`, `md`, and `lg`.

```jsx
import { AksaraProvider, Button } from '@aksara-ui/react';

export default function MyApp({ children }) {
  return (
    <AksaraProvider>
      <Button size="sm">Push Me</Button>
      <Button size="md">Push Me</Button>
      <Button size="lg">Push Me</Button>
    </AksaraProvider>
  );
}
```

See more usage in the _JSX_ panel

#### Props

| Property  | Type           | Required | Default   | Description                                     |
| --------- | -------------- | -------- | --------- | ----------------------------------------------- |
| className | string         | -        | undefined | Additional CSS classes to give to the component |
| style     | CSSProperties  | -        | undefined | Additional CSS styles to give to the component  |
| block     | boolean        | -        | false     | Is a block button.                              |
| variant   | ButtonVariants | -        | default   | The variant of the button.                      |
| size      | ButtonSizes    | -        | 40        | The size of the button.                         |

### `<OutlineButton />`

```jsx
import { AksaraProvider, OutlineButton } from '@aksara-ui/react';

export default function MyApp({ children }) {
  return (
    <AksaraProvider>
      <OutlineButton variant="primary" onClick={() => alert('Hello!')}>
        Push Me
      </OutlineButton>
    </AksaraProvider>
  );
}
```

Button accepts all the HTML props available in a standard HTML `<button>` element. It has three supported sizes, `sm`, `md`, and `lg`.

```jsx
import { AksaraProvider, OutlineButton } from '@aksara-ui/react';

export default function MyApp({ children }) {
  return (
    <AksaraProvider>
      <OutlineButton size="sm">Push Me</OutlineButton>
      <OutlineButton size="md">Push Me</OutlineButton>
      <OutlineButton size="lg">Push Me</OutlineButton>
    </AksaraProvider>
  );
}
```

See more usage in the _JSX_ panel

#### Props

| Property  | Type                  | Required | Default   | Description                                     |
| --------- | --------------------- | -------- | --------- | ----------------------------------------------- |
| className | string                | -        | undefined | Additional CSS classes to give to the component |
| style     | CSSProperties         | -        | undefined | Additional CSS styles to give to the component  |
| block     | boolean               | -        | false     | Is a block button.                              |
| variant   | OutlineButtonVariants | -        | default   | The variant of the button.                      |
| size      | ButtonSizes           | -        | 40        | The size of the button.                         |

### `<FloatingButton />`

Floating action buttons for primary context actions. Floating buttons are often paired with Wicara Icons.

```jsx
import { AksaraProvider, FloatingButton } from '@aksara-ui/react';

export default function MyApp({ children }) {
  return (
    <AksaraProvider>
      <FloatingButton variant="primary" aria-label="Push Me" onClick={() => alert('Hello!')}>
        <i className="icon-tick" aria-hidden="true" />
      </FloatingButton>
    </AksaraProvider>
  );
}
```

See more usage in the _JSX_ panel

#### Props

| Property  | Type                   | Required | Default   | Description                                     |
| --------- | ---------------------- | -------- | --------- | ----------------------------------------------- |
| className | string                 | -        | undefined | Additional CSS classes to give to the component |
| style     | CSSProperties          | -        | undefined | Additional CSS styles to give to the component  |
| variant   | FloatingButtonVariants | -        | default   | The variant of the button.                      |
| size      | ButtonSizes            | -        | 40        | The size of the button.                         |

### `<IconButton />`

Icon-only buttons. Best paired with Wicara Icons.

```jsx
import { AksaraProvider, IconButton } from '@aksara-ui/react';

export default function MyApp({ children }) {
  return (
    <AksaraProvider>
      <IconButton variant="primary" aria-label="Push Me" onClick={() => alert('Hello!')}>
        <i className="icon-tick" aria-hidden="true" />
      </IconButton>
    </AksaraProvider>
  );
}
```

See more usage in the _JSX_ panel

#### Props

| Property  | Type               | Required | Default   | Description                                     |
| --------- | ------------------ | -------- | --------- | ----------------------------------------------- |
| className | string             | -        | undefined | Additional CSS classes to give to the component |
| style     | CSSProperties      | -        | undefined | Additional CSS styles to give to the component  |
| variant   | IconButtonVariants | -        | default   | The variant of the button.                      |
| size      | IconButtonSizes    | -        | 40        | The size of the button.                         |

### `<UnstyledButton />`

This is basically a button with all styling elements removed (incl. hover/focus effects).

```jsx
import { UnstyledButton } from '@aksara-ui/react';

export default function Component({ children }) {
  return <UnstyledButton>I'm an unstyled button!</UnstyledButton>;
}
```

See more usage in the _JSX_ panel

#### Props

Props for this component are similar to the `Box` component.
