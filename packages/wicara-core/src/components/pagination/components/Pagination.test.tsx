import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Pagination from './Pagination';

import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

const handleSelect = jest.fn(x => x);

describe('Pagination', () => {
  test('renders correctly', () => {
    const { container } = render(<Pagination current={1} total={5} onSelect={handleSelect} />);

    expect(container).toBeInTheDocument();
  });

  test('correctly calls function w/ selected page', () => {
    const { getByText } = render(<Pagination current={1} total={5} onSelect={handleSelect} />);

    const button = getByText('2');
    fireEvent.click(button);

    expect(handleSelect).toBeCalledTimes(1);
    expect(handleSelect).toReturnWith(2);
  });

  test('previous page button is disabled on first page', () => {
    const { getByText } = render(<Pagination current={1} total={5} onSelect={handleSelect} />);

    const previousPage = getByText('«');
    expect(previousPage).toHaveAttribute('disabled');
  });

  test('next page button is disabled on last page', () => {
    const { getByText } = render(<Pagination current={5} total={5} onSelect={handleSelect} />);

    const previousPage = getByText('»');
    expect(previousPage).toHaveAttribute('disabled');
  });
});
