import * as React from 'react';
import DateNumber, { DateNumberProps } from './DateNumber';
import { Story } from '@storybook/react';

export default {
  title: 'Core/Components/Date Picker/Date Number',
  component: DateNumber,
  argTypes: {
    variant: {
      options: ['currentDate', 'start', 'end', 'selected', 'default', 'road'],
    },
  },
};
const defaultArgs: DateNumberProps = {
  variant: 'default',
};

const Template: Story<DateNumberProps> = ({ variant }) => <DateNumber variant={variant}>1</DateNumber>;

export const Example = Template.bind({});
Example.args = defaultArgs;
