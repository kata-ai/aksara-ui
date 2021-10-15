import avatar from './avatar';
import badge from './badge';
import breadcrumb from './breadcrumb';
import button from './button';
import card from './card';
import form from './form';
import message from './message';
import navigation from './navigation';
import pill from './pill';
import slider from './slider';
import typography from './typography';
import tabs from './tabs';
import toast from './toast';
import tooltip from './tooltip';
import subHeader from './subHeader';

/**
 * Custom theme props based on custom component variants.
 */
const componentStyles = {
  avatar,
  badge,
  ...breadcrumb,
  ...button,
  card,
  ...form,
  ...message,
  ...navigation,
  ...pill,
  ...slider,
  ...typography,
  ...tabs,
  ...toast,
  ...tooltip,
  ...subHeader,
};

export default componentStyles;
