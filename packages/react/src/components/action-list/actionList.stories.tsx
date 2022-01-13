import { Story } from '@storybook/react';
import * as React from 'react';
import { IconPen } from '@aksara-ui/icons';
import { Stack, Box } from '../../layout';
import { Text } from '../../typography';
import ActionListItem, { ActionListItemVariant } from './components/ActionListItem';
import ActionList from './components/ActionList';

export default {
  title: 'Core/Components/ActionList',
  parameters: {
    backgrounds: {
      default: 'dark',
      value: [
        {
          name: 'dark',
          value: '#e5e5e5',
        },
      ],
    },
  },
};

export const ActionListItemExample: Story<{ variant: ActionListItemVariant }> = ({ variant }) => {
  return (
    <Box width="200px">
      <ActionListItem variant={variant}>item sample 1</ActionListItem>
    </Box>
  );
};
ActionListItemExample.argTypes = {
  variant: {
    options: ['default', 'destructive'],
    control: { type: 'radio' },
  },
};
ActionListItemExample.args = {
  variant: 'default',
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
