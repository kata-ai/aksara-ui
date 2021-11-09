import { IconGrid } from '@aksara-ui/icons';
import { render } from '@testing-library/react';
import * as React from 'react';
import SecondaryNavItem from './SecondaryNavItem';

describe('Components/Navigation', () => {
  describe('PrimaryNavItem', () => {
    test('renders correctly', () => {
      const { getByRole } = render(<SecondaryNavItem title="Flow" href="/flow" icon={IconGrid} />);

      const link = getByRole('link', { name: /flow/i });
      expect(link).toBeVisible();
    });

    test('renders with label', () => {
      const { getByText } = render(<SecondaryNavItem title="Flow" href="/flow" labelText="Label" icon={IconGrid} />);

      const link = getByText(/label/i);
      expect(link).toBeVisible();
    });
  });
});
