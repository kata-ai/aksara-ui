import * as React from 'react';
import { render } from '@testing-library/react';
import UnstyledAnchor from './UnstyledAnchor';

describe('foundations/common', () => {
  test('renders <UnstyledAnchor /> correctly', () => {
    const { container } = render(<UnstyledAnchor>example</UnstyledAnchor>);

    expect(container.firstChild).toBeInTheDocument();
  });
});
