import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { SystemWrapper, SystemHeader, SystemContainer } from '../../../utils/storybook';

import Pagination from './Pagination';

const readme = require('../README.md');

const story = storiesOf('Core|Components/Pagination', module).addDecorator(SystemWrapper);

story.add(
  'default',
  () => {
    const [currentPage, setCurrentPage] = React.useState(1);

    return (
      <>
        <SystemHeader
          title="Pagination"
          subtitle="Pagination indicates a series of content that exists across pages."
        />
        <SystemContainer>
          <Pagination
            current={currentPage}
            total={5}
            onSelect={select => {
              setCurrentPage(select);
              action('select-page')(select);
            }}
          />
        </SystemContainer>
      </>
    );
  },
  {
    notes: {
      markdown: readme
    }
  }
);

story.add(
  'large page numbers',
  () => {
    const [currentPage, setCurrentPage] = React.useState(10);

    return (
      <>
        <SystemHeader
          title="Large page numbers"
          subtitle="Paginations will also automatically truncate itself when the number of pages get too large."
        />
        <SystemContainer>
          <Pagination
            current={currentPage}
            total={50}
            onSelect={select => {
              setCurrentPage(select);
              action('select-page')(select);
            }}
          />
        </SystemContainer>
      </>
    );
  },
  {
    notes: {
      markdown: readme
    }
  }
);
