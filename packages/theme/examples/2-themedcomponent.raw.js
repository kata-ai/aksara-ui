() => {
  const themes = {
    defaultTheme: {
      backgroundColor: variables.colors.softKataBlue,
      textColor: variables.colors.grey70
    },
    red: {
      backgroundColor: variables.colors.red,
      textColor: variables.colors.white
    }
  };

  return (
    <Fragment>
      <ThemedComponent color="defaultTheme" themes={themes}>
        {innerTheme => (
          <div
            style={{
              marginBottom: '8px',
              padding: '8px 16px',
              color: innerTheme.textColor,
              backgroundColor: innerTheme.backgroundColor
            }}
          >
            This example shows application of ThemedComponent on a `style` prop
            inside a div.
          </div>
        )}
      </ThemedComponent>
      <ThemedComponent color="red" themes={themes}>
        {innerTheme => (
          <div
            style={{
              padding: '8px 16px',
              color: innerTheme.textColor,
              backgroundColor: innerTheme.backgroundColor
            }}
          >
            You can, of course, include these as a theme prop in your
            `styled-components` components.
          </div>
        )}
      </ThemedComponent>
    </Fragment>
  );
};
