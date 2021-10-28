import * as React from 'react';

import { Box, Stack } from '../../../layout';
import { InputRadio } from '../components';
import RadioGroup from '../components/RadioGroup/RadioGroup';
import { Text } from '../../../typography';
import { RadioInputBox } from '../components/RadioGroup/components';
export default {
  title: 'Core/Components/Form/Radio/RadioGroup',
  component: RadioGroup,
};

export const RadixDemo = () => (
  <RadioGroup.Root>
    <Stack direction="vertical" spacing="xs" width="300px">
      <RadioGroup.Item asChild value="value1">
        <RadioInputBox>
          <InputRadio />
          <Text scale={300} ml="xs">
            Radio 1
          </Text>
        </RadioInputBox>
      </RadioGroup.Item>
      <RadioGroup.Item asChild value="value2">
        <RadioInputBox>
          <InputRadio />
          <Text scale={300} ml="xs">
            Radio 2
          </Text>
        </RadioInputBox>
      </RadioGroup.Item>
    </Stack>
  </RadioGroup.Root>
);
