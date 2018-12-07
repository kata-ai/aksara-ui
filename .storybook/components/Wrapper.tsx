import * as React from 'react';
import { Theme, ThemeAttributes, variables } from '@kata-kit/theme';
import { KataReset } from '@kata-kit/reset';

import '@kata-kit/fonts/museo-sans-rounded.css';
import '@kata-kit/fonts/kata-icons.css';

interface WrapperProps {
  noPadding?: boolean;
  noReset?: boolean;
}

const theme: ThemeAttributes = {
  backgroundColor: variables.colors.white,
  textColor: variables.colors.gray70
};

const Wrapper: React.SFC<WrapperProps> = ({ children, noPadding, noReset }) => {
  const style: React.CSSProperties = {
    padding: noPadding ? 0 : '16px',
    minHeight: '100%',
    backgroundColor: variables.colors.white
  };

  if (noReset) {
    return (
      <Theme values={theme}>
        {themeAttributes => (
          <div
            style={{
              ...style,
              color: themeAttributes.textColor,
              backgroundColor: themeAttributes.backgroundColor
            }}
          >
            {children}
          </div>
        )}
      </Theme>
    );
  }

  return (
    <Theme values={theme}>
      <KataReset>
        <div style={style}>{children}</div>
      </KataReset>
    </Theme>
  );
};

export default Wrapper;
