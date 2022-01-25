import * as React from 'react';
import { Story } from '@storybook/react';
import { Box } from '../../../layout';
import { Text } from '../../../typography';
import {
  InputCheckboxLabel,
  CheckboxContainer,
  CheckboxIndicator,
  CheckboxProps,
  InputCheckbox,
} from '../components/InputCheckbox';

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

export const CheckboxRadixExample: Story<CheckboxProps> = ({ disabled, errors, indeterminate }) => {
  return (
    <form>
      <Box>
        <InputCheckboxLabel htmlFor="c1">
          <InputCheckbox defaultChecked id="c1" indeterminate={indeterminate} disabled={disabled} errors={errors} />
          <Text scale={200} color={'greydark02'} ml="xs">
            Checkbox
          </Text>
        </InputCheckboxLabel>
      </Box>
    </form>
  );
};
CheckboxRadixExample.argTypes = {
  indeterminate: {
    options: [true, false],
    control: 'boolean',
  },
};
