import variables from './utils/variables';
import Theme from './components/Theme';
import KataReset from './components/KataReset';
import ThemedComponent from './components/ThemedComponent';
import { ThemeAttributes, ThemeAttributesMap } from './types';

// TODO: switch away from ThemeProvider to React Context API
export default ThemedComponent;
export { variables, ThemeAttributes, ThemeAttributesMap, Theme, KataReset };
export { Provider, Consumer } from './components/ThemeContext';
