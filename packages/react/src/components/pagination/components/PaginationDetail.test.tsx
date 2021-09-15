import * as React from 'react';
import { render } from '@testing-library/react';

import PaginationDetail from './PaginationDetail';

describe('components/PaginationDetail', () => {
  test('renders correctly', () => {
    const { getByText } = render(<PaginationDetail page={1} limit={10} total={10} length={10} />);
    const text = getByText(/Showing 1-10 of 10 data/i);
    expect(text).toBeVisible();
  });
});
