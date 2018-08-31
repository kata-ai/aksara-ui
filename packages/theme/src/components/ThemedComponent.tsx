import React from 'react';
import { ThemeAttributesMap, ThemeAttributes } from '../types';
import Theme from './Theme';

interface ThemedComponentProps {
  color?: any;
  themes: ThemeAttributesMap;
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
