import { PropAttributesMap } from '@kata-kit/doc-utils';

export const tooltipProps: PropAttributesMap = {
  component: {
    description: 'Insert the <code>Tooltip</code> component here.',
    type: 'React.ReactNode',
    required: true
  },
  children: {
    description: 'The children node as a target for the tooltip item.',
    type: 'React.ReactNode',
    required: true
  },
  placement: {
    description: 'The tooltip placement',
    type: "'top' | 'right' | 'bottom' | 'left'",
    defaultValue: "'right'"
  },
  className: {
    description: 'Additional CSS classes to give to the component.',
    type: 'string',
    defaultValue: 'undefined'
  },
  defaultShow: {
    description: 'Set to <code>true</code> to make tooltip visible by default',
    type: 'boolean',
    defaultValue: 'false'
  },
  trigger: {
    description: 'Event(s) where the tooltip gets triggered.',
    type: 'string | string[]',
    defaultValue: "['click', 'hover', 'focus']"
  },
  delay: {
    description:
      'Amount of delay before the tooltip shows <strong>and</strong> hides (in milliseconds).',
    type: 'number',
    defaultValue: '100'
  },
  delayHide: {
    description: 'Amount of delay before the tooltip hides (in milliseconds).',
    type: 'number'
  },
  delayShow: {
    description: 'Amount of delay before the tooltip shows (in milliseconds).',
    type: 'number'
  },
  onClick: {
    description: 'onClick event handler.',
    type: '() => void'
  },
  onMouseOver: {
    description: 'onMouseOver event handler.',
    type: '() => void'
  },
  onMouseOut: {
    description: 'onMouseOut event handler.',
    type: '() => void'
  },
  onFocus: {
    description: 'onFocus event handler.',
    type: '() => void'
  },
  onBlur: {
    description: 'onBlur event handler.',
    type: '() => void'
  }
};
