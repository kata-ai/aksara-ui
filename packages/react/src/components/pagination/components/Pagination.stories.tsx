import * as React from 'react';
import { action } from '@storybook/addon-actions';

import Pagination from './Pagination';
import { Box } from '../../../layout';
import PaginationDetail from './PaginationDetail';
import PaginationFilter from './PaginationFilter';

export default {
  title: 'Core/Components/Pagination',
  component: Pagination,
};

export const Example = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <Pagination
      current={currentPage}
      total={5}
      onSelect={select => {
        setCurrentPage(select);
        action('select-page')(select);
      }}
    />
  );
};

export const LargePageNumbers = () => {
  const [currentPage, setCurrentPage] = React.useState(10);

  return (
    <Pagination
      current={currentPage}
      total={50}
      onSelect={select => {
        setCurrentPage(select);
        action('select-page')(select);
      }}
    />
  );
};

export const WithPaginationDetail = () => {
  const [currentPage, setCurrentPage] = React.useState(10);
  const [limit, setLimit] = React.useState(10);

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <PaginationDetail page={currentPage} limit={limit} total={50 * limit} length={limit} />
      <Pagination
        current={currentPage}
        total={50}
        onSelect={select => {
          setCurrentPage(select);
          action('select-page')(select);
        }}
      />
      <PaginationFilter
        selectedItem={limit}
        handleSelectedItemChange={({ selectedItem }) => {
          if (selectedItem) {
            setLimit(selectedItem);
          }
        }}
        items={[10, 20, 30, 40, 50]}
        placeholder="limit"
      />
    </Box>
  );
};
