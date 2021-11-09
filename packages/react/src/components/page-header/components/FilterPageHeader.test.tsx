import { act, fireEvent, render, waitFor } from '@testing-library/react';
import * as React from 'react';
import FilterPageHeader, { FilterPageHeaderProps, MAX_TAG_FILTER } from './FilterPageHeader';

describe('Components/PageHeader/FilterPageHeader', () => {
  const FilterPageHeaderTemplate = (
    <FilterPageHeader
      filterData={[
        { label: 'Filter A', value: 'filter_a' },
        { label: 'Keyword B', value: 'keyword_b' },
        { label: 'Filter C', value: 'filter_c' },
        { label: 'Order D', value: 'order_d' },
        { label: 'Order E', value: 'order_e' },
        { label: 'Filter F', value: 'filter f' },
        { label: 'Filter G', value: 'filter_g' },
        { label: 'Filter H', value: 'keyword_h' },
      ]}
      onRemoveFilter={() => console.log('onRemoveFilter')}
      orderByOptions={[
        {
          key: 'created_date',
          label: 'Date',
          options: [
            { label: 'Newest', value: 'created_date-desc' },
            { label: 'Oldest', value: 'created_date-asc' },
          ],
        },
        {
          key: 'transaction',
          label: 'Transaction',
          options: [
            { label: 'Highest', value: 'transaction_value-desc' },
            { label: 'Lowest', value: 'transaction_value-asc' },
          ],
        },
      ]}
    />
  );
  describe('FilterPageHeader', () => {
    test('onClickFilter should be called when user click Button Filter', () => {
      const filterMockHandler = jest.fn();
      const { getByTestId } = render(
        React.cloneElement<FilterPageHeaderProps>(FilterPageHeaderTemplate, {
          onClickFilter: filterMockHandler,
        })
      );

      const filter = getByTestId('filter');
      expect(filter).toBeVisible();
      fireEvent.click(filter);
      expect(filterMockHandler).toHaveBeenCalled();
    });

    test('it should render order input based on orderByOptions', () => {
      const { getAllByTestId } = render(
        React.cloneElement<FilterPageHeaderProps>(FilterPageHeaderTemplate, {
          orderByOptions: [
            {
              key: 'created_date',
              label: 'Date',
              options: [
                { label: 'Newest', value: 'created_date-desc' },
                { label: 'Oldest', value: 'created_date-asc' },
              ],
            },
            {
              key: 'transaction',
              label: 'Transaction',
              options: [
                { label: 'Highest', value: 'transaction_value-desc' },
                { label: 'Lowest', value: 'transaction_value-asc' },
              ],
            },
          ],
        })
      );

      const filter = getAllByTestId('orderOption');
      expect(filter.length).toBe(2);
    });
    test(`it should render filter tag based on filterData, max showed filter tag is ${MAX_TAG_FILTER}`, async () => {
      const { getAllByTestId, getByText } = render(
        React.cloneElement<FilterPageHeaderProps>(FilterPageHeaderTemplate, {
          filterData: [
            { label: 'Filter A', value: 'filter_a' },
            { label: 'Keyword B', value: 'keyword_b' },
            { label: 'Filter C', value: 'filter_c' },
            { label: 'Order D', value: 'order_d' },
            { label: 'Order E', value: 'order_e' },
            { label: 'Filter F', value: 'filter f' },
            { label: 'Filter G', value: 'filter_g' },
            { label: 'Filter H', value: 'keyword_h' },
          ],
        })
      );

      const filterTag = getAllByTestId('filter-tag');
      expect(filterTag.length).toBe(MAX_TAG_FILTER);

      const popOver = getByText(/\+ Filter/i);
      act(() => {
        fireEvent.click(popOver);
      });
      const filterTagMore = getAllByTestId('filter-tag-more');
      await waitFor(() => expect(filterTagMore.length).toBe(2));
    });
  });
});
