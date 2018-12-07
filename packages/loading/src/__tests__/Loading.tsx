import * as React from 'react';
import { render } from 'react-testing-library';

import 'jest-dom/extend-expect';
import 'jest-styled-components';

import Circle from '../Circle';
import InfiniteScrollSpinner from '../InfiniteScrollSpinner';
import Robot from '../Robot';

describe('Circle', () => {
  test('renders correctly', () => {
    const { container } = render(<Circle />);

    expect(container.firstChild).toBeInTheDocument();
  });

  test('renders with the correct size', () => {
    const { getByTestId } = render(<Circle size={40} />);
    const svg = getByTestId('circle-icon');

    expect(svg).toHaveAttribute('width', '40px');
    expect(svg).toHaveAttribute('height', '40px');
  });
});

describe('InfiniteScrollSpinner', () => {
  test('renders correctly', () => {
    const { container } = render(<InfiniteScrollSpinner />);

    expect(container.firstChild).toBeInTheDocument();
  });
});

describe('Robot', () => {
  test('renders correctly', () => {
    const { container } = render(<Robot />);

    expect(container.firstChild).toBeInTheDocument();
  });
});
