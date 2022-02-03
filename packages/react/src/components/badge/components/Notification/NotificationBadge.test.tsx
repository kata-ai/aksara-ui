import * as React from 'react';
import { render } from '@testing-library/react';

import NotificationBadge from './NotificationBadge';

describe('components/Badge/NotificationBadge', () => {
  describe('<NotificationBadge />', () => {
    test('renders with correctly', () => {
      const { container } = render(<NotificationBadge value="99" />);

      expect(container).toHaveTextContent('99');
    });
  });
});
