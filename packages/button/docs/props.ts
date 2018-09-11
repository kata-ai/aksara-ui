import { PropAttributesMap } from '@kata-kit/doc-utils';

export const buttonProps: PropAttributesMap = {
  disabled: {
    type: 'boolean',
    description: 'Whether the button is disabled or not.',
    defaultValue: 'false'
  },
  color: {
    type: 'ButtonColors',
    oneOf: [
      "'primary'",
      "'secondary'",
      "'success'",
      "'danger'",
      "'warning'",
      "'info'",
      "'white'"
    ],
    description: 'The color of the button.',
    defaultValue: "'secondary'"
  },
  size: {
    type: 'ButtonSizes',
    oneOf: ["'sm'", "'lg'"],
    description: 'The size of the button.',
    defaultValue: "'lg'"
  },
  isIcon: {
    type: 'boolean',
    description: 'Whether the button is an icon button or not.',
    defaultValue: 'false'
  },
  className: {
    type: 'string',
    description: 'Additional CSS classes to give to the button.',
    defaultValue: 'undefined'
  },
  onClick: {
    type: 'React.MouseEventHandler<HTMLButtonElement>',
    description: 'Event handler triggered during <code>onClick</code>.',
    defaultValue: 'undefined'
  },
  type: {
    type: 'string',
    description: 'The default HTML type of the button.',
    defaultValue: "'button'"
  },
  active: {
    type: 'boolean',
    deprecated: true,
    description: 'Whether the button is active or not.',
    defaultValue: 'false'
  },
  loading: {
    type: 'boolean',
    description: 'Triggers the loading state of the button.',
    defaultValue: 'false'
  },
  outline: {
    type: 'boolean',
    deprecated: true,
    description: 'If the button is an outline button, define it here.',
    defaultValue: 'false'
  }
};

export const floatingButtonProps: PropAttributesMap = {
  disabled: {
    type: 'boolean',
    description: 'Whether the button is disabled or not.',
    defaultValue: 'false'
  },
  color: {
    type: 'ButtonColors',
    oneOf: [
      "'primary'",
      "'secondary'",
      "'success'",
      "'danger'",
      "'warning'",
      "'info'",
      "'white'"
    ],
    description: 'The color of the button.',
    defaultValue: "'secondary'"
  },
  icon: {
    type: 'string',
    description: 'Icon of the button',
    defaultValue: 'undefined'
  },
  size: {
    type: 'ButtonSizes',
    oneOf: ["'sm'", "'lg'"],
    description: 'The size of the button.',
    defaultValue: "'lg'"
  },
  className: {
    type: 'string',
    description: 'Additional CSS classes to give to the button.',
    defaultValue: 'undefined'
  },
  onClick: {
    type: 'React.MouseEventHandler<HTMLButtonElement>',
    description: 'Event handler triggered during <code>onClick</code>.',
    defaultValue: 'undefined'
  },
  type: {
    type: 'string',
    description: 'The default HTML type of the button.',
    defaultValue: "'button'"
  },
  active: {
    type: 'boolean',
    deprecated: true,
    description: 'Whether the button is active or not.',
    defaultValue: 'false'
  },
  isLoading: {
    type: 'boolean',
    description: 'Triggers the loading state of the button.',
    defaultValue: 'false'
  }
};

export const toggleButtonProps: PropAttributesMap = {
  active: {
    type: 'boolean',
    description: 'Whether the button is active or not.',
    defaultValue: 'false'
  },
  onToggle: {
    type: '(state: boolean) => void',
    description: 'Toggle event handler.'
  },
  renderActive: {
    type: 'JSX.Element',
    description: 'Render active element',
    required: true
  },
  renderInactive: {
    type: 'JSX.Element',
    description: 'Render inactive element',
    required: true
  }
};

export const supportButtonProps: PropAttributesMap = {
  disabled: {
    type: 'boolean',
    description: 'Whether the button is disabled or not.',
    defaultValue: 'false'
  },
  active: {
    type: 'boolean',
    description: 'Whether the button is active or not.',
    defaultValue: 'false'
  },
  size: {
    type: 'ButtonSizes',
    oneOf: ["'sm'", "'lg'"],
    description: 'The size of the button.',
    defaultValue: "'lg'"
  },
  isIcon: {
    type: 'boolean',
    description: 'Whether the button is an icon button or not.',
    defaultValue: 'false'
  },
  block: {
    type: 'boolean',
    description: 'Whether the button use full width of the container.',
    defaultValue: 'false'
  },
  className: {
    type: 'string',
    description: 'Additional CSS classes to give to the button.',
    defaultValue: 'undefined'
  },
  onClick: {
    type: 'React.MouseEventHandler<HTMLButtonElement>',
    description: 'Event handler triggered during <code>onClick</code>.',
    defaultValue: 'undefined'
  },
  type: {
    type: 'string',
    description: 'The default HTML type of the button.',
    defaultValue: "'button'"
  },
  loading: {
    type: 'boolean',
    description: 'Triggers the loading state of the button.',
    defaultValue: 'false'
  },
  outline: {
    type: 'boolean',
    deprecated: true,
    description: 'If the button is an outline button, define it here.',
    defaultValue: 'false'
  }
};
