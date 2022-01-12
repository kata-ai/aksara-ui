import { Story } from '@storybook/react';
import * as React from 'react';
import { IconPen } from '@aksara-ui/icons';
import { Stack, Box } from '../../layout';
import { Text } from '../../typography';
import ActionListItem from './components/ActionListItem';
import ActionList from './components/ActionList';

export default {
  title: 'Core/Components/ActionList',
  component: ActionListItem,
};

export const ActionListItemExample: Story = () => {
  return (
    <Box width="200px">
      <ActionListItem>item sample 1</ActionListItem>
    </Box>
  );
};

export const ActionListExample: Story = () => {
  return (
    <ActionList width="200px">
      <ActionListItem marginX="sm" isActive>
        item sample 1
      </ActionListItem>
      <ActionListItem marginX="sm">item sample 2</ActionListItem>
      <ActionListItem marginX="sm">item sample 3</ActionListItem>
    </ActionList>
  );
};

export const ActionListWithIconExample: Story = () => {
  return (
    <ActionList width="200px">
      <ActionListItem marginX="sm" isActive>
        <Stack direction="horizontal" alignItems={'center'} spacing={'sm'}>
          <IconPen width={16} height={16} fill="currentColor" aria-hidden />
          <Text scale={300}>item sample 1</Text>
        </Stack>
      </ActionListItem>
      <ActionListItem marginX="sm">
        <Stack direction="horizontal" alignItems={'center'} spacing={'sm'}>
          <IconPen width={16} height={16} fill="currentColor" aria-hidden />
          <Text scale={300}>item sample 1</Text>
        </Stack>
      </ActionListItem>
      <ActionListItem marginX="sm">
        <Stack direction="horizontal" alignItems={'center'} spacing={'sm'}>
          <IconPen width={16} height={16} fill="currentColor" aria-hidden />
          <Text scale={300}>item sample 1</Text>
        </Stack>
      </ActionListItem>
    </ActionList>
  );
};
