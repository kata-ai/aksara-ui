import * as React from 'react';
import { render } from '@testing-library/react';

import { Box } from '../box';
import Stack from './Stack';

describe('foundations/common', () => {
  test('renders <Stack /> correctly', () => {
    const { container } = render(
      <Stack>
        <Box>example</Box>
        <Box>example</Box>
        <Box>example</Box>
      </Stack>
    );

    expect(container.firstChild).toBeInTheDocument();
  });

  test('renders <Stack /> with fragments', () => {
    const { container } = render(
      <Stack>
        <>example</>
        <>example</>
        <>example</>
      </Stack>
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});
