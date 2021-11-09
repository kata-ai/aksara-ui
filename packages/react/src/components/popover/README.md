# Popover

> Popover displays floating content in relation to a target.

## Usage

To use this component within your React app, import as follows:

```jsx
import { Popover, PopoverTrigger, PopoverContent, Button, Card } from '@aksara-ui/react';

export default function Component() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button block variant="primary">
          Toggle Popover
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Card mt="xs" p="md" style={{ width: 250 }} elevation={3}>
          This is a popover
        </Card>
      </PopoverContent>
    </Popover>
  );
}
```

## Props

### `<Popover />`

This component extends the `Popover.Root` prop types from [radix-ui](https://www.radix-ui.com/docs/primitives/components/popover).

| Property | Type                 | Required | Default | Description            |
| -------- | -------------------- | -------- | ------- | ---------------------- |
| children | `React.ReactElement` | **Yes**  | -       | Inner popover content. |

### `<PopoverTrigger />`

This component extends the `Popover.Trigger` prop types from [radix-ui](https://www.radix-ui.com/docs/primitives/components/popover).

| Property | Type                 | Required | Default | Description            |
| -------- | -------------------- | -------- | ------- | ---------------------- |
| children | `React.ReactElement` | **Yes**  | -       | Inner popover content. |

### `<PopoverContent />`

This component extends the `Popover.Content` prop types from [radix-ui](https://www.radix-ui.com/docs/primitives/components/popover).

| Property  | Type                          | Required | Default   | Description                                              |
| --------- | ----------------------------- | -------- | --------- | -------------------------------------------------------- |
| className | `string`                      | -        | undefined | Additional CSS classes to give to the component.         |
| style     | `CSSProperties`               | -        | undefined | Additional CSS properties to give to the component.      |
| children  | `React.ReactElement`          | **Yes**  | -         | Inner popover content.                                   |
| placement | `PopoverContentProps['side']` | -        | "bottom"  | Popover placement. Uses the `side` props from `radix-ui` |
