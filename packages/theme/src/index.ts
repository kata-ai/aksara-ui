import variables from './utils/variables';
import Theme from './components/Theme';
import ThemedComponent from './components/ThemedComponent';
import { defaultTheme } from './constants';
import { ThemeAttributes, ThemeAttributesMap } from './types';

// TODO: switch away from ThemeProvider to React Context API
export default ThemedComponent;
export { variables, ThemeAttributes, ThemeAttributesMap, Theme, defaultTheme };
export {
  Provider as KataThemeProvider,
  Consumer as KataThemeConsumer
} from './components/ThemeContext';
