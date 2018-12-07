import * as React from 'react';
import { Provider, Consumer } from './ThemeContext';
import { ThemeAttributes } from '../types';

interface ThemeProps {
  /** A `ThemeAttributes` object with the attributes you want to override. */
  values?: ThemeAttributes;
  /**
   * Either a render prop with the the `ThemeAttributes` object passed, or a
   * plain component which consumes the theme context (e.g. `KataReset`).
   */
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
            return (children as any)(merged);
          }

          return <Provider value={merged}>{children}</Provider>;
        }}
      </Consumer>
    );
  }
}
