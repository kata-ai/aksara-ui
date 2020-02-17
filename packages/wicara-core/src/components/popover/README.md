# Popover

> Popover displays floating content in relation to a target.

## Usage

To use this component within your React app, import as follows:

```jsx
import { Popover, Button, Card } from '@wicara/core';

export default function Component() {
  return (
    <Popover
      trigger={
        <Button block variant="primary">
          Toggle Popover
        </Button>
      }
    >
      <Card mt="xs" p="md" style={{ width: 250 }} elevation={3}>
        This is a popover
      </Card>
    </Popover>
  );
}
```

## Props

| Property         | Type                 | Required | Default          | Description                                                                                                           |
| ---------------- | -------------------- | -------- | ---------------- | --------------------------------------------------------------------------------------------------------------------- |
| className        | `string`             | -        | undefined        | Additional CSS classes to give to the component.                                                                      |
| style            | `CSSProperties`      | -        | undefined        | Additional CSS properties to give to the component.                                                                   |
| summaryClassName | `string`             | -        | undefined        | Additional CSS classes to give to the inner summary block.                                                            |
| summaryStyle     | `CSSProperties`      | -        | undefined        | Additional CSS properties to give to the inner summary block.                                                         |
| trigger          | `React.ReactElement` | **Yes**  | -                | Element that triggers the popover content.                                                                            |
| children         | `React.ReactElement` | **Yes**  | -                | Inner popover content.                                                                                                |
| placement        | `PopperJS.Placement` | -        | `'bottom-start'` | Callback to run when a page number is selected. You can use this to e.g. run setState on your component's page state. |
