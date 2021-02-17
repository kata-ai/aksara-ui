import { Theme } from 'packages/aksara-ui-core/src/theme';
import { useTheme as defaultUseTheme } from 'styled-components';

const useTheme: () => Theme = defaultUseTheme;

export default useTheme;
