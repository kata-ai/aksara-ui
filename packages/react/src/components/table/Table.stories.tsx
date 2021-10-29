import { Column, DummyData } from 'packages/react/dist/components/table/data';
import * as React from 'react';

import { InputCheckbox, InputSelect } from '../form';
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
import { useTable, useSortBy } from 'react-table';
import { Avatar, Badge, Box, Button, Heading, Stack, Text } from '@aksara-ui/react';
import { IconInstagram, IconShirt, IconWhatsapp } from '@aksara-ui/icons';

export default {
  title: 'Core/Components/Table',
  component: Table,
};

const ExampleTable = ({ columns, data }: { columns: Column[]; data: DummyData[] }) => {
  const headerCheckboxRef = React.useRef<HTMLInputElement>(null);
  const [selectedRows, setSelectedRows] = React.useState<number[]>([]);

  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  React.useEffect(() => {
    const maxLength = data.length;
    if (headerCheckboxRef.current) {
      if (selectedRows.length === maxLength) {
        headerCheckboxRef.current.checked = true;
        headerCheckboxRef.current.indeterminate = false;
      } else if (selectedRows.length > 0 && selectedRows.length <= maxLength) {
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
      <Table {...getTableProps()}>
        <TableHead>
          <TableHeadRow>
            <TableHeadCell>
              <InputCheckbox
                ref={headerCheckboxRef}
                onChange={e => {
                  if (e.target.checked) {
                    setSelectedRows(data.map(({ id }) => id));
                  } else {
                    setSelectedRows([]);
                  }
                }}
              />
            </TableHeadCell>
            {headers.map((column: any) => (
              <TableHeadCell
                sortType={column.isSortActive && column.isSorted ? (column.isSortedDesc ? 'desc' : 'asc') : ''}
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                {column.render('Header')}
              </TableHeadCell>
            ))}
          </TableHeadRow>
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row: any) => {
            prepareRow(row);
            const rowValues: DummyData = row.original;
            const { id, contactMeta, channelMeta, receivedAt, lastUpdatedAt, statusMeta, agentMeta } = rowValues;

            return (
              <TableBodyRow {...row.getRowProps()} selected={selectedRows.findIndex(row => row === id) !== -1}>
                <TableBodyCell>
                  <InputCheckbox
                    checked={selectedRows.findIndex(row => row === id) !== -1}
                    onChange={e => {
                      if (e.target.checked) {
                        setSelectedRows(prev => [...prev, id]);
                      } else {
                        setSelectedRows(prev => prev.filter(item => item !== id));
                      }
                    }}
                  />
                </TableBodyCell>
                <TableBodyCell>
                  <Box alignItems="center" display="inline-flex">
                    <Avatar bg={contactMeta.avatarColor} name={contactMeta.name} size="lg" />
                    <Text as="span" ml="xs" scale={300}>
                      {contactMeta.name}
                    </Text>
                  </Box>
                </TableBodyCell>
                <TableBodyCell>
                  <Box alignItems="center" display="inline-flex">
                    <Avatar
                      icon={() => {
                        if (channelMeta.icon === 'wa') return <IconWhatsapp />;
                        else if (channelMeta.icon === 'ig') return <IconInstagram />;
                        else return <IconShirt />;
                      }}
                      name={channelMeta.name}
                      size="lg"
                    />
                    <Text as="span" ml="xs" scale={300}>
                      {channelMeta.name}
                    </Text>
                  </Box>
                </TableBodyCell>
                <TableBodyCell>
                  <Box>
                    <Text as="span" ml="xs" scale={300}>
                      {receivedAt}
                    </Text>
                  </Box>
                </TableBodyCell>
                <TableBodyCell>
                  <Box>
                    <Text as="span" ml="xs" scale={300}>
                      {lastUpdatedAt}
                    </Text>
                  </Box>
                </TableBodyCell>
                <TableBodyCell>
                  <Box>
                    <Badge size="md" variant={statusMeta.variant}>
                      {statusMeta.name}
                    </Badge>
                  </Box>
                </TableBodyCell>
                <TableBodyCell>
                  <Box>
                    {agentMeta ? (
                      agentMeta.agents.map(agent => (
                        <Badge size="md" variant="success">
                          {agent}
                        </Badge>
                      ))
                    ) : (
                      <Button size="md" type="button" variant="primary">
                        Assign
                      </Button>
                    )}
                  </Box>
                </TableBodyCell>
              </TableBodyRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export const Example = () => {
  const data = React.useMemo(() => dummyData, []);
  const columns = React.useMemo(() => dummyColumns, []);
  return <ExampleTable columns={columns} data={data} />;
};
