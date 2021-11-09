import * as React from 'react';
import { render } from '@testing-library/react';

import Circle from './Circle';

describe('components/Loading', () => {
  describe('<Circle />', () => {
    test('renders correctly', () => {
      const { container } = render(<Circle />);

      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
