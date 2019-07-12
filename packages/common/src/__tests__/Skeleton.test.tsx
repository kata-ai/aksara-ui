import * as React from 'react';
import { render } from '@testing-library/react';
import { Skeleton } from '..';

import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

describe('Skeleton', () => {
  test('renders properly', () => {
    const { getByTestId } = render(<Skeleton />);

    const root = getByTestId('Skeleton-root');
    expect(root).toBeInTheDocument();
  });

  test('renders correct number of lines if numberOfLines is set', () => {
    const numberOfLines = 2;
    const { getByTestId, getAllByTestId } = render(<Skeleton numberOfLines={numberOfLines} />);

    const roots = getAllByTestId('Skeleton-root');
    const multiline = getByTestId('Skeleton-multiline');
    expect(multiline).toBeInTheDocument();
    expect(roots).toHaveLength(numberOfLines);
    roots.map(root => expect(root).toBeInTheDocument());
  });
});
