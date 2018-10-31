import * as React from 'react';
import { variables } from '@kata-kit/theme';
import { render } from 'react-testing-library';
import { FloatingButton } from '..';

import 'jest-dom/extend-expect';
import 'jest-styled-components';

describe('FloatingButton', () => {
  test('renders with correct styles + colors', () => {
    const { container } = render(
      <FloatingButton color="primary">test button</FloatingButton>
    );

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      variables.colors.white
    );

    expect(container.firstChild).toHaveStyleRule(
      'color',
      variables.colors.gray60
    );
  });
});
