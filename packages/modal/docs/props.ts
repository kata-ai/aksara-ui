import { PropAttributesMap } from '@kata-kit/doc-utils';

export const drawerProps: PropAttributesMap = {
  show: {
    type: 'boolean',
    description: 'Whether the modal is open or not.',
    required: true
  },
  noBackdrop: {
    type: 'boolean',
    description:
      "Set to <code>true</code> if you want the drawer to feature an overlay backdrop. Set to <code>'static'</code> to make the overlay backdrop unclickable.",
    defaultValue: 'false'
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
