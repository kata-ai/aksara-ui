import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Pagination from './Pagination';

const handleSelect = jest.fn(x => x);

describe('components/Pagination', () => {
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

    const previousPageButton = getByText('Previous Page').parentElement;
    expect(previousPageButton).toHaveAttribute('disabled');
  });

  test('next page button is disabled on last page', () => {
    const { getByText } = render(<Pagination current={5} total={5} onSelect={handleSelect} />);

    const nextPageButton = getByText('Next Page').parentElement;
    expect(nextPageButton).toHaveAttribute('disabled');
  });
});
