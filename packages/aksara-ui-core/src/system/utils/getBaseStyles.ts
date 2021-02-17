import css from '@styled-system/css';
import { get } from 'styled-system';
import { runIfFn } from '../../utils';

/**
 * Parser for resolving a component's base styles.
 */
export default function getComponentStyles(componentKey: string) {
  return (props: any): any => {
    const { children: _children, theme } = props;

    const config = get(theme, `componentStyles.${componentKey}`);

    if (config) {
      const baseStyles = config.baseStyle ? runIfFn(config.baseStyle, props) : {};

      return css(baseStyles);
    }

    return {};
  };
}
