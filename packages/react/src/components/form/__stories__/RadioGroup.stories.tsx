/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { Story } from '@storybook/react';
import { Box, Stack } from '../../../layout';
import { InputRadio } from '../components';
import { RadioGroupRoot, RadioGroupItem, RadioGroupIndicator } from '../components/RadioGroup/RadioGroup';
import { Text } from '../../../typography';
import { OptionListItemBox, OptionListItemBoxProps, UnstyledButton } from '../../button';
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
  <form>
    <RadioGroupRoot>
      <Stack direction="vertical" spacing="xs" width="300px">
        <Box display="flex" alignItems={'center'} p="xs">
          <RadioGroupItem value="value1" disabled={disabled} sx={inputRadioItemStyle}>
            <UnstyledButton
              id="r1"
              backgroundColor={'greylight01'}
              width={16}
              height={16}
              border={'1px solid'}
              borderColor={'greylight05'}
              borderRadius={16}
            >
              <RadioGroupIndicator>
                <Box
                  backgroundColor={'greylight01'}
                  width={16}
                  height={16}
                  borderRadius={16}
                  border={'5px solid'}
                  borderColor={'blue07'}
                />
              </RadioGroupIndicator>
            </UnstyledButton>
          </RadioGroupItem>
          <Text as="label" htmlFor="r1" scale={300} ml="xs">
            Radio 1
          </Text>
        </Box>
        <Box display="flex" alignItems={'center'} p="xs">
          <RadioGroupItem value="value2" disabled={disabled} sx={inputRadioItemStyle}>
            <UnstyledButton
              id="r2"
              backgroundColor={'greylight01'}
              width={16}
              height={16}
              border={'1px solid'}
              borderColor={'greylight05'}
              borderRadius={16}
            >
              <RadioGroupIndicator>
                <Box
                  backgroundColor={'greylight01'}
                  width={16}
                  height={16}
                  borderRadius={16}
                  border={'5px solid'}
                  borderColor={'blue07'}
                />
              </RadioGroupIndicator>
            </UnstyledButton>
          </RadioGroupItem>
          <Text as="label" htmlFor="r2" scale={300} ml="xs">
            Radio 2
          </Text>
        </Box>
      </Stack>
    </RadioGroupRoot>
  </form>
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
