import * as React from 'react';
import { render } from '@testing-library/react';
import CardHeader from './CardHeader';

describe('components/Card', () => {
  describe('CardHeader', () => {
    test('renders correctly', () => {
      const { container } = render(<CardHeader>example</CardHeader>);

      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
