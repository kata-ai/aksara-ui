# Dialog

> Display a modal interface that will block interaction with the rest of the page with an overlay.

## Why not call it a Modal?

You would think that since many other design systems and CSS frameworks (e.g. Bootstrap, Bulma) call it "modal", it's the correct term to use. However, the term "modal" itself is a misnomer. As mentioned on the [BlueprintJS docs](https://blueprintjs.com/docs/versions/2/#core/components/dialog):

> The term "modal" is sometimes used to mean "dialog", but this is a misnomer. Modal is an adjective that describes parts of a UI. An element is considered modal if it blocks interaction with the rest of the application. We use the term "dialog" to avoid confusion with the adjective.

Therefore, to promote the correct terminology, we use "dialog" instead of "modal".

## Usage

To use this component in your app, import as follows:

```jsx
import { Box, Text, Paragraph, Dialog } from '@aksara-ui/core';

const Component = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Box>
      <Text as="p">Click the button below to open the dialog.</Text>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Toggle Dialog
      </button>
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Paragraph my={26} mx={48}>
          Basic Example
        </Paragraph>
      </Dialog>
    </Box>
  );
};
```

See more usage in the _JSX_ panel

## Props

| Property           | Type                  | Required | Default                 |
| ------------------ | --------------------- | -------- | ----------------------- |
| className          | `string`              | -        | `undefined`             |
| style              | `React.CSSProperties` | -        | `undefined`             |
| width              | `string | number`     | -        | `'100%'`                |
| maxWidth           | `string | number`     | -        | `'500px'`               |
| height             | `string | number`     | -        | `'100%'`                |
| maxHeight          | `string | number`     | -        | `'calc(100% - 24vmin)'` |
| isOpen             | `boolean`             | **Yes**  | -                       |
| noBackdrop         | `boolean`             | -        | -                       |
| hideCloseButton    | `boolean`             | -        | -                       |
| isOverlayClickable | `boolean`             | -        | `false`                 |
| enableFocusTrap    | `boolean`             | -        | `false`                 |
| labelledById       | `boolean`             | -        | -                       |
| onClose            | `(e: any) => void`    | -        | `undefined`             |
