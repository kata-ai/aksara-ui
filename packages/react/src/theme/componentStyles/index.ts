import avatar from './avatar';
import badge from './badge';
import breadcrumb from './breadcrumb';
import button from './button';
import card from './card';
import form from './form';
import message from './message';
import navigation from './navigation';
import pill from './pill';
import popover from './popover';
import slider from './slider';
import stepper from './stepper';
import typography from './typography';
import tabs from './tabs';
import toast from './toast';
import tooltip from './tooltip';
import subHeader from './subHeader';
import topbar from './topbar';
import inputRadio from './form/inputRadio';
import optionItem from './optionItem';
import pagination from './pagination';

/**
 * Custom theme props based on custom component variants.
 */
const componentStyles = {
  ...avatar,
  badge,
  ...breadcrumb,
  ...button,
  card,
  ...form,
  ...message,
  ...navigation,
  ...pill,
  ...popover,
  ...slider,
  ...stepper,
  ...subHeader,
  ...typography,
  ...tabs,
  ...toast,
  ...tooltip,
  ...topbar,
  ...subHeader,
  ...inputRadio,
  ...optionItem,
  ...pagination,
};

export default componentStyles;
