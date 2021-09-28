import * as React from 'react';
import { Story } from '@storybook/react';

import InputToggle, { InputToggleProps } from './InputToggle';

export default {
  title: 'Core/Components/Form/InputToggle',
  component: InputToggle,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
};

const Template: Story<InputToggleProps> = ({ label, disabled }) => {
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

export const Example: Story<InputToggleProps> = Template.bind({});
Example.args = {
  label: 'Checkbox input',
  disabled: false,
};
