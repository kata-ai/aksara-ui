import * as React from 'react';

import { InputCheckbox } from '../form';
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
import { dummyColumns, dummyData } from './data';

export default {
  title: 'Core/Components/Table',
  component: Table,
};

const ExampleTable = ({ columns, data, sortBy }) => {
  const headerCheckboxRef = React.useRef<HTMLInputElement>(null);
  const [selectedRows, setSelectedRows] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (headerCheckboxRef.current) {
      if (selectedRows.length === 2) {
        headerCheckboxRef.current.checked = true;
        headerCheckboxRef.current.indeterminate = false;
      } else if (selectedRows.length > 0 && selectedRows.length <= 2) {
        headerCheckboxRef.current.checked = false;
        headerCheckboxRef.current.indeterminate = true;
      } else {
        headerCheckboxRef.current.checked = false;
        headerCheckboxRef.current.indeterminate = false;
      }
    }
  }, [selectedRows, headerCheckboxRef]);
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableHeadRow>
            <TableHeadCell>Column</TableHeadCell>
            <TableHeadCell>Column</TableHeadCell>
            <TableHeadCell>Column</TableHeadCell>
            <TableHeadCell>
              <InputCheckbox
                ref={headerCheckboxRef}
                onChange={e => {
                  if (e.target.checked) {
                    setSelectedRows(['row1', 'row2']);
                  } else {
                    setSelectedRows([]);
                  }
                }}
              />
            </TableHeadCell>
          </TableHeadRow>
        </TableHead>
        <TableBody>
          <TableBodyRow selected={selectedRows.findIndex(row => row === 'row1') !== -1}>
            <TableBodyCell>Cell Item</TableBodyCell>
            <TableBodyCell>Cell Item</TableBodyCell>
            <TableBodyCell>Cell Item</TableBodyCell>
            <TableBodyCell>
              <InputCheckbox
                checked={selectedRows.findIndex(row => row === 'row1') !== -1}
                onChange={e => {
                  if (e.target.checked) {
                    setSelectedRows(prev => [...prev, 'row1']);
                  } else {
                    setSelectedRows(prev => prev.filter(item => item !== 'row1'));
                  }
                }}
              />
            </TableBodyCell>
          </TableBodyRow>
          <TableBodyRow selected={selectedRows.findIndex(row => row === 'row2') !== -1}>
            <TableBodyCell>Cell Item</TableBodyCell>
            <TableBodyCell>Cell Item</TableBodyCell>
            <TableBodyCell>Cell Item</TableBodyCell>
            <TableBodyCell>
              <InputCheckbox
                checked={selectedRows.findIndex(row => row === 'row2') !== -1}
                onChange={e => {
                  if (e.target.checked) {
                    setSelectedRows(prev => [...prev, 'row2']);
                  } else {
                    setSelectedRows(prev => prev.filter(item => item !== 'row2'));
                  }
                }}
              />
            </TableBodyCell>
          </TableBodyRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export const Example = () => {
  const sortBy: any[] = [];
  const data = React.useMemo(() => dummyData, []);
  const columns = React.useMemo(() => dummyColumns, []);
  return <ExampleTable columns={columns} data={data} sortBy={sortBy} />;
};
