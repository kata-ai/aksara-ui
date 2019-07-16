import * as React from 'react';
import { render } from '@testing-library/react';
import { EmptyMessage } from '..';

import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

describe('EmptyMessage', () => {
  test('renders with title', () => {
    const { getByTestId } = render(
      <EmptyMessage title="Empty Text">Board test</EmptyMessage>
    );

    const title = getByTestId('EmptyMessage-title');
    expect(title).toHaveTextContent('Empty Text');
  });

  test('renders without title', () => {
    const { getByTestId } = render(<EmptyMessage>Board test</EmptyMessage>);

    const title = getByTestId('EmptyMessage-title');
    expect(title).toHaveTextContent('Empty');
  });
});
