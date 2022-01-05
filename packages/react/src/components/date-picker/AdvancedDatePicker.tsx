import React from 'react';
import { Props, useDayzed } from 'dayzed';
import { Calendar } from './components';
import { OptionListItemBox } from '../button';
import { Box, Stack } from '../../layout';
import { Text } from '../../typography';
import { RadioGroupIndicator, RadioGroupItem, RadioGroupRoot } from '../form/components/RadioGroup/RadioGroup';

export interface OptionAdvancedDatePicker {
  label: string;
  value: string;
}
export interface AdvanceDatePickerProps extends Omit<Props, 'monthsToDisplay'> {
  options: Array<OptionAdvancedDatePicker>;
  optionHandler: (value: string) => void;
}
export const AdvancedDatepicker = ({ options, optionHandler, ...props }: AdvanceDatePickerProps) => {
  const dayzedData = useDayzed({ ...props, monthsToDisplay: 2 });
  const renderAdvancedView = () => {
    if (!options.length) {
      return null;
    }
    return (
      <Box p="md" borderRight={'1px solid'} borderColor={'#E5EAEF'}>
        <RadioGroupRoot>
          <Stack direction="vertical" spacing="xs" width="160px">
            {options.map(option => {
              return (
                <RadioGroupItem value={option.value} onChange={e => optionHandler(e.currentTarget.value)}>
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
  return <Calendar advanceView={renderAdvancedView()} {...dayzedData} />;
};
