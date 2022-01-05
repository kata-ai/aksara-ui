import * as React from 'react';
import DatePicker from './DatePicker';

export default {
  title: 'Core/Components/Date Picker',
  component: DatePicker,
};

export const Example = () => {
  return <DatePicker selected={new Date()} onDateSelected={data => console.log('data', data)} />;
};
