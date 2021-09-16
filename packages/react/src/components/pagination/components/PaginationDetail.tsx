import * as React from 'react';
import { Text, TextProps } from '../../../layout/typography';

export interface PaginationDetailProps extends TextProps {
  // Current page of pages
  page: number;
  /** Total limit of pages. */
  limit: number;
  /** Total number of pages. */
  total: number;
  // Length of data per pages
  length: number;
}

const PaginationDetail: React.FC<PaginationDetailProps> = ({ page, limit, total, length, scale = 300, ...rest }) => {
  return (
    <Text scale={scale} {...rest}>
      {`Showing ${page * limit - limit + 1}-${length === limit ? length * page : total} out of ${total}`}
    </Text>
  );
};

export default PaginationDetail;
