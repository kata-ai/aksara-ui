# Side Sheet

> Dialogs that pop out from the right side of the screen.

## Usage

To use this component in your app, import as follows:

```jsx
import { Box, Text, Paragraph, SideSheet } from '@aksara-ui/react';

const Component = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Box>
      <Text as="p">Click the button below to open the side sheet.</Text>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Toggle Side Sheet
      </button>
      <SideSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Paragraph my={26} mx={48}>
          Basic Example
        </Paragraph>
      </SideSheet>
    </Box>
  );
};
```

See more usage in the _JSX_ panel

## Props

| Property           | Type                  | Required | Default     |
| ------------------ | --------------------- | -------- | ----------- |
| className          | `string`              | -        | `undefined` |
| style              | `React.CSSProperties` | -        | `undefined` |
| isOpen             | `boolean`             | **Yes**  | -           |
| noBackdrop         | `boolean`             | -        | -           |
| hideCloseButton    | `boolean`             | -        | -           |
| isOverlayClickable | `boolean`             | -        | `false`     |
| enableFocusTrap    | `boolean`             | -        | `false`     |
| labelledById       | `boolean`             | -        | -           |
| onClose            | `(e: any) => void`    | -        | `undefined` |
