import * as React from 'react';
import { render } from '@testing-library/react';
import Blankslate from './Blankslate';

describe('components/Blankslate', () => {
  test('renders with title', () => {
    const { getByText } = render(<Blankslate title="Empty Text">Board test</Blankslate>);

    const title = getByText('Empty Text');
    expect(title).toBeInTheDocument();
  });
});
