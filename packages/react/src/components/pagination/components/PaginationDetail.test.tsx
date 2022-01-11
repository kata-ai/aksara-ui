import * as React from 'react';
import { render } from '@testing-library/react';

import { PaginationDetail } from '..';

describe('components/PaginationDetail', () => {
  test('renders first page correctly', () => {
    const { getByText } = render(<PaginationDetail page={1} limit={10} length={98} />);
    const text = getByText(/Showing 1-10 out of 98/i);
    expect(text).toBeVisible();
  });
  test('renders last page correctly', () => {
    const { getByText } = render(<PaginationDetail page={10} limit={10} length={98} />);
    const text = getByText(/Showing 91-98 out of 98/i);
    expect(text).toBeVisible();
  });
});
