import * as React from 'react';
import { variables } from '@kata-kit/theme';
import { render } from '@testing-library/react';
import { SupportButton } from '..';

import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

describe('SupportButton', () => {
  test('renders with correct colors', () => {
    const { container } = render(<SupportButton>test button</SupportButton>);

    expect(container.firstChild).toHaveStyleRule('color', variables.colors.gray50);
  });
});
