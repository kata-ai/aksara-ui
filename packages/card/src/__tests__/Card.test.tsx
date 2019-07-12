import * as React from 'react';
import { render } from '@testing-library/react';
import { Card } from '..';

import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

describe('Card', () => {
  test('renders correctly', () => {
    const { container } = render(<Card title="Sample Card">Card test</Card>);

    expect(container.firstChild).toHaveStyleRule('background', '#ffffff');
  });
});
