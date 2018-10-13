import * as React from 'react';
import { KataReset, Theme, ThemeAttributes, variables } from '@kata-kit/theme';

import '@kata-kit/fonts/museo-sans-rounded.css';
import '@kata-kit/fonts/kata-icons.css';
import '@kata-kit/reset';

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
    padding: noPadding ? 0 : variables.spacing.spacingMd,
    minHeight: '100%'
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
      {themeAttributes => (
        <KataReset style={style} {...themeAttributes}>
          {children}
        </KataReset>
      )}
    </Theme>
  );
};

export default Wrapper;
