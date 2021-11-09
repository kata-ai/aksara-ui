import * as React from 'react';
import { render } from '@testing-library/react';
import Tabs from './Tabs';

describe('components/Tabs', () => {
  describe('Tabs', () => {
    test('renders correctly', () => {
      const { container } = render(<Tabs>example</Tabs>);

      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
