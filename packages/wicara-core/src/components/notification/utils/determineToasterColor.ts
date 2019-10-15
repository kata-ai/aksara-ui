import { NotificationStatus } from './types';
import { colors } from '../../../utils';

export default function determineToasterColor(status?: NotificationStatus) {
  switch (status) {
    case 'default': {
      return colors.gray70;
    }
    case 'info': {
      return colors.cobalt;
    }
    case 'success': {
      return colors.green;
    }
    case 'warning': {
      return colors.yellow;
    }
    case 'error': {
      return colors.red;
    }
    default: {
      return colors.gray70;
    }
  }
}
