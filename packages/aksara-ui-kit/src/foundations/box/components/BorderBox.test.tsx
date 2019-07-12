import * as React from 'react';
import { render } from '@testing-library/react';

import { BorderBox } from './BorderBox';

import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

describe('components/BorderBox', () => {
  test('renders correctly', () => {
    const { container } = render(<BorderBox>test element</BorderBox>);

    expect(container.firstChild).toBeInTheDocument();
  });
});
