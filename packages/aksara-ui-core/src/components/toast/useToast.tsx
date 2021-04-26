import { ToasterSettings } from '../notification/utils/types';
import { notification } from '../notification';

/**
 * React hook used to create a function that can be used
 * to show toasts in an application.
 */
export default function useToast() {
  function showToast(options: ToasterSettings) {
    notification.toaster(options);
  }

  return showToast;
}
