# Form

> Basic form elements used with Wicara.

## Usage

To use this component in your app, import as follows:

```jsx
import { Box, FormGroup, FormLabel, InputText, InputTextarea } from '@aksara-ui/core';

const Component = () => {
  return (
    <Box>
      <FormGroup>
        <FormLabel htmlFor="textDummy">Text input</FormLabel>
        <InputText id="textDummy" name="textDummy" placeholder="Type here..." />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="disabled">Disabled input</FormLabel>
        <InputText id="disabled" name="disabled" disabled placeholder="Can't touch this" />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="textarea">Text area</FormLabel>
        <InputTextarea id="textarea" name="textarea" rows={4} placeholder="Type here..." />
      </FormGroup>
    </Box>
  );
};
```

See more usage in the _JSX_ panel.
