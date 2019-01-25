import * as React from 'react';
import { render } from 'react-testing-library';
import { Skeleton } from '..';

import 'jest-dom/extend-expect';
import 'jest-styled-components';

describe('Skeleton', () => {
  test('properly', () => {
    const { getByTestId } = render(<Skeleton />);

    const root = getByTestId('Skeleton-root');
    expect(root).toBeInTheDocument();
  });

  test('renders without title', () => {
    const { getByTestId } = render(<Skeleton numberOfLines={2} />);

    const root = getByTestId('Skeleton-root');
    const multiline = getByTestId('Skeleton-multiline');
    expect(root).toBeInTheDocument();
    expect(multiline).toBeInTheDocument();
  });
});
