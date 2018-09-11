() => (
  <Theme
    values={{
      backgroundColor: variables.colors.gray80,
      textColor: variables.colors.gray20
    }}
  >
    {innerTheme => (
      <KataReset {...innerTheme} style={{ padding: '8px 16px' }}>
        A reset can be themed.
      </KataReset>
    )}
  </Theme>
);
