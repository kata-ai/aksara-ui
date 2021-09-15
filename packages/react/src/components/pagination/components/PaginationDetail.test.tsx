import * as React from 'react';
import { render } from '@testing-library/react';

import PaginationDetail from './PaginationDetail';

describe('components/PaginationDetail', () => {
  test('renders correctly', () => {
    const { container } = render(<PaginationDetail page={10} limit={10} total={10} length={10} />);

    expect(container).toBeInTheDocument();
  });
});
