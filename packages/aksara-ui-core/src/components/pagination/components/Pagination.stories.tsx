import * as React from 'react';
import { action } from '@storybook/addon-actions';

import { SystemWrapper, SystemBlock } from '../../../utils/storybook';

import Pagination from './Pagination';

const readme = require('../README.md');

export default {
  title: 'Core|Components/Pagination',
  component: Pagination,
  decorators: [SystemWrapper],
  parameters: {
    notes: { markdown: readme },
  },
};

export const BasicExample = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <SystemBlock title="Pagination" subtitle="Pagination indicates a series of content that exists across pages.">
      <Pagination
        current={currentPage}
        total={5}
        onSelect={select => {
          setCurrentPage(select);
          action('select-page')(select);
        }}
      />
    </SystemBlock>
  );
};

export const LargePageNumbers = () => {
  const [currentPage, setCurrentPage] = React.useState(10);

  return (
    <SystemBlock
      title="Large page numbers"
      subtitle="Paginations will also automatically truncate itself when the number of pages get too large."
    >
      <Pagination
        current={currentPage}
        total={50}
        onSelect={select => {
          setCurrentPage(select);
          action('select-page')(select);
        }}
      />
    </SystemBlock>
  );
};
