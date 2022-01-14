import * as React from 'react';
import { Text, TextProps } from '../../../typography';

export interface PaginationDetailProps extends TextProps {
  // Current page of pages
  page: number;
  /** Total limit of pages. */
  limit: number;
  // Length of data
  length: number;
}

const PaginationDetail: React.FC<PaginationDetailProps> = ({ page, limit, length, scale = 300, ...rest }) => {
  return (
    <Text scale={scale} {...rest}>
      {`Showing ${(page - 1) * limit + 1}-${limit * page < length ? limit * page : length} out of ${length}`}
    </Text>
  );
};

export default PaginationDetail;
