import React from 'react';
import { OptionListItemBox } from '../button';
import { Box, Stack } from '../../layout';
import { Text } from '../../typography';
import { RadioGroupIndicator, RadioGroupItem, RadioGroupRoot } from '../form/components/RadioGroup/RadioGroup';

export interface OptionAdvancedDatePicker {
  label: string;
  value: string;
}
export interface AdvancedOptionProps<T extends string> {
  options: Array<OptionAdvancedDatePicker>;
  optionHandler: (value: T) => void;
}
export const AdvancedOption = <T extends string>({ options, optionHandler }: AdvancedOptionProps<T>) => {
  return (
    <Box p="md" borderRight={'1px solid'} borderColor={'#E5EAEF'}>
      <RadioGroupRoot onValueChange={value => optionHandler(value as T)}>
        <Stack direction="vertical" spacing="xxs" width="160px">
          {options.map(option => {
            return (
              <RadioGroupItem value={option.value}>
                <OptionListItemBox display="flex" alignItems={'center'} p="xs" id={option.value}>
                  <Box backgroundColor={'greylight01'} width={16} height={16} borderRadius={16} position={'relative'}>
                    <Box
                      position={'absolute'}
                      width={16}
                      height={16}
                      border={'1px solid'}
                      borderColor={'greylight05'}
                      borderRadius={16}
                    />
                    <RadioGroupIndicator>
                      <Box
                        position={'absolute'}
                        backgroundColor={'greylight01'}
                        width={16}
                        height={16}
                        borderRadius={16}
                        border={'5px solid'}
                        borderColor={'blue07'}
                        sx={{
                          '[role=radio]:focus > &': {
                            borderColor: 'blue06',
                            boxShadow: `0 0 0 2px rgba(175, 214, 255, 0.7)`,
                          },
                        }}
                      />
                    </RadioGroupIndicator>
                  </Box>
                  <Text as="label" htmlFor={option.value} scale={300} ml="xs">
                    {option.label}
                  </Text>
                </OptionListItemBox>
              </RadioGroupItem>
            );
          })}
        </Stack>
      </RadioGroupRoot>
    </Box>
  );
};
