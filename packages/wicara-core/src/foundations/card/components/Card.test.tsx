import * as React from 'react';
import { render } from '@testing-library/react';
import { Card } from './index';

import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

describe('foundations/card', () => {
  test('renders <Card /> correctly', () => {
    const { container } = render(<Card>example</Card>);

    expect(container.firstChild).toBeInTheDocument();
  });
});
