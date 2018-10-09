import * as React from 'react';
import { ThemeAttributesMap, ThemeAttributes } from '../types';
import Theme from './Theme';

interface ThemedComponentProps {
  /**
   * The color key to look up from the `ThemeAttributesMap` object. Will default
   * to the `defaultTheme` key if not set
   */
  color?: any;
  /** A Record type of the ThemeAttributes for each color theme. */
  themes: ThemeAttributesMap;
  /**
   * Either a render prop with the the `ThemeAttributes` object passed, or a
   * plain component which consumes the theme context (e.g. `KataReset`).
   */
  children?: ((theme: ThemeAttributes) => JSX.Element) | React.ReactNode;
}

const ThemedComponent: React.SFC<ThemedComponentProps> = ({
  color,
  themes,
  children
}) => (
  <Theme
    values={
      color && typeof color === 'string' && themes[color]
        ? themes[color]
        : themes.defaultTheme
    }
  >
    {children}
  </Theme>
);

export default ThemedComponent;
