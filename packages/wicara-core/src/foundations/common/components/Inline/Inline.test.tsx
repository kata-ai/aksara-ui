import * as React from 'react';
import { render } from '@testing-library/react';

import { Box } from '../../../box';
import Inline from './Inline';

describe('foundations/common', () => {
  test('renders <Inline /> correctly', () => {
    const { container } = render(
      <Inline>
        <Box>example</Box>
        <Box>example</Box>
        <Box>example</Box>
      </Inline>
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});
