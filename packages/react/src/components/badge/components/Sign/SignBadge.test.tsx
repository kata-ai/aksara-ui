import * as React from 'react';
import { render } from '@testing-library/react';

import SignBadge from './SignBadge';

describe('components/Badge/SignBadge', () => {
  describe('<SignBadge />', () => {
    test('renders with children', () => {
      const { container } = render(<SignBadge>test badge</SignBadge>);

      expect(container).toHaveTextContent('test badge');
    });
  });
});
