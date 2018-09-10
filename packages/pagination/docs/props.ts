import { PropAttributesMap } from '@kata-kit/doc-utils';

export const paginationProps: PropAttributesMap = {
  className: {
    type: 'string',
    description: 'Additional CSS classes to give to the button.',
    defaultValue: 'undefined'
  },
  current: {
    type: 'number',
    description: 'The current page number.',
    required: true
  },
  total: {
    type: 'number',
    description: 'Total number of pages.',
    required: true
  },
  onSelect: {
    type: '(page: number) => void',
    description:
      'Callback to run when a page number is selected. You can use this to e.g. run setState on your page state.',
    required: true
  }
};
