# Dropdown

All in one dropdown component.

## Usage

```tsx
import { DropdownMenu, DropdownMenuItem } from '@aksara-ui/react';

export default function Component() {
  return (
    <DropdownMenu width={200}>
      <DropdownMenuItem>Menu Item One</DropdownMenuItem>
      <DropdownMenuItem>Menu Item Two</DropdownMenuItem>
      <DropdownMenuItem>Menu Item Three</DropdownMenuItem>
      <DropdownMenuItem>Menu Item Four</DropdownMenuItem>
    </DropdownMenu>
  );
}
```

### Props

#### `<DropdownMenu />`

| Property  | Type   | Required | Default   | Description                                                                     |
| --------- | ------ | -------- | --------- | ------------------------------------------------------------------------------- |
| className | string | -        | undefined | Additional CSS classes to give to the component                                 |
| tipOffset | number | -        | undefined | If defined, will show a tip arrow based on the left offset defined in this prop |
| width     | number | -        | undefined | Fixed width of the dropdown menu                                                |

#### `<DropdownMenuItem />`

| Property  | Type          | Required | Default   | Description                                     |
| --------- | ------------- | -------- | --------- | ----------------------------------------------- |
| className | string        | -        | undefined | Additional CSS classes to give to the component |
| style     | CSSProperties | -        | undefined | Additional CSS styles to give to the component  |
| isActive  | boolean       | -        | false     | Force active state on the menu item             |
