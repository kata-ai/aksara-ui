import * as React from 'react';
import { render } from '@testing-library/react';
import Panel from './Panel';

describe('components/Panel', () => {
  test('renders correctly', () => {
    const { container } = render(<Panel>example</Panel>);

    expect(container.firstChild).toBeInTheDocument();
  });
});
