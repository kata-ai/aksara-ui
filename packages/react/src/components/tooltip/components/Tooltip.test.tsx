import * as React from 'react';
import { render } from '@testing-library/react';

import Tooltip from './Tooltip';

describe('components/Tooltip', () => {
  test('renders properly', () => {
    const { container } = render(
      <Tooltip placement="top" content="Tooltip text">
        <span>Top</span>
      </Tooltip>
    );

    expect(container).toBeInTheDocument();
  });
});
