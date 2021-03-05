import * as React from 'react';
import { render } from '@testing-library/react';

import Badge from './Badge';

describe('components/Badge', () => {
  describe('<Badge />', () => {
    test('renders with children', () => {
      const { container } = render(<Badge>test badge</Badge>);

      expect(container).toHaveTextContent('test badge');
    });

    test('renders with additional variants', () => {
      const { container } = render(<Badge variant="success">test badge</Badge>);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
