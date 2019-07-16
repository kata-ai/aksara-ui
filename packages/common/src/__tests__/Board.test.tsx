import * as React from 'react';
import { render } from '@testing-library/react';
import { Board } from '..';

import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

describe('Board', () => {
  test('renders correctly', () => {
    const { container } = render(<Board>Board test</Board>);

    expect(container.firstChild).toHaveStyleRule('background-color', '#fff');
  });

  test('renders correctly with title', () => {
    const { getByTestId } = render(
      <Board headingChildren={<h1 data-testid="Board-heading">Heading</h1>}>
        Board test
      </Board>
    );

    const heading = getByTestId('Board-heading');
    expect(heading).toHaveTextContent('Heading');
  });

  test('renders correctly with footer', () => {
    const { getByTestId } = render(
      <Board footerChildren={<span data-testid="Board-footer">Footer</span>}>
        Board test
      </Board>
    );

    const footer = getByTestId('Board-footer');
    expect(footer).toHaveTextContent('Footer');
  });
});
