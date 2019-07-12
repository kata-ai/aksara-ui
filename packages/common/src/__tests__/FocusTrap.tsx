import * as React from 'react';
import { render } from '@testing-library/react';
import { FocusTrap } from '..';

import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

describe('EmptyMessage', () => {
  test('renders with correct tabindex', () => {
    const { container } = render(<FocusTrap active={false}>Board test</FocusTrap>);

    expect(container.firstChild).toHaveAttribute('tabindex', '-1');
  });

  test('renders with correct tabindex (active)', () => {
    const { container } = render(<FocusTrap active>Board test</FocusTrap>);

    expect(container.firstChild).toHaveAttribute('tabindex', '-1');
  });
});
