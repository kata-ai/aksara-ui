import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { StoryContainer, StoryHeader, StorybookWrapper } from '../../../utils/storybook';

import Pagination from './Pagination';

const readme = require('../README.md');

const story = storiesOf('Core|Components/Pagination', module).addDecorator(StorybookWrapper);

story.add(
  'default',
  () => {
    const [currentPage, setCurrentPage] = React.useState(1);

    return (
      <StoryContainer>
        <StoryHeader
          title="Pagination"
          subtitle="Pagination indicates a series of content that exists across pages."
        />
        <Pagination
          current={currentPage}
          total={5}
          onSelect={select => {
            setCurrentPage(select);
            action('select-page')(select);
          }}
        />
      </StoryContainer>
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
      <StoryContainer>
        <StoryHeader
          title="Large page numbers"
          subtitle="Paginations will also automatically truncate itself when the number of pages get too large."
        />
        <Pagination
          current={currentPage}
          total={50}
          onSelect={select => {
            setCurrentPage(select);
            action('select-page')(select);
          }}
        />
      </StoryContainer>
    );
  },
  {
    notes: {
      markdown: readme
    }
  }
);
