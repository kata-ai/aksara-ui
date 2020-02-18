# Button

It's a button. What more do you expect?

## Usage

Buttons express what action will occur when the user clicks or touches it. Buttons are used to initialize an action, either in the background or foreground of an experience.

### `<Button />`

```jsx
import { WicaraProvider, Button } from '@aksara-ui/core';

export default function MyApp({ children }) {
  return (
    <WicaraProvider>
      <Button variant="primary" onClick={() => alert('Hello!')}>
        Push Me
      </Button>
    </WicaraProvider>
  );
}
```

Button accepts all the HTML props available in a standard HTML `<button>` element. It has three supported sizes, `sm`, `md`, and `lg`.

```jsx
import { WicaraProvider, Button } from '@aksara-ui/core';

export default function MyApp({ children }) {
  return (
    <WicaraProvider>
      <Button size="sm">Push Me</Button>
      <Button size="md">Push Me</Button>
      <Button size="lg">Push Me</Button>
    </WicaraProvider>
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
| size      | ButtonSizes    | -        | md        | The size of the button.                         |

### `<OutlineButton />`

```jsx
import { WicaraProvider, OutlineButton } from '@aksara-ui/core';

export default function MyApp({ children }) {
  return (
    <WicaraProvider>
      <OutlineButton variant="primary" onClick={() => alert('Hello!')}>
        Push Me
      </OutlineButton>
    </WicaraProvider>
  );
}
```

Button accepts all the HTML props available in a standard HTML `<button>` element. It has three supported sizes, `sm`, `md`, and `lg`.

```jsx
import { WicaraProvider, OutlineButton } from '@aksara-ui/core';

export default function MyApp({ children }) {
  return (
    <WicaraProvider>
      <OutlineButton size="sm">Push Me</OutlineButton>
      <OutlineButton size="md">Push Me</OutlineButton>
      <OutlineButton size="lg">Push Me</OutlineButton>
    </WicaraProvider>
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
| size      | ButtonSizes           | -        | md        | The size of the button.                         |

### `<FloatingButton />`

Floating action buttons for primary context actions. Floating buttons are often paired with Wicara Icons.

```jsx
import { WicaraProvider, FloatingButton } from '@aksara-ui/core';

export default function MyApp({ children }) {
  return (
    <WicaraProvider>
      <FloatingButton variant="primary" aria-label="Push Me" onClick={() => alert('Hello!')}>
        <i className="icon-tick" aria-hidden="true" />
      </FloatingButton>
    </WicaraProvider>
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
| size      | ButtonSizes            | -        | md        | The size of the button.                         |

### `<IconButton />`

Icon-only buttons. Best paired with Wicara Icons.

```jsx
import { WicaraProvider, IconButton } from '@aksara-ui/core';

export default function MyApp({ children }) {
  return (
    <WicaraProvider>
      <IconButton variant="primary" aria-label="Push Me" onClick={() => alert('Hello!')}>
        <i className="icon-tick" aria-hidden="true" />
      </IconButton>
    </WicaraProvider>
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
| size      | IconButtonSizes    | -        | sm        | The size of the button.                         |
