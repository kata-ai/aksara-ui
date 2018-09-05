() => (
  <Fragment>
    <FormGroup>
      <FormLabel htmlFor="firstName">First Name</FormLabel>
      <InputText id="firstName" name="firstName" placeholder="Type here..." />
    </FormGroup>
    <FormGroup>
      <FormLabel htmlFor="email_dummy" errors>
        Email Address
      </FormLabel>
      <InputText
        id="email_dummy"
        name="email_dummy"
        errors
        placeholder="Type here..."
      />
      <FormError>Please enter an email address.</FormError>
    </FormGroup>
  </Fragment>
);
