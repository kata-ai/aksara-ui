import * as React from 'react';
import { Story } from '@storybook/react';

import { InputToggle, InputToggleProps } from '../components/InputToggle';

export default {
  title: 'Core/Components/Form/InputToggle',
  component: InputToggle,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
};

export const Example: Story<InputToggleProps> = ({ label, disabled }) => {
  const [enabled, setEnabled] = React.useState<boolean>(false);

  const handleChange = (value: boolean) => {
    setEnabled(value);
  };

  return (
    <InputToggle
      id="toggleDummy"
      name="toggleDummy"
      label={label}
      disabled={disabled}
      checked={enabled}
      onChange={handleChange}
    />
  );
};
Example.args = {
  label: 'Checkbox input',
  disabled: false,
};
