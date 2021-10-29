import * as React from 'react';

import { Box, Stack } from '../../../layout';
import { InputRadio } from '../components';
import RadioGroup from '../components/RadioGroup/RadioGroup';
import { Text } from '../../../typography';
import { RadioInputBox, RadioInputBoxProps } from '../components/RadioGroup/components';
import { Story } from '@storybook/react';
export default {
  title: 'Core/Components/Form/Radio/RadioGroup',
  component: RadioGroup,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
};

interface RadioInputBoxStoryProps extends RadioInputBoxProps {
  disabled?: boolean;
}

export const RadioWithBox: Story<RadioInputBoxStoryProps> = ({ disabled }) => (
  <RadioGroup.Root>
    <Stack direction="vertical" spacing="xs" width="300px">
      <RadioGroup.Item asChild value="value1" disabled={disabled}>
        <RadioInputBox disabled={disabled}>
          <InputRadio readOnly checked={false} />
          <Text scale={300} ml="xs">
            Radio 1
          </Text>
        </RadioInputBox>
      </RadioGroup.Item>
      <RadioGroup.Item asChild value="value2" disabled={disabled}>
        <RadioInputBox disabled={disabled}>
          <InputRadio readOnly checked={false} />
          <Text scale={300} ml="xs">
            Radio 2
          </Text>
        </RadioInputBox>
      </RadioGroup.Item>
    </Stack>
  </RadioGroup.Root>
);
