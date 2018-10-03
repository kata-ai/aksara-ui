import * as React from 'react';
import styled from 'styled-components';
import isNumber from 'lodash-es/isNumber';
import classnames from 'classnames';

import { Theme } from '@kata-kit/theme';
import { Button } from '@kata-kit/button';

interface PaginationProps {
  className?: string;
  current: number;
  total: number;
  onSelect(page: number): void;
}

interface PaginationState {}

class Pagination extends React.Component<PaginationProps, PaginationState> {
  constructor(props: PaginationProps) {
    super(props);

    this.generatePages = this.generatePages.bind(this);
  }

  generatePages() {
    const { total, current } = this.props;
    const maxButtons = 5;
    const pageButtons: React.ReactText[] = [];

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
  }

  render() {
    const { current, className } = this.props;
    const pages = this.generatePages();

    return (
      <Theme>
        {themeAttributes => (
          <PaginationBase className={className} {...themeAttributes}>
            <PaginationButton
              isIcon
              color="white"
              disabled={current === 1}
              onClick={() => this.props.onSelect(current - 1)}
            >
              &laquo;
            </PaginationButton>
            {pages.map((page, index) => (
              <PaginationButton
                key={index}
                isIcon
                color="white"
                className={classnames(
                  'pagination',
                  page === current && 'is-active'
                )}
                onClick={() =>
                  isNumber(page) ? this.props.onSelect(page) : null
                }
                disabled={!isNumber(page)}
              >
                {page}
              </PaginationButton>
            ))}
            <PaginationButton
              isIcon
              color="white"
              disabled={current === this.props.total}
              onClick={() => this.props.onSelect(current + 1)}
            >
              &raquo;
            </PaginationButton>
          </PaginationBase>
        )}
      </Theme>
    );
  }
}

export default Pagination;

const PaginationBase = styled('div')`
  display: inline-block;
`;

const PaginationButton = styled(Button)`
  background: #fff /* $white */;
  margin-left: 4px;
  line-height: 1;
  min-width: 32px;
  width: auto;
  user-select: none;

  &:disabled,
  &[disabled] {
    background: #f6f7f8 /* $gray-10 */ !important;
  }

  &.is-active,
  &.is-active:hover {
    background: #006fe6 /* $kata-blue */ !important;
    border-color: #006fe6 /* $kata-blue */ !important;
    color: #fff /* $white */ !important;
  }
`;
