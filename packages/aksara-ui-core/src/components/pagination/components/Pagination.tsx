// eslint-disable react/no-array-index-key

import * as React from 'react';
import styled from 'styled-components';
import VisuallyHidden from '@reach/visually-hidden';
import PaginationButton from './PaginationButton';
import { Text } from '../../../foundations';
import IconChevronLeft from './IconChevronLeft';
import IconChevronRight from './IconChevronRight';
import { colors } from '../../../utils';

const PaginationBase = styled('div')`
  display: inline-block;
`;

export interface PaginationProps {
  /** Additional CSS classes to give to the pagination. */
  className?: string;
  /** Additional CSS properties to give to the pagination. */
  style?: React.CSSProperties;
  /** The current page number. */
  current: number;
  /** Total number of pages. */
  total: number;
  /**
   * Callback to run when a page number is selected. You can use this to e.g.
   * run setState on your component's page state.
   */
  onSelect?: (page: number) => void;
}

class Pagination extends React.Component<PaginationProps> {
  static displayName = 'Pagination';

  constructor(props: PaginationProps) {
    super(props);

    this.generatePages = this.generatePages.bind(this);
    this.handleSelectPage = this.handleSelectPage.bind(this);
  }

  generatePages(): (number | string)[] {
    const { total, current } = this.props;
    const maxButtons = 5;
    const pageButtons: (number | string)[] = [];

    let startPage: number;
    let endPage: number;

    if (maxButtons && maxButtons < total) {
      startPage = Math.max(Math.min(current - Math.floor(maxButtons / 2), total - maxButtons + 1), 1);
      endPage = startPage + maxButtons - 1;
    } else {
      startPage = 1;
      endPage = total;
    }

    // eslint-disable-next-line no-plusplus
    for (let page = startPage; page <= endPage; ++page) {
      pageButtons.push(page);
    }

    if (startPage > 1) {
      if (startPage > 2) {
        pageButtons.unshift('\u2026');
      }

      pageButtons.unshift(1);
    }

    if (endPage < total) {
      if (endPage < total - 1) {
        pageButtons.push('\u2026');
      }

      pageButtons.push(total);
    }

    return pageButtons;
  }

  handleSelectPage(page: number) {
    const { onSelect } = this.props;

    if (onSelect) {
      onSelect(page);
    }
  }

  render() {
    const { current, className, total } = this.props;
    const pages = this.generatePages();

    return (
      <PaginationBase className={className}>
        <PaginationButton color="white" disabled={current === 1} onClick={() => this.handleSelectPage(current - 1)}>
          <VisuallyHidden>Previous Page</VisuallyHidden>
          <IconChevronLeft aria-hidden size={16} fill={colors.grey08} />
        </PaginationButton>
        {pages.map((page, index) => (
          <PaginationButton
            key={index.toString()}
            isActive={page === current}
            onClick={() => (typeof page === 'number' ? this.handleSelectPage(page) : null)}
            disabled={typeof page !== 'number'}
          >
            <Text scale={300} fontWeight={500}>
              {page}
            </Text>
          </PaginationButton>
        ))}
        <PaginationButton disabled={current === total} onClick={() => this.handleSelectPage(current + 1)}>
          <VisuallyHidden>Next Page</VisuallyHidden>
          <IconChevronRight aria-hidden size={16} fill={colors.grey08} />
        </PaginationButton>
      </PaginationBase>
    );
  }
}

export default Pagination;
