import * as React from 'react';
import { render } from 'react-testing-library';

import { Box } from './Box';

import 'jest-dom/extend-expect';
import 'jest-styled-components';

describe('components/Box', () => {
  test('renders correctly', () => {
    const { container } = render(<Box>test element</Box>);

    expect(container.firstChild).toBeInTheDocument();
  });
});
