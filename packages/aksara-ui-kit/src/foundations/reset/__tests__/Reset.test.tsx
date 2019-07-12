import reboot from '../styles/reboot';
import base from '../styles/base';

import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

describe('foundations/Reset', () => {
  test('has correct styles', () => {
    // dummy test.
    expect(reboot).toBeDefined();
    expect(base).toBeDefined();
  });
});
