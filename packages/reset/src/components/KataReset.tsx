import * as React from 'react';
import GlobalStyles from './GlobalStyles';

import { defaultTheme, KataThemeConsumer } from '@kata-kit/theme';

interface ResetProps {
  className?: string;
  style?: React.CSSProperties;
}

export default class Reset extends React.Component<ResetProps> {
  render() {
    const { children, ...rest } = this.props;

    return (
      <KataThemeConsumer>
        {theme => (
          <div {...rest}>
            <GlobalStyles theme={{ ...defaultTheme, ...theme }} />
            {children}
          </div>
        )}
      </KataThemeConsumer>
    );
  }
}
