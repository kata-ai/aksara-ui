import { PropAttributesMap } from '@kata-kit/doc-utils';

export const inputProps: PropAttributesMap = {
  errors: {
    type: 'boolean',
    description: 'Alternate form state for input with errors.',
    defaultValue: 'false'
  },
  className: {
    type: 'string',
    description: 'Additional CSS classes to give to the component.',
    defaultValue: 'undefined'
  }
};

export const formProps: PropAttributesMap = {
  className: {
    type: 'string',
    description: 'Additional CSS classes to give to the component.',
    defaultValue: 'undefined'
  }
};
