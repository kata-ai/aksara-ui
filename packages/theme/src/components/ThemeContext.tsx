import React, { createContext, ProviderProps, ConsumerProps } from 'react';
import { ThemeAttributes } from '../types';
import { defaultTheme } from '../constants';

const ThemeContext = createContext<ThemeAttributes>(defaultTheme);

// This type guard is necessary to work around the limitations TS has when
// setting `declaration` to `true` in tsconfig.
const Provider: React.ComponentType<ProviderProps<ThemeAttributes>> =
  ThemeContext.Provider;
const Consumer: React.ComponentType<ConsumerProps<ThemeAttributes>> =
  ThemeContext.Consumer;

export { Provider, Consumer };
