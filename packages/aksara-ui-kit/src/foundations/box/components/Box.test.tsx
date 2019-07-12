import * as React from 'react';
import { render } from '@testing-library/react';

import { Box } from './Box';

import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

describe('components/Box', () => {
  test('renders correctly', () => {
    const { container } = render(<Box>test element</Box>);

    expect(container.firstChild).toBeInTheDocument();
  });
});
