import * as React from 'react';
import { render } from '@testing-library/react';

import TooltipInner from './TooltipInner';

describe('components/TooltipInner', () => {
  test('renders properly', () => {
    const { container } = render(
      <TooltipInner placement="top" content="Tooltip text">
        <span>Top</span>
      </TooltipInner>
    );

    expect(container).toBeInTheDocument();
  });
});
