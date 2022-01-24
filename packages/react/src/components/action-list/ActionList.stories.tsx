import { Story } from '@storybook/react';
import * as React from 'react';
import { IconPen } from '@aksara-ui/icons';
import { Stack, Box } from '../../layout';
import { Heading, Text } from '../../typography';
import { ActionList, ActionListItem, ActionListItemVariant } from '.';
import { CheckboxContainer, CheckboxIndicator } from '../form/components/InputCheckbox/CheckboxIndicator';

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

export const ActionListWithCheckboxExample: Story<{ disabled: boolean }> = ({ disabled }) => {
  const [selected, setSeleted] = React.useState<string>('');
  return (
    <ActionList width="200px">
      <ActionListItem
        marginX="sm"
        isActive={selected === 'item-1'}
        onClick={() => setSeleted('item-1')}
        indicator={false}
        disabled={disabled}
      >
        <Stack direction="horizontal" alignItems={'center'} spacing={'sm'}>
          <CheckboxContainer>{selected === 'item-1' && <CheckboxIndicator />}</CheckboxContainer>
          <Text scale={300}>item sample 1</Text>
        </Stack>
      </ActionListItem>
      <ActionListItem
        marginX="sm"
        isActive={selected === 'item-2'}
        onClick={() => setSeleted('item-2')}
        indicator={false}
        disabled={disabled}
      >
        <Stack direction="horizontal" alignItems={'center'} spacing={'sm'}>
          <CheckboxContainer>{selected === 'item-2' && <CheckboxIndicator />}</CheckboxContainer>
          <Text scale={300}>item sample 1</Text>
        </Stack>
      </ActionListItem>
      <ActionListItem
        marginX="sm"
        isActive={selected === 'item-3'}
        onClick={() => setSeleted('item-3')}
        indicator={false}
        disabled={disabled}
      >
        <Stack direction="horizontal" alignItems={'center'} spacing={'sm'}>
          <CheckboxContainer>{selected === 'item-3' && <CheckboxIndicator />}</CheckboxContainer>
          <Text scale={300}>item sample 1</Text>
        </Stack>
      </ActionListItem>
    </ActionList>
  );
};
ActionListWithCheckboxExample.argTypes = {
  disabled: {
    control: 'boolean',
    defaultValue: false,
  },
};

export const ActionListWithDescExample: Story<{ disabled: boolean }> = ({ disabled }) => {
  const [selected, setSeleted] = React.useState<string>('');
  return (
    <ActionList width="200px">
      <ActionListItem
        marginX="sm"
        isActive={selected === 'item-1'}
        onClick={() => setSeleted('item-1')}
        indicator={false}
        disabled={disabled}
      >
        <Stack direction="vertical" spacing={'xxs'}>
          <Heading scale={200}>Evan Irawan</Heading>
          <Text display="block" fontSize="10px" lineHeight="16px">
            Product Manager
          </Text>
        </Stack>
      </ActionListItem>
      <ActionListItem
        marginX="sm"
        isActive={selected === 'item-1'}
        onClick={() => setSeleted('item-1')}
        indicator={false}
        disabled={disabled}
      >
        <Stack direction="vertical" spacing={'xxs'}>
          <Heading scale={200}>Stevan Irawan</Heading>
          <Text display="block" fontSize="10px" lineHeight="16px">
            Software Engineer
          </Text>
        </Stack>
      </ActionListItem>
    </ActionList>
  );
};
