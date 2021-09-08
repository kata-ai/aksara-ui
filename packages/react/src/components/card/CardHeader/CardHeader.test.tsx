import * as React from 'react';
import { render } from '@testing-library/react';
import CardHeader from './CardHeader';

describe('components/Card', () => {
  describe('CardHeader', () => {
    test('renders heading correctly', () => {
      const { getByRole } = render(<CardHeader title="example" />);

      const heading = getByRole('heading', {
        name: /deno/i,
      });
      expect(heading).toBeVisible();
    });
  });
});
