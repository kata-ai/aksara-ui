import variables from './utils/variables';
import KataKitThemeProvider, {
  KataKitThemeProviderProps
} from './KataKitThemeProvider';
import ThemedComponent from './components/ThemedComponent';
import { KataKitDefaultTheme, ThemeAttributes } from './types';

// TODO: switch away from ThemeProvider to React Context API
export default KataKitThemeProvider;
export {
  variables,
  KataKitDefaultTheme,
  KataKitThemeProviderProps,
  ThemeAttributes,
  ThemedComponent
};
