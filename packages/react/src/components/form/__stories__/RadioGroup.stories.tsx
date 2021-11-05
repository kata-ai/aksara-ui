/* eslint-disable no-underscore-dangle */
import * as React from 'react';

import { Story } from '@storybook/react';
import { Stack } from '../../../layout';
import { InputRadio } from '../components';
import { RadioGroupRoot, RadioGroupItem } from '../components/RadioGroup/RadioGroup';
import { Text } from '../../../typography';
import { OptionListItemBox, OptionListItemBoxProps } from '../../button';
import { pseudoSelectors } from '../../../system';
import { theme } from '../../../theme';

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
    <OptionListItemBox variant={variant} disabled={disabled} p="xs">
      Label 1
    </OptionListItemBox>
  );
};

const inputRadioItemStyle = {
  p: 'xs',
  [pseudoSelectors._checked]: {
    background: theme.colors.blue01,
    '& > input': {
      borderWidth: '5px',
      borderColor: theme.colors.blue07,
      '&:hover': {
        borderColor: theme.colors.blue08,
      },
      '&:focus': {
        borderColor: theme.colors.blue09,
      },
      '&:disabled': {
        borderColor: theme.colors.greylight05,
        background: theme.colors.greylight02,
      },
    },
  },
};

export const RadioWithBox: Story<{ disabled: boolean }> = ({ disabled }) => (
  <RadioGroupRoot>
    <Stack direction="vertical" spacing="xs" width="300px">
      <RadioGroupItem value="value1" disabled={disabled} sx={inputRadioItemStyle}>
        <InputRadio readOnly checked={false} />
        <Text scale={300} ml="xs">
          Radio 1
        </Text>
      </RadioGroupItem>
      <RadioGroupItem value="value2" disabled={disabled} sx={inputRadioItemStyle}>
        <InputRadio readOnly checked={false} />
        <Text scale={300} ml="xs">
          Radio 2
        </Text>
      </RadioGroupItem>
    </Stack>
  </RadioGroupRoot>
);

export const RadioWithAvatar: Story<{ disabled: boolean }> = ({ disabled }) => (
  <RadioGroupRoot>
    <Stack direction="vertical" spacing="xs" width="300px">
      <RadioGroupItem asChild value="value1" disabled={disabled} variant="bordered" sx={{ p: 'md' }}>
        <InputRadio readOnly checked={false} />
        <Text scale={300} ml="xs">
          Radio 1
        </Text>
      </RadioGroupItem>
      <RadioGroupItem asChild value="value2" disabled={disabled} variant="bordered" sx={{ p: 'md' }}>
        <InputRadio readOnly checked={false} />
        <Text scale={300} ml="xs">
          Radio 2
        </Text>
      </RadioGroupItem>
    </Stack>
  </RadioGroupRoot>
);
