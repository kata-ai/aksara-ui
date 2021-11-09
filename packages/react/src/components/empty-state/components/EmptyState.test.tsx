import * as React from 'react';
import { render } from '@testing-library/react';
import EmptyState from './EmptyState';

describe('components/Blankslate', () => {
  test('renders with title', () => {
    const { getByRole } = render(<EmptyState variant="page" title="Empty Text" content="Blankslate test" />);

    const title = getByRole('heading', {
      name: /empty text/i,
    });
    expect(title).toBeVisible();
  });
});
