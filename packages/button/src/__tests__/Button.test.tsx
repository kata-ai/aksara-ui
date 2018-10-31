import * as React from 'react';
import { variables } from '@kata-kit/theme';
import { render } from 'react-testing-library';
import { Button } from '..';

import 'jest-dom/extend-expect';
import 'jest-styled-components';

describe('Button', () => {
  test('renders with custom colors', () => {
    const { container } = render(<Button color="primary">test button</Button>);

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      variables.colors.cobalt,
      {
        modifier: ':not(:disabled):not(.disabled)'
      }
    );

    expect(container.firstChild).toHaveStyleRule(
      'color',
      variables.colors.white,
      {
        modifier: ':not(:disabled):not(.disabled)'
      }
    );
  });
});
