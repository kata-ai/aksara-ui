import * as React from 'react';
import { render } from 'react-testing-library';

import { BorderBox } from './BorderBox';

import 'jest-dom/extend-expect';
import 'jest-styled-components';

describe('components/BorderBox', () => {
  test('renders correctly', () => {
    const { container } = render(<BorderBox>test element</BorderBox>);

    expect(container.firstChild).toBeInTheDocument();
  });
});
