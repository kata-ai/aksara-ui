import * as React from 'react';
import { SingleDatepicker } from './SingleDatePicker';
import { MultiDatePicker } from './MultiDatePicker';
import { AdvancedDatepicker, OptionAdvancedDatePicker } from './AdvancedDatePicker';

export default {
  title: 'Core/Components/Date Picker',
  component: SingleDatepicker,
};

export const SingleDatePicker = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>();
  return <SingleDatepicker selected={selectedDate} onDateSelected={data => setSelectedDate(data.date)} />;
};

export const MultipleDatePicker = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>();
  return <MultiDatePicker selected={selectedDate} onDateSelected={data => setSelectedDate(data.date)} />;
};

export const AdvancedDatePicker = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>();
  const options: OptionAdvancedDatePicker[] = [
    { label: 'Today', value: 'today' },
    { label: 'Yesterday', value: 'yesterday' },
    { label: 'Last 7 days', value: 'last_7_days' },
    { label: 'Last 14 days', value: 'last_14_days' },
    { label: 'Last 28 days', value: 'last_28_days' },
    { label: 'This Month', value: 'this_month' },
    { label: 'This Quarter', value: 'this_quarter' },
  ];
  const optionHandler = (value: string) => {
    console.log(value);
  };
  return (
    <AdvancedDatepicker
      options={options}
      optionHandler={optionHandler}
      selected={selectedDate}
      onDateSelected={data => setSelectedDate(data.date)}
    />
  );
};
