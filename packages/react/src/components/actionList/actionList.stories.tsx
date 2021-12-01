import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';
import * as React from 'react';
import { Box } from '../../layout';
import ActionListItem from './components/ActionListItem';

export default {
  title: 'Core/Components/ActionList',
  component: ActionListItem,
};

export const ActionListItemExample: Story = () => {
  return (
    <Box width="200px">
      <ActionListItem onClick={action('click')}>item sample 1</ActionListItem>
    </Box>
  );
};
