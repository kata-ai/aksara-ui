import * as React from 'react';
import { variables } from '@kata-kit/theme';
import { render } from '@testing-library/react';
import { IconicButton } from '..';

import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

describe('SupportButton', () => {
  test('renders with correct colors', () => {
    const { container } = render(<IconicButton>test button</IconicButton>);

    expect(container.firstChild).toHaveStyleRule('color', variables.colors.gray70);
  });

  test('renders with correct primary class', () => {
    const { container } = render(<IconicButton variant="primary">test button</IconicButton>);

    expect(container.firstChild).toHaveClass('primary');
  });

  test('renders with correct danger class', () => {
    const { container } = render(<IconicButton variant="danger">test button</IconicButton>);

    expect(container.firstChild).toHaveClass('danger');
  });
});
