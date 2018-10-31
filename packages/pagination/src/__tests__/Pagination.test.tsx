import * as React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { Pagination } from '..';

import 'jest-dom/extend-expect';
import 'jest-styled-components';

jest.mock('lodash-es/isNumber');

const handleSelect = jest.fn<number>(x => x);

describe('Pagination', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(
      <Pagination current={1} total={5} onSelect={handleSelect} />
    );

    const root = getByTestId('Pagination-root');
    expect(root).toHaveStyleRule('display', 'inline-block');
  });

  test('correctly calls function w/ selected page', () => {
    const { getByText } = render(
      <Pagination current={1} total={5} onSelect={handleSelect} />
    );

    const button = getByText('2');
    fireEvent.click(button);

    expect(handleSelect).toBeCalledTimes(1);
    expect(handleSelect).toReturnWith(2);
  });

  test('previous page button is disabled on first page', () => {
    const { getByTestId } = render(
      <Pagination current={1} total={5} onSelect={handleSelect} />
    );

    const previousPage = getByTestId('Pagination-previousButton');
    expect(previousPage).toHaveAttribute('disabled');
  });

  test('next page button is disabled on last page', () => {
    const { getByTestId } = render(
      <Pagination current={5} total={5} onSelect={handleSelect} />
    );

    const previousPage = getByTestId('Pagination-nextButton');
    expect(previousPage).toHaveAttribute('disabled');
  });
});
