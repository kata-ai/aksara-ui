import * as React from 'react';
import { render } from '@testing-library/react';

import InteractiveCard from './InteractiveCard';

describe('components/InteractiveCard', () => {
  describe('<InteractiveCard />', () => {
    test('renders correctly', () => {
      const { container } = render(<InteractiveCard>henlo</InteractiveCard>);

      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
