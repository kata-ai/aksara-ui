import colors from './colors';
import radii from './radii';
import responsive from './responsive';
import shadows from './shadows';
import space from './space';
import typography from './typography';

/**
 * Default styled-system theme props based on the theme specification.
 *
 * [Theme specification](https://styled-system.com/theme-specification)
 */
const foundations = {
  colors,
  space,
  sizes: space,
  ...typography,
  shadows,
  radii,
  ...responsive,
};

export default foundations;
