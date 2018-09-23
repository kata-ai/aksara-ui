import { PropAttributesMap } from '@kata-kit/doc-utils';

export const cardProps: PropAttributesMap = {
  title: {
    type: 'string',
    description: 'Card title'
  },
  action: {
    type: 'React.ReactElement<HTMLAllCollection>',
    description: 'Card action element. Can be any valid React element.'
  },
  asButton: {
    type: 'boolean',
    description: 'Whether render the card as button.',
    defaultValue: 'false'
  },
  noWrap: {
    type: 'boolean',
    description: 'Whether render the card without header.'
  },
  disabled: {
    type: 'boolean',
    description: 'Whether the card disabled or not.'
  },
  className: {
    type: 'string',
    description: 'Additional component CSS class.'
  },
  onClick: {
    type: 'Function',
    description: 'Card onClick event handler.'
  },
  style: {
    type: 'CSSProperties',
    description: 'Card additional CSS styles.'
  },
  avatar: {
    type: 'any',
    description: 'Render avatar image.'
  }
};

export const cardGridProps: PropAttributesMap = {
  className: {
    type: 'string',
    description: 'Additional card CSS class.'
  },
  centered: {
    type: 'boolean',
    description: 'Whether the content inside card grid centered or not.'
  },
  cardsPerRow: {
    type: '2 | 3',
    description: 'How many card will be rendered in a row.'
  }
};
