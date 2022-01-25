import * as React from 'react';
import { Story } from '@storybook/react';
import { Box } from '../../../layout';
import { Text } from '../../../typography';
import { CheckboxContainer, CheckboxIndicator, CheckboxProps, InputCheckbox } from '../components/InputCheckbox';

export default {
  title: 'Core/Components/Form/InputCheckbox',
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
  },
};

export const CheckboxIndicatorExample: Story<{ selected: boolean }> = ({ selected }) => {
  return <CheckboxContainer>{selected && <CheckboxIndicator />}</CheckboxContainer>;
};
CheckboxIndicatorExample.argTypes = {
  selected: {
    control: 'boolean',
  },
};

export const InputCheckboxExample: Story<CheckboxProps> = ({ disabled, errors, indeterminate }) => {
  return (
    <form>
      <Box display="inline-flex" flexDirection="row" alignItems="center">
        <InputCheckbox id="c1" indeterminate={indeterminate} disabled={disabled} errors={errors} />
        <Text as="label" scale={200} color={'greydark02'} ml="xs" htmlFor="c1">
          Checkbox
        </Text>
      </Box>
    </form>
  );
};
InputCheckboxExample.argTypes = {
  indeterminate: {
    control: 'boolean',
  },
};
