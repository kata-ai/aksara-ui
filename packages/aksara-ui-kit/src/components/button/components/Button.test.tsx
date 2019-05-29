import * as React from 'react';
import { render } from 'react-testing-library';

import { Button } from './Button';
import { colors } from '../../../utils';

import 'jest-dom/extend-expect';
import 'jest-styled-components';

describe('Button', () => {
  test('renders with default style', () => {
    const { container } = render(<Button variant="default">test button</Button>);

    expect(container.firstChild).toHaveStyleRule('background-color', colors.grey02);
    expect(container.firstChild).toHaveStyleRule('color', colors.grey06);
  });
});
