import * as React from 'react';
import { Story } from '@storybook/react';

import InputToggle, { InputToggleProps } from './InputToggle';

export default {
  title: 'Core/Components/Form/InputToggle',
  component: InputToggle,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md'],
      },
    },
    disabled: {
      control: 'boolean',
    },
  },
};

const Template: Story<InputToggleProps> = args => {
  return <InputToggle id="toggleDummy" name="toggleDummy" {...args} />;
};

export const Example: Story<InputToggleProps> = Template.bind({});
Example.args = {
  label: 'Checkbox input',
  size: 'md',
  disabled: false,
};
