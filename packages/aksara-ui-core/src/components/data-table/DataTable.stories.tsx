import * as React from 'react';

import { SystemWrapper, SystemBlock, SystemSubheading, ComponentBlock } from '../../utils/storybook';
import { Stack, Box, Heading } from '../../foundations';
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
        <ComponentBlock title="Base">
          <Box mt="lg">
            <Heading scale={300} mb="md">
              With Header
            </Heading>
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
          </Box>
          <Box mt="lg">
            <Heading scale={300} mb="md">
              Headless
            </Heading>
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
          </Box>
        </ComponentBlock>
      </Stack>
    </SystemBlock>
  );
};
