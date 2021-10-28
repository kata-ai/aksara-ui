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

import makeData, { DummyData } from './makeData';

export default {
  title: 'Core/Components/Table',
  component: Table,
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

export const SelectedRows = () => {
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

interface SelectedColumn {
  name: string;
  sortType: 'asc' | 'desc';
}

export const SortedColumn = () => {
  const [selectedColumn, setSelectedColumn] = React.useState<SelectedColumn>({ name: '', sortType: 'asc' });

  const columns = React.useMemo(
    () => [
      {
        header: 'Age',
        accessor: 'age',
      },
      {
        header: 'Visits',
        accessor: 'visits',
      },
      {
        header: 'Status',
        accessor: 'status',
      },
      {
        header: 'Profile Progress',
        accessor: 'progress',
      },
    ],
    []
  );
  const [data, setData] = React.useState(makeData(10));

  const ascendingSort = (a: DummyData, b: DummyData) => {
    if (a[selectedColumn.name] > b[selectedColumn.name]) {
      return 1;
    }
    if (a[selectedColumn.name] < b[selectedColumn.name]) {
      return -1;
    }
    return 0;
  };
  const descendingSort = (a: DummyData, b: DummyData) => {
    if (a[selectedColumn.name] > b[selectedColumn.name]) {
      return -1;
    }
    if (a[selectedColumn.name] < b[selectedColumn.name]) {
      return 1;
    }
    return 0;
  };
  React.useEffect(() => {
    if (selectedColumn.name) {
      const newData = [...data];
      if (selectedColumn.sortType === 'asc') {
        newData.sort(ascendingSort);
      } else {
        newData.sort(descendingSort);
      }
      setData(newData);
    }
  }, [selectedColumn]);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableHeadRow>
            {columns.map(column => {
              return (
                <TableHeadCell
                  key={column.accessor}
                  onClick={() => {
                    if (selectedColumn.name === column.accessor) {
                      setSelectedColumn({
                        ...selectedColumn,
                        sortType: selectedColumn.sortType === 'asc' ? 'desc' : 'asc',
                      });
                    } else {
                      setSelectedColumn({ name: column.accessor, sortType: 'asc' });
                    }
                  }}
                  sortType={selectedColumn.name === column.accessor ? selectedColumn.sortType : undefined}
                >
                  {column.header}
                </TableHeadCell>
              );
            })}
            <TableHeadCell />
          </TableHeadRow>
        </TableHead>
        <TableBody>
          {data.map(value => {
            const { age, visits, progress, status, id } = value;
            return (
              <TableBodyRow key={id}>
                <TableBodyCell>{age}</TableBodyCell>
                <TableBodyCell>{visits}</TableBodyCell>
                <TableBodyCell>{status}</TableBodyCell>
                <TableBodyCell>{progress}</TableBodyCell>
              </TableBodyRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
