/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { useTable, useSortBy } from 'react-table';
import { IconChevronDown } from '@aksara-ui/icons';
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
import { dummyColumns, dummyData, DummyData } from './data';
import { Box } from '../../layout';
import { Avatar } from '../avatar';
import { Button, PlainButton } from '../button';
import { Badge } from '../badge';
import { Text, Anchor } from '../../typography';
import IconColorfulInstagram from './IconColorfulInstagram';
import IconColorfulWhatsapp from './IconColorfulWhatsapp';

export default {
  title: 'Core/Components/Table',
  component: Table,
};

export const Example = () => {
  const data = React.useMemo(() => dummyData, []);
  const columns = React.useMemo(() => dummyColumns, []);
  const [selectedRows, setSelectedRows] = React.useState<number[]>([]);

  const { getTableProps, getTableBodyProps, headers, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  const getSortTypeValue = (column: any) => {
    if (!column.canSortHeader) return '';
    if (!column.isSorted) return 'noSort';
    return column.isSortedDesc ? 'desc' : 'asc';
  };
  return (
    <TableContainer>
      <Table {...getTableProps()}>
        <TableHead>
          <TableHeadRow>
            <TableHeadCell>
              <InputCheckbox
                indeterminate={selectedRows.length > 0 && selectedRows.length < data.length}
                checked={!!selectedRows.length}
                onCheckedChange={checked => {
                  if (checked) {
                    setSelectedRows(data.map(({ id }) => id));
                  } else {
                    setSelectedRows([]);
                  }
                }}
              />
            </TableHeadCell>
            {headers.map((column: any) => {
              if (column.canSortHeader) {
                return (
                  <TableHeadCell
                    sortType={getSortTypeValue(column)}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    {...column.style}
                  >
                    {column.render('Header')}
                  </TableHeadCell>
                );
              }
              return (
                <TableHeadCell {...column.getHeaderProps()} {...column.style}>
                  {column.render('Header')}
                </TableHeadCell>
              );
            })}
          </TableHeadRow>
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row: any) => {
            prepareRow(row);
            const rowValues: DummyData = row.original;
            const { id, contactMeta, channelMeta, receivedAt, lastUpdatedAt, statusMeta, agentMeta } = rowValues;

            return (
              <TableBodyRow selected={selectedRows.findIndex(selectedRow => selectedRow === id) !== -1}>
                <TableBodyCell>
                  <InputCheckbox
                    checked={selectedRows.findIndex(selectedRow => selectedRow === id) !== -1}
                    onCheckedChange={checked => {
                      if (checked) {
                        setSelectedRows(prev => [...prev, id]);
                      } else {
                        setSelectedRows(prev => prev.filter(item => item !== id));
                      }
                    }}
                  />
                </TableBodyCell>
                <TableBodyCell>
                  <Box alignItems="center" display="inline-flex">
                    <Avatar bg={contactMeta.avatarColor} name={contactMeta.name} size="sm" />
                    <Text as="span" ml="xs" scale={300}>
                      {contactMeta.link ? (
                        <Anchor href={`https://${contactMeta.link}`} target="_blank" rel="noopener noreferrer">
                          {contactMeta.name}
                        </Anchor>
                      ) : (
                        contactMeta.name
                      )}
                    </Text>
                  </Box>
                </TableBodyCell>
                <TableBodyCell>
                  <Box alignItems="center" display="inline-flex">
                    <Avatar
                      bg="transparent"
                      name={channelMeta.name}
                      size="sm"
                      icon={() => {
                        if (channelMeta.icon === 'wa') return <IconColorfulWhatsapp />;
                        return <IconColorfulInstagram />;
                      }}
                    />
                    <Text as="span" ml="xs" scale={300}>
                      {channelMeta.name}
                    </Text>
                  </Box>
                </TableBodyCell>
                <TableBodyCell>
                  <Box>
                    <Text as="span" scale={300}>
                      {receivedAt}
                    </Text>
                  </Box>
                </TableBodyCell>
                <TableBodyCell>
                  <Box>
                    <Text as="span" scale={300}>
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
                        <PlainButton
                          type="button"
                          size="sm"
                          icon={IconChevronDown}
                          iconPosition="right"
                          variant="disclosure"
                          disabled={agentMeta.disabled}
                        >
                          {agent}
                        </PlainButton>
                      ))
                    ) : (
                      <Button size="sm" type="button" variant="primary">
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
