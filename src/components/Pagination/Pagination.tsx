import React, { Component } from 'react';
import isNumber from 'lodash-es/isNumber';

import { Button } from 'components/Button';

export interface Props {
  className?: string;
  current: number;
  total: number;
  onSelect(page: number): void;
}

export interface States {}

class Pagination extends Component<Props, States> {
  generatePages = () => {
    const { total, current } = this.props;
    const maxButtons = 5;
    const pageButtons: any[] = [];

    let startPage;
    let endPage;

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
  };

  render() {
    const { current, className } = this.props;
    const pages = this.generatePages();
    return (
      <div className={`kata-pagination ${className || ''}`}>
        <Button
          isIcon
          color="white"
          className={`kata-pagination__button`}
          disabled={current === 1}
          onClick={() => this.props.onSelect(current - 1)}
        >
          &laquo;
        </Button>
        {pages.map((page, index) => (
          <Button
            key={index}
            isIcon
            color="white"
            className={`kata-pagination__button ${
              page === current ? 'kata-pagination__button--active' : ''
            }`}
            onClick={() => (isNumber(page) ? this.props.onSelect(page) : null)}
          >
            {page}
          </Button>
        ))}
        <Button
          isIcon
          color="white"
          className={`kata-pagination__button`}
          disabled={current === this.props.total}
          onClick={() => this.props.onSelect(current + 1)}
        >
          &raquo;
        </Button>
      </div>
    );
  }
}

export default Pagination;
