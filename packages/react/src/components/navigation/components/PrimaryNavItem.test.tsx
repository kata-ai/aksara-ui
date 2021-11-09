import { IconGrid } from '@aksara-ui/icons';
import { render } from '@testing-library/react';
import * as React from 'react';
import PrimaryNavItem from './PrimaryNavItem';

describe('Components/Navigation', () => {
  describe('PrimaryNavItem', () => {
    test('renders correctly', () => {
      const { getByRole } = render(<PrimaryNavItem title="Flow" href="/flow" icon={IconGrid} />);

      const link = getByRole('link', { name: /flow/i });
      expect(link).toBeVisible();
    });
  });
});
