import { PropAttributesMap } from '@kata-kit/doc-utils';

export const drawerProps: PropAttributesMap = {
  show: {
    type: 'boolean',
    description: 'Whether the modal is open or not.',
    required: true
  },
  noBackdrop: {
    type: 'boolean',
    description: 'Hide the dark overlay behind the modal.',
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
