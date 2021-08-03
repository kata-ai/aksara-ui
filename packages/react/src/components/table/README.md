# Table

> Tables are used to display associated information in an easily scannable way. It is also used to logically structure content in a gird to make it easier to see relationship and to facilitate understanding.

## Usage

To use this component in your app, import as follows:

```tsx
import {
  Table,
  TableContainer,
  TableHead,
  TableHeadRow,
  TableHeadCell,
  TableBody,
  TableBodyRow,
  TableBodyCell,
} from '@aksara-ui/react';

export default function Component() {
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
}
```
