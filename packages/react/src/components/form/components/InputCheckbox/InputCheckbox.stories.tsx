import * as React from 'react';
import { Story } from '@storybook/react';

import { Box } from '../../../../layout';
import { Text } from '../../../../typography';
import InputCheckboxLabel from './InputCheckboxLabel';
import InputCheckbox, { InputCheckboxProps } from './InputCheckbox';

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

export const Example: Story<InputCheckboxProps> = ({ id, value, ...rest }) => {
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
        <InputCheckbox ref={checkboxRef} id={id} name={id} value={value} onClick={toggle} {...rest} />
        <Text scale={300} ml="xs">
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
