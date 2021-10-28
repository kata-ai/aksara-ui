import * as React from 'react';
import { Story } from '@storybook/react';

import { Box } from '../../../layout';
import { Text } from '../../../typography';
import { RadioGroupOption, RadioGroupItem, RadioGroupOptionProps } from '../components/RadioGroup';
import { InputRadio } from '../components/InputRadio';
import RadioGroup from '../components/RadioGroup/RadioGroup';

export default {
  title: 'Core/Components/Form/Radio/RadioGroup',
  component: RadioGroupOption,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    errors: {
      control: 'boolean',
    },
    id: {
      control: 'text',
    },
    checked: {
      control: 'boolean',
    },
  },
};

export const Example: Story<RadioGroupOptionProps> = () => {
  return (
    <Box>
      <RadioGroupOption onChangeSelected={value => console.log('onChangeSelected', value)}>
        <RadioGroupItem
          value="label1"
          p="xs"
          _hover={{ backgroundColor: 'greylight03', borderRadius: '12px' }}
          _focusVisible={{ borderRadius: '12px' }}
        >
          {({ selected }) => {
            return (
              <>
                <InputRadio readOnly checked={selected} />
                <Text scale={300} ml="xs">
                  Radio 1
                </Text>
              </>
            );
          }}
        </RadioGroupItem>
        <RadioGroupItem
          value="label2"
          p="xs"
          _hover={{ backgroundColor: 'greylight03', borderRadius: '12px' }}
          _focusVisible={{ borderRadius: '12px' }}
        >
          {({ selected }) => {
            return (
              <>
                <InputRadio readOnly checked={selected} />
                <Text scale={300} ml="xs">
                  Radio 1
                </Text>
              </>
            );
          }}
        </RadioGroupItem>
      </RadioGroupOption>
    </Box>
  );
};

Example.args = {
  checked: false,
  disabled: false,
};

export const RadixDemo = () => (
  <RadioGroup.Root>
    <Box>
      <RadioGroup.Item asChild value="value1">
        <Box>value 1</Box>
      </RadioGroup.Item>
      <RadioGroup.Item asChild value="value2">
        <Box>value 2</Box>
      </RadioGroup.Item>
    </Box>
  </RadioGroup.Root>
);
