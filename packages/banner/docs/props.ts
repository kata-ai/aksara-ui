import { PropAttributesMap } from '@kata-kit/doc-utils';

export const bannerProps: PropAttributesMap = {
  state: {
    type: 'BannerState',
    oneOf: ["'error'", "'success'", "'warning'", "'info'"],
    required: true,
    description: 'The color state of the banner.'
  },
  message: {
    type: 'any',
    required: true,
    description:
      'Banner message. Could be a string or a <code>ReactNode</code>.'
  },
  className: {
    type: 'string',
    description: 'Additional CSS classes to give to the button.',
    defaultValue: 'undefined'
  },
  onClose: {
    type: '(e: any): void',
    description: 'Triggers when the Close button is clicked.',
    defaultValue: 'undefined'
  }
};
