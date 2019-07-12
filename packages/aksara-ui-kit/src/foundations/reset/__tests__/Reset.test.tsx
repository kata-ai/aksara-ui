import * as React from 'react';
import { render } from '@testing-library/react';

import reboot from '../styles/reboot';
import base from '../styles/base';
import { AksaraReset } from '..';

import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

describe('foundations/Reset', () => {
  test('has correct styles', () => {
    // dummy test.
    expect(reboot).toBeDefined();
    expect(base).toBeDefined();
  });

  test('renders correctly', () => {
    const { container } = render(<AksaraReset>children</AksaraReset>);

    expect(container).toBeInTheDocument();
  });
});
