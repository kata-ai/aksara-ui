import * as React from 'react';
import { Story } from '@storybook/react';

import { Box } from '../../../layout';
import { Text } from '../../../typography';
import { InputCheckboxLabel, InputCheckbox, InputCheckboxProps } from '../components/InputCheckbox';

export default {
  title: 'Core/Components/Form/InputCheckbox',
  component: InputCheckbox,
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

export const Example: Story<InputCheckboxProps> = ({ id, value, disabled, ...rest }) => {
  const checkboxRef = React.useRef<HTMLInputElement>(null);

  const toggle = React.useCallback(() => {
    if (checkboxRef.current) {
      if (checkboxRef.current.readOnly) {
        checkboxRef.current.checked = false;
        checkboxRef.current.readOnly = false;
      } else if (!checkboxRef.current.checked) {
        checkboxRef.current.readOnly = true;
        checkboxRef.current.indeterminate = true;
      }
    }
  }, [checkboxRef]);

  return (
    <Box>
      <InputCheckboxLabel htmlFor={id}>
        <InputCheckbox
          ref={checkboxRef}
          id={id}
          name={id}
          value={value}
          disabled={disabled}
          onClick={toggle}
          {...rest}
        />
        <Text scale={200} color={disabled ? 'greymed01' : 'greydark02'} ml="xs">
          Checkbox
        </Text>
      </InputCheckboxLabel>
    </Box>
  );
};
Example.args = {
  id: 'r1',
  value: 'r1',
  disabled: false,
  errors: false,
};
