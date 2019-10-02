import * as React from 'react';
import { render } from '@testing-library/react';
import { Box } from './index';

import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

describe('foundations/box', () => {
  test('renders <Box /> correctly', () => {
    const { container } = render(<Box>example</Box>);

    expect(container.firstChild).toBeInTheDocument();
  });
});
