import * as React from 'react';
import { render } from '@testing-library/react';

import Spinner from './Spinner';

describe('components/Loading', () => {
  describe('<Spinner />', () => {
    test('renders correctly', () => {
      const { container } = render(<Spinner />);

      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
