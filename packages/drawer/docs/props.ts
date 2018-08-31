import { PropAttributesMap } from '@kata-kit/doc-utils';

export const drawerProps: PropAttributesMap = {
  isOpen: {
    type: 'boolean',
    description: 'Whether the modal is open or not.',
    required: true
  },
  backdrop: {
    type: "boolean | 'static'",
    description:
      "Set to <code>true</code> if you want the drawer to feature an overlay backdrop. Set to <code>'static'</code> to make the overlay backdrop unclickable.",
    defaultValue: "'static'"
  },
  className: {
    type: 'string',
    description: 'Additional CSS classes to give to the drawer.',
    defaultValue: 'undefined'
  },
  onClose: {
    type: '() => void',
    description:
      'Callback method run when the "Close Drawer" button is clicked.',
    required: true
  }
};
