import * as React from 'react';
import { ThemeAttributes } from '../types';
import { defaultTheme } from '../constants';

const ThemeContext = React.createContext<ThemeAttributes>(defaultTheme);

// This type guard is necessary to work around the limitations TS has when
// setting `declaration` to `true` in tsconfig.
const Provider: React.ComponentType<React.ProviderProps<ThemeAttributes>> =
  ThemeContext.Provider;
const Consumer: React.ComponentType<React.ConsumerProps<ThemeAttributes>> =
  ThemeContext.Consumer;

export { Provider, Consumer };
