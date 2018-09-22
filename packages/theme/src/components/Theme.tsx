import * as React from 'react';
import { Provider, Consumer } from './ThemeContext';
import { ThemeAttributes } from '../types';

interface ThemeProps {
  values?: ThemeAttributes;
  children?: ((theme: ThemeAttributes) => JSX.Element) | React.ReactNode;
}

export default class Theme extends React.Component<ThemeProps> {
  render() {
    const { values, children } = this.props;

    return (
      <Consumer>
        {parentTheme => {
          const merged = { ...parentTheme, ...values };

          if (typeof children === 'function') {
            return children(merged);
          } else {
            return <Provider value={merged}>{children}</Provider>;
          }
        }}
      </Consumer>
    );
  }
}
