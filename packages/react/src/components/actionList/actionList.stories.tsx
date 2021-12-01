import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';
import * as React from 'react';
import { Box } from '../../layout';
import ActionListItem from './components/ActionListItem';
import ActionList from './components/ActionList';

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

export const ActionListExample: Story = () => {
  return (
    <ActionList width="200px">
      <ActionListItem marginX="sm" isActive onClick={action('click')}>
        item sample 1
      </ActionListItem>
      <ActionListItem marginX="sm" onClick={action('click')}>
        item sample 2
      </ActionListItem>
      <ActionListItem marginX="sm" onClick={action('click')}>
        item sample 3
      </ActionListItem>
    </ActionList>
  );
};
