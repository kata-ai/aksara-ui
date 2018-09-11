import { PropAttributesMap } from '@kata-kit/doc-utils';

export const badgeProps: PropAttributesMap = {
  color: {
    type: 'BadgeColors',
    oneOf: ["'primary'", "'secondary'", "'success'", "'warning'", "'danger'"],
    description: 'The color of the badge.',
    defaultValue: 'undefined'
  },
  className: {
    type: 'string',
    description: 'Additional CSS classes to give to the component.',
    defaultValue: 'undefined'
  }
};
