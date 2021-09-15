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

const PaginationDetails: React.FC<PaginationDetailProps> = ({ page, limit, total, length, ...rest }) => {
  return (
    <Text {...rest}>
      {`Showing ${page * limit - limit + 1}-${length === limit ? length * page : total} of ${total} data`}
    </Text>
  );
};

export default PaginationDetails;
