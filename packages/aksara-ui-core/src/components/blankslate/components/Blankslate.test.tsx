import * as React from 'react';
import { render } from '@testing-library/react';
import Blankslate from './Blankslate';

describe('components/Blankslate', () => {
  test('renders with title', () => {
    const { getByText } = render(<Blankslate variant="page" title="Empty Text" content="Blankslate test" />);

    const title = getByText('Empty Text');
    expect(title).toBeInTheDocument();
  });

  test("doesn't render title in inner variant", () => {
    const { queryByText } = render(<Blankslate variant="inner" title="Empty Text" content="Blankslate test" />);

    const title = queryByText(/Empty Text/);
    expect(title).not.toBeInTheDocument();
  });
});
