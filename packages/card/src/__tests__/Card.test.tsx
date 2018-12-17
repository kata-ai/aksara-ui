import * as React from 'react';
import { render } from 'react-testing-library';
import { Card } from '..';

import 'jest-dom/extend-expect';
import 'jest-styled-components';

describe('Card', () => {
  test('renders correctly', () => {
    const { container } = render(<Card title="Sample Card">Card test</Card>);

    expect(container.firstChild).toHaveStyleRule('background', '#ffffff');
  });
});
