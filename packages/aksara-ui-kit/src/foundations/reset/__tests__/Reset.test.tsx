import * as React from 'react';
import { render } from '@testing-library/react';

import { AksaraReset } from '..';

import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

describe('foundations/Reset', () => {
  test('renders correctly', () => {
    const { container } = render(<AksaraReset>children</AksaraReset>);

    expect(container).toBeInTheDocument();
  });
});
