import reboot from '../styles/reboot';
import base from '../styles/base';
import table from '../styles/table';
import spacing from '../styles/spacing';

import 'jest-dom/extend-expect';
import 'jest-styled-components';

describe('Reset', () => {
  test('has correct styles', () => {
    // dummy test.
    expect(reboot).toBeDefined();
    expect(base).toBeDefined();
    expect(table).toBeDefined();
    expect(spacing).toBeDefined();
  });
});
