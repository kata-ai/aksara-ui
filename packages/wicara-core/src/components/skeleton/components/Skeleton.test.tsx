import * as React from 'react';
import { render } from '@testing-library/react';
import { Skeleton } from '..';

import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

describe('components/Skeleton', () => {
  test('renders properly', () => {
    const { container } = render(<Skeleton />);

    expect(container).toBeInTheDocument();
  });

  test('renders correct number of lines if numberOfLines is set', () => {
    const numberOfLines = 2;
    const { container } = render(<Skeleton className="skeleton" numberOfLines={numberOfLines} />);

    const elements = container.querySelectorAll('.skeleton');
    expect(elements.length).toEqual(numberOfLines);
  });
});
