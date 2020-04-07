import * as React from 'react';

import { SystemWrapper, SystemBlock, SystemSubheading, ComponentBlock } from '../../utils/storybook';
import { Stack } from '../../foundations';
import {
  Table,
  TableContainer,
  TableHead,
  TableHeadRow,
  TableHeaderCell,
  TableBody,
  TableBodyRow,
  TableBodyCell,
} from './components';

const readme = require('./README.md');

export default {
  title: 'Core|Components/Data Table',
  component: [TableContainer, Table],
  decorators: [SystemWrapper],
  parameters: {
    notes: { markdown: readme },
  },
};

export const BasicExample = () => {
  return (
    <SystemBlock
      title="Data Table"
      subtitle="Data tables are used to display associated information in an easily scannable way. And used to logically structure content in a gird to make it easier to see relantionship and to facilitate understanding."
    >
      <Stack spacing="xl">
        <SystemSubheading>Default Theme</SystemSubheading>
        <ComponentBlock title="Basic Example">
          <TableContainer>
            <Table>
              <TableHead>
                <TableHeadRow>
                  <TableHeaderCell>Column</TableHeaderCell>
                  <TableHeaderCell>Column</TableHeaderCell>
                  <TableHeaderCell>Column</TableHeaderCell>
                  <TableHeaderCell>Column</TableHeaderCell>
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
        </ComponentBlock>
      </Stack>
    </SystemBlock>
  );
};
