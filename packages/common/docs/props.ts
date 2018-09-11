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
