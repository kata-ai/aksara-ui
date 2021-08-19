import avatar from './avatar';
import badge from './badge';
import button from './button';
import card from './card';
import pill from './pill';
import typography from './typography';
import tooltip from './tooltip';

/**
 * Custom theme props based on custom component variants.
 */
const componentStyles = {
  avatar,
  badge,
  ...button,
  card,
  ...pill,
  ...typography,
  ...tooltip,
};

export default componentStyles;
