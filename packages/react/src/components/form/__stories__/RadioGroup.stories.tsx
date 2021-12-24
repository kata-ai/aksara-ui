/* eslint-disable no-underscore-dangle */
import { Story } from '@storybook/react';
import { transparentize } from 'polished';
import * as React from 'react';
import { Box, Stack } from '../../../layout';
import { theme } from '../../../theme';
import { Text } from '../../../typography';
import { OptionListItemBox, OptionListItemBoxProps } from '../../button';
import { RadioGroupIndicator, RadioGroupItem, RadioGroupRoot } from '../components/RadioGroup/RadioGroup';

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

export const RadioWithBox: Story<{ disabled: boolean }> = ({ disabled }) => {
  return (
    <form>
      <RadioGroupRoot>
        <Stack direction="vertical" spacing="xs" width="300px">
          <RadioGroupItem value="value1">
            <OptionListItemBox disabled={disabled} display="flex" alignItems={'center'} p="xs" id="r1">
              <Box
                backgroundColor={!disabled ? 'greylight01' : 'greylight02'}
                width={16}
                height={16}
                border={'1px solid'}
                borderColor={!disabled ? 'greylight05' : transparentize(0.5, theme.colors.greylight05)}
                borderRadius={16}
                sx={{
                  '[role=radio]:focus > &': {
                    borderColor: theme.colors.blue06,
                    boxShadow: `0 0 0 2px rgba(175, 214, 255, 0.7)`,
                  },
                }}
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
              </Box>
              <Text as="label" htmlFor="r1" scale={300} ml="xs">
                Radio 1
              </Text>
            </OptionListItemBox>
          </RadioGroupItem>

          <RadioGroupItem value="value2" disabled={disabled}>
            <OptionListItemBox disabled={disabled} display="flex" alignItems={'center'} p="xs" id="r2">
              <Box
                backgroundColor={!disabled ? 'greylight01' : 'greylight02'}
                width={16}
                height={16}
                border={'1px solid'}
                borderColor={!disabled ? 'greylight05' : transparentize(0.5, theme.colors.greylight05)}
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
                    sx={{
                      '[role=radio]:focus > &': {
                        borderColor: theme.colors.blue06,
                        boxShadow: `0 0 0 2px rgba(175, 214, 255, 0.7)`,
                      },
                    }}
                  />
                </RadioGroupIndicator>
              </Box>
              <Text as="label" htmlFor="r2" scale={300} ml="xs">
                Radio 2
              </Text>
            </OptionListItemBox>
          </RadioGroupItem>
        </Stack>
      </RadioGroupRoot>
    </form>
  );
};
RadioWithBox.args = {
  disabled: false,
};
