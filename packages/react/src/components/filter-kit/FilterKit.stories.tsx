import { IconFilter } from '@aksara-ui/icons';
import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { Box } from '../../layout';
import { ButtonGroup } from '../button-group/components/ButtonGroup';
import { Button } from '../button/components/Button';
import FilterKit from './FilterKit';

export default {
  title: 'Core/Components/Filter-Kit',
  component: FilterKit,
};

export const WihtoutFilterSection = () => {
  return (
    <Box>
      <FilterKit
        orderByOptions={[
          {
            key: 'created_date',
            label: 'Date',
            options: [
              { label: 'Newest', value: 'created_date-desc' },
              { label: 'Oldest', value: 'created_date-asc' },
            ],
          },
          {
            key: 'transaction',
            label: 'Transaction',
            options: [
              { label: 'Highest', value: 'transaction_value-desc' },
              { label: 'Lowest', value: 'transaction_value-asc' },
            ],
          },
        ]}
      />
    </Box>
  );
};

export const WithFilterSection = () => {
  return (
    <Box>
      <FilterKit
        filterData={[
          { label: 'Filter A', value: 'filter_a' },
          { label: 'Keyword B', value: 'keyword_b' },
          { label: 'Filter C', value: 'filter_c' },
          { label: 'Order D', value: 'order_d' },
          { label: 'Order E', value: 'order_e' },
          { label: 'Filter F', value: 'filter f' },
          { label: 'Filter G', value: 'filter_g' },
          { label: 'Filter H', value: 'keyword_h' },
          { label: 'Filter I', value: 'keyword_i' },
        ]}
        onRemoveFilter={action('remove filter')}
        orderByOptions={[
          {
            key: 'created_date',
            label: 'Date',
            options: [
              { label: 'Newest', value: 'created_date-desc' },
              { label: 'Oldest', value: 'created_date-asc' },
            ],
          },
          {
            key: 'transaction',
            label: 'Transaction',
            options: [
              { label: 'Highest', value: 'transaction_value-desc' },
              { label: 'Lowest', value: 'transaction_value-asc' },
            ],
          },
        ]}
        actions={
          <ButtonGroup>
            <Button
              data-testid="filter"
              variant="secondary"
              type="button"
              icon={IconFilter}
              iconPosition="left"
              onClick={action('filter')}
            >
              Filter
            </Button>
          </ButtonGroup>
        }
      />
    </Box>
  );
};
