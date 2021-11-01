import * as React from 'react';

import { Story } from '@storybook/react';
import { Stack } from '../../../layout';
import { InputRadio } from '../components';
import { RadioGroupRoot, RadioGroupItem } from '../components/RadioGroup/RadioGroup';
import { Text } from '../../../typography';
import { OptionListItemBox, OptionListItemBoxProps } from '../../button';

export default {
  title: 'Core/Components/Form/Radio/RadioGroup',
  component: RadioGroupRoot,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
};

export const RadioInputBoxSample: Story<OptionListItemBoxProps> = ({ disabled, variant }) => {
  return (
    <OptionListItemBox variant={variant} disabled={disabled}>
      Label 1
    </OptionListItemBox>
  );
};

export const RadioWithBox: Story<{ disabled: boolean }> = ({ disabled }) => (
  <RadioGroupRoot>
    <Stack direction="vertical" spacing="xs" width="300px">
      <RadioGroupItem value="value1" disabled={disabled}>
        <OptionListItemBox disabled={disabled} p="xs">
          <InputRadio readOnly checked={false} />
          <Text scale={300} ml="xs">
            Radio 1
          </Text>
        </OptionListItemBox>
      </RadioGroupItem>
      <RadioGroupItem value="value2" disabled={disabled}>
        <OptionListItemBox disabled={disabled} p="xs">
          <InputRadio readOnly checked={false} />
          <Text scale={300} ml="xs">
            Radio 2
          </Text>
        </OptionListItemBox>
      </RadioGroupItem>
    </Stack>
  </RadioGroupRoot>
);

export const RadioWithAvatar: Story<{ disabled: boolean }> = ({ disabled }) => (
  <RadioGroupRoot>
    <Stack direction="vertical" spacing="xs" width="300px">
      <RadioGroupItem asChild value="value1" disabled={disabled}>
        <OptionListItemBox disabled={disabled} variant="bordered" p="md">
          <InputRadio readOnly checked={false} />
          <Text scale={300} ml="xs">
            Radio 1
          </Text>
        </OptionListItemBox>
      </RadioGroupItem>
      <RadioGroupItem asChild value="value2" disabled={disabled}>
        <OptionListItemBox disabled={disabled} variant="bordered" p="md">
          <InputRadio readOnly checked={false} />
          <Text scale={300} ml="xs">
            Radio 2
          </Text>
        </OptionListItemBox>
      </RadioGroupItem>
    </Stack>
  </RadioGroupRoot>
);
