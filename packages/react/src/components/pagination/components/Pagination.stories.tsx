import * as React from 'react';
import { action } from '@storybook/addon-actions';

import { Story } from '@storybook/react';
import Pagination from './Pagination';
import { Box } from '../../../layout';
import PaginationDetail, { PaginationDetailProps } from './PaginationDetail';
import PaginationFilter from './PaginationFilter';

export default {
  title: 'Core/Components/Pagination',
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
export const PaginationFilterSample = () => {
  const [limit, setLimit] = React.useState(10);
  return (
    <Box mt={64}>
      <PaginationFilter
        selectedItem={limit}
        onChange={selectedItem => {
          if (selectedItem) {
            setLimit(selectedItem);
          }
        }}
        items={[10, 20, 30, 40, 50]}
      />
    </Box>
  );
};

export const PaginationDetailSample: Story<PaginationDetailProps> = ({ page, limit, length }) => {
  return <PaginationDetail page={page} limit={limit} length={length} />;
};
PaginationDetailSample.args = {
  page: 1,
  limit: 10,
  length: 98,
};

export const WithPaginationDetail = () => {
  const [currentPage, setCurrentPage] = React.useState(10);
  const [limit, setLimit] = React.useState(10);
  const length = 475;
  const totalPages = Math.ceil(length / limit);

  return (
    <Box display="flex" flexDirection="column" height="80vh" justifyContent="space-between">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <PaginationDetail page={currentPage} limit={limit} length={length} />
        <Pagination
          current={currentPage}
          total={totalPages}
          onSelect={select => {
            setCurrentPage(select);
            action('select-page')(select);
          }}
        />
        <PaginationFilter
          selectedItem={limit}
          onChange={selectedItem => {
            if (selectedItem) {
              setLimit(selectedItem);
            }
          }}
          items={[10, 20, 30, 40, 50]}
        />
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <PaginationDetail page={currentPage} limit={limit} length={length} />
        <Pagination
          current={currentPage}
          total={totalPages}
          onSelect={select => {
            setCurrentPage(select);
            action('select-page')(select);
          }}
        />
        <PaginationFilter
          selectedItem={limit}
          onChange={selectedItem => {
            if (selectedItem) {
              setLimit(selectedItem);
            }
          }}
          items={[10, 20, 30, 40, 50]}
        />
      </Box>
    </Box>
  );
};
