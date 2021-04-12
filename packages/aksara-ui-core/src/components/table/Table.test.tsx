import * as React from 'react';
import { render } from '@testing-library/react';
import {
  TableContainer,
  Table,
  TableHead,
  TableHeadRow,
  TableHeadCell,
  TableBody,
  TableBodyRow,
  TableBodyCell,
} from './components';

describe('components/DataTable', () => {
  test('renders correctly', () => {
    const { container } = render(
      <TableContainer>
        <Table>
          <TableHead>
            <TableHeadRow>
              <TableHeadCell>Column</TableHeadCell>
              <TableHeadCell>Column</TableHeadCell>
              <TableHeadCell>Column</TableHeadCell>
              <TableHeadCell>Column</TableHeadCell>
            </TableHeadRow>
          </TableHead>
          <TableBody>
            <TableBodyRow>
              <TableBodyCell>Cell Item</TableBodyCell>
              <TableBodyCell>Cell Item</TableBodyCell>
              <TableBodyCell>Cell Item</TableBodyCell>
              <TableBodyCell>Cell Item</TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
              <TableBodyCell>Cell Item</TableBodyCell>
              <TableBodyCell>Cell Item</TableBodyCell>
              <TableBodyCell>Cell Item</TableBodyCell>
              <TableBodyCell>Cell Item</TableBodyCell>
            </TableBodyRow>
          </TableBody>
        </Table>
      </TableContainer>
    );

    expect(container).toBeInTheDocument();
  });
});
