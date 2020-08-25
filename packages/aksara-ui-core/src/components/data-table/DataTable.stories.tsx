import * as React from 'react';

import { SystemWrapper } from '../../utils/storybook';
import {
  Table,
  TableContainer,
  TableHead,
  TableHeadRow,
  TableHeadCell,
  TableBody,
  TableBodyRow,
  TableBodyCell,
} from './components';

export default {
  title: 'Core|Components/Data Table',
  component: [TableContainer, Table],
  decorators: [SystemWrapper],
};

export const Example = () => {
  return (
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
};

export const Headless = () => {
  return (
    <TableContainer>
      <Table>
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
};
