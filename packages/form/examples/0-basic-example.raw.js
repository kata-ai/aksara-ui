() => (
  <Fragment>
    <FormGroup>
      <FormLabel htmlFor="text">Text input</FormLabel>
      <InputText id="text" name="text" placeholder="Type here..." />
    </FormGroup>
    <FormGroup>
      <FormLabel htmlFor="disabled">Disabled input</FormLabel>
      <InputText
        id="disabled"
        name="disabled"
        disabled
        placeholder="Can't touch this"
      />
    </FormGroup>
    <FormGroup>
      <FormLabel htmlFor="textarea">Disabled input</FormLabel>
      <InputTextarea
        id="textarea"
        name="textarea"
        rows={4}
        placeholder="Type here..."
      />
    </FormGroup>
  </Fragment>
);
