import variables from './utils/variables';
import KataKitThemeProvider, {
  KataKitThemeProviderProps
} from './KataKitThemeProvider';
import Theme from './components/Theme';
import ThemedComponent from './components/ThemedComponent';
import { KataKitDefaultTheme, ThemeAttributes } from './types';

// TODO: switch away from ThemeProvider to React Context API
export default KataKitThemeProvider;
export {
  variables,
  KataKitDefaultTheme,
  KataKitThemeProviderProps,
  ThemeAttributes,
  Theme,
  ThemedComponent
};
export { Provider, Consumer } from './components/ThemeContext';
