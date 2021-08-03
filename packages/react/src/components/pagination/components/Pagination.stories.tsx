import * as React from 'react';
import { action } from '@storybook/addon-actions';

import Pagination from './Pagination';

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
