import * as React from 'react';
import { Story } from '@storybook/react';

import { Box, Stack } from '../../../layout';
import { Text } from '../../../typography';
import { InputToggle, InputToggleProps } from '../components/InputToggle';
import { FormLabel } from '../components';

export default {
  title: 'Core/Components/Form/InputToggle',
  component: InputToggle,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    label: {
      control: 'text',
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
  label: 'Label',
  disabled: false,
};

export const WithLabel: Story<InputToggleProps> = ({ label, disabled }) => {
  const [enabled, setEnabled] = React.useState<boolean>(false);

  const handleChange = (value: boolean) => {
    setEnabled(value);
  };

  return (
    <Box>
      <Stack direction="horizontal" spacing="xs" alignItems="center">
        <FormLabel htmlFor="toggleDummy">{label}</FormLabel>
        <InputToggle
          id="toggleDummy"
          name="toggleDummy"
          label={label}
          disabled={disabled}
          checked={enabled}
          onChange={handleChange}
        />
      </Stack>
    </Box>
  );
};
WithLabel.args = Example.args;

export const WithLabelAndDescription: Story<InputToggleProps> = ({ label, disabled }) => {
  const [enabled, setEnabled] = React.useState<boolean>(false);

  const handleChange = (value: boolean) => {
    setEnabled(value);
  };

  return (
    <Stack spacing="xs">
      <Stack direction="horizontal" spacing="xs" alignItems="center">
        <FormLabel htmlFor="toggleDummy">{label}</FormLabel>
        <InputToggle
          id="toggleDummy"
          name="toggleDummy"
          label={label}
          disabled={disabled}
          checked={enabled}
          onChange={handleChange}
        />
      </Stack>
      <Text scale={200}>Description for input</Text>
    </Stack>
  );
};
WithLabelAndDescription.args = Example.args;

export const WithDescription: Story<InputToggleProps> = ({ label, disabled }) => {
  const [enabled, setEnabled] = React.useState<boolean>(false);

  const handleChange = (value: boolean) => {
    setEnabled(value);
  };

  return (
    <Stack spacing="xs">
      <InputToggle
        id="toggleDummy"
        name="toggleDummy"
        label={label}
        disabled={disabled}
        checked={enabled}
        onChange={handleChange}
      />
      <Text scale={200}>Description for input</Text>
    </Stack>
  );
};
WithDescription.args = Example.args;
