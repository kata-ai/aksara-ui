import * as React from 'react';
import { render } from '@testing-library/react';
import { Card } from './index';

describe('components/Card', () => {
  describe('Card', () => {
    test('renders correctly', () => {
      const { container } = render(<Card>example</Card>);

      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
