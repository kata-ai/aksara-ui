import { IconChevronDown, IconPen } from '@aksara-ui/icons';
import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { Stack } from '../../layout';
import { Box } from '../../layout/box';
import { Heading, Text } from '../../typography';
import { Button, IconButton } from '../button';
import { ButtonGroup } from '../button-group';
import { InputSelect } from '../form/components/InputSelect';
import SubHeader from './SubHeader';

export default {
  title: 'Core/Components/Page Header/Sub Header',
  component: SubHeader,
};

export const StickSubHeader = () => {
  return (
    <SubHeader
      label={<Heading scale={400}>Title</Heading>}
      variant="stick"
      actions={
        <ButtonGroup size="md">
          <Button type="button" icon={IconChevronDown} iconPosition="right" onClick={action('click')}>
            Label
          </Button>
          <Button variant="primary">Label</Button>
        </ButtonGroup>
      }
    />
  );
};

export const StandSubHeader = () => {
  return (
    <SubHeader
      label={
        <Stack direction="horizontal" spacing="md" alignItems="center">
          <Heading scale={400}>Title</Heading>
          <IconButton aria-label="Push Me" onClick={action('pen icon clicked')} size="md" type="button" variant="plain">
            <IconPen aria-hidden fill="currentColor" />
          </IconButton>
          <InputSelect
            width="200px"
            placeholder="Options"
            itemToString={item => (item ? `${item.label}` : '')}
            itemRenderer={item => (
              <>
                <Box width={15} mr="sm" />
                {`${item.label}`}
              </>
            )}
            handleSelectedItemChange={action('selected item change')}
            items={[
              { label: 'options 1', value: 'value_1' },
              { label: 'options 2', value: 'value_2' },
            ]}
          />
        </Stack>
      }
      variant="stand"
      actions={
        <Stack direction="horizontal" alignItems="center" justifyContent="flex-end" marginTop={['md']} spacing="md">
          <Text fontSize="12px" lineHeight="18px" color="greymed04">
            Caption
          </Text>
          <ButtonGroup size="md" spacing="xs">
            <Button type="button" icon={IconChevronDown} iconPosition="right" onClick={action('click')}>
              Label
            </Button>
            <Button variant="primary">Label</Button>
          </ButtonGroup>
        </Stack>
      }
    />
  );
};
