# Button

It's a button. What more do you expect?

## Usage

Buttons express what action will occur when the user clicks or touches it. Buttons are used to initialize an action, either in the background or foreground of an experience.

```jsx
import { AksaraReset, Button } from '@aksara/ui-kit';

export default function MyApp({ children }) {
  return (
    <AksaraReset>
      <Button variant="primary" onClick={() => alert('Hello!')}>
        Push Me
      </Button>
    </AksaraReset>
  );
}
```

See more usage in the _JSX_ panel

## Props

See detailed props usage in the _Props_ panel
