import * as React from 'react';
import { render } from '@testing-library/react';
import CardFooter from './CardFooter';

describe('components/Card', () => {
  describe('CardFooter', () => {
    test('renders correctly', () => {
      const { container } = render(<CardFooter>example</CardFooter>);

      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
