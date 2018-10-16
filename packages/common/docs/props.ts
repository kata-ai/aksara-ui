import { PropAttributesMap } from '@kata-kit/doc-utils';

export const boardProps: PropAttributesMap = {
  className: {
    type: 'string',
    description: 'Additional CSS classes to give to the component.',
    defaultValue: 'undefined'
  },
  headingChildren: {
    type: 'React.ReactNode',
    description: 'Additional content as a header',
    defaultValue: 'undefined'
  },
  footerChildren: {
    type: 'React.ReactNode',
    description: 'Additional content as a footer',
    defaultValue: 'undefined'
  }
};

export const emptyMessageProps: PropAttributesMap = {
  image: {
    type: 'any',
    description:
      'Import the image you want to use to replace the default one here.'
  },
  title: {
    type: 'string | React.ReactNode',
    description: 'The title of the empty message.',
    defaultValue: "'Empty'"
  }
};

export const focusTrapProps: PropAttributesMap = {
  active: {
    description: 'Whether or not the focus lock is active',
    type: 'boolean',
    required: true
  }
};
