# Button Group

> Button groups are used to bunch together buttons with similar actions

## Usage

To use this component in your app, import as follows:

```tsx
import { Button, ButtonGroup } from '@aksara-ui/core';

export default function Component() {
  return (
    <ButtonGroup segmented size={32}>
      <Button variant="outline">Cancel</Button>
      <Button variant="outline">Save</Button>
    </ButtonGroup>
  );
}
```

### Props

| Property  | Type        | Required | Default | Description                                        |
| --------- | ----------- | -------- | ------- | -------------------------------------------------- |
| segmented | boolean     | -        | false   | Join buttons as segmented group.                   |
| fullWidth | boolean     | -        | false   | Stretch the buttons to fit the containing element. |
| size      | ButtonSizes | -        | 32      | The size of butttons in this button group.         |
