# FocusTrap

> Helper component to support trapping tab focus inside a component.

## Usage

To use this component within your app, import as follows:

```jsx
import { FocusTrap } from '@wicara/core';

export default function Component() {
  const [active, setActive] = React.useState(false);

  return (
    <div>
      <p>
        I am an element
        <a href="https://www.youtube.com/watch?v=mUGDxyG1kOI" target="_blank">
          with a link
        </a>!
      </p>

      <FocusTrap active={active}>
        <p>
          Focus Lock: <strong>{active ? 'On' : 'Off'}</strong>
        </p>
        <button onClick={() => setActive(!active)} style={{ marginBottom: '16px' }}>
          Toggle focus trap
        </button>
        <p>
          If focus lock is enabled, you can only tab through the button above{' '}
          <a href="https://www.youtube.com/watch?v=lOiR7b6jumI" target="_blank">
            and this link
          </a>
          .
        </p>
      </FocusTrap>
    </div>
  );
}
```

See more usage in the _JSX_ panel

#### Props

| Property | Type    | Required | Default | Description                              |
| -------- | ------- | -------- | ------- | ---------------------------------------- |
| `active` | boolean | **Yes**  | -       | Whether or not the focus lock is active. |
