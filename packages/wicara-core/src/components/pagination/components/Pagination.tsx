import * as React from 'react';
import styled from 'styled-components';
import PaginationButton from './PaginationButton';

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

  generatePages() {
    const { total, current } = this.props;
    const maxButtons = 5;
    const pageButtons: React.ReactText[] = [];

    let startPage: number;
    let endPage: number;

    if (maxButtons && maxButtons < total) {
      startPage = Math.max(
        Math.min(current - Math.floor(maxButtons / 2), total - maxButtons + 1),
        1
      );
      endPage = startPage + maxButtons - 1;
    } else {
      startPage = 1;
      endPage = total;
    }

    // tslint:disable-next-line:no-increment-decrement
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
    const { current, className } = this.props;
    const pages = this.generatePages();

    return (
      <PaginationBase className={className}>
        <PaginationButton
          color="white"
          disabled={current === 1}
          onClick={() => this.handleSelectPage(current - 1)}
        >
          &laquo;
        </PaginationButton>
        {pages.map((page, index) => (
          <PaginationButton
            key={index}
            color="white"
            isActive={page === current}
            onClick={() => (typeof page === 'number' ? this.handleSelectPage(page) : null)}
            disabled={typeof page !== 'number'}
          >
            {page}
          </PaginationButton>
        ))}
        <PaginationButton
          color="white"
          disabled={current === this.props.total}
          onClick={() => this.handleSelectPage(current + 1)}
        >
          &raquo;
        </PaginationButton>
      </PaginationBase>
    );
  }
}

export default Pagination;
