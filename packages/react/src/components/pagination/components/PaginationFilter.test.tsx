import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

import PaginationFilter from './PaginationFilter';

const handleSelect = jest.fn(x => x.selectedItem);

describe('components/PaginationFilter', () => {
  test('renders correctly', () => {
    const { container, getByText } = render(<PaginationFilter items={[20, 30]} limit={10} label={'Limit'} />);
    const text = getByText('Limit');
    const displayValue = getByText('10');
    expect(container).toBeInTheDocument();
    expect(text).toBeVisible();
    expect(displayValue).toBeVisible();
  });

  test('handle change value', () => {
    const { getByText } = render(
      <PaginationFilter items={[20, 30]} limit={10} handleSelectedItemChange={handleSelect} label={'Limit'} />
    );
    const button = getByText('10');
    fireEvent.click(button);
    const limit20 = getByText('20');
    fireEvent.click(limit20);

    expect(handleSelect).toReturnWith(20);
  });
});
