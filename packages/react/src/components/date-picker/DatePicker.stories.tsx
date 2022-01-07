import * as React from 'react';
import { DatePicker } from './DatePicker';
// import { AdvancedOption, OptionAdvancedDatePicker } from './AdvancedOption';

export default {
  title: 'Core/Components/Date Picker',
};

export const SingleDatePicker = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>();
  return (
    <DatePicker
      type="picker"
      selected={selectedDate}
      onChange={date => {
        setSelectedDate(date);
      }}
    />
  );
};

export const MultipleDatePicker = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>();
  return (
    <DatePicker
      type="picker"
      multiDatePicker
      selected={selectedDate}
      onChange={date => {
        setSelectedDate(date);
      }}
    />
  );
};

export const MultipleDateRangePicker = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date[] | undefined>();
  return <DatePicker type="range" multiDatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} />;
};

// export const AdvancedDatePicker = () => {
//   const [selectedDate, setSelectedDate] = React.useState<Date | undefined>();
//   const options: OptionAdvancedDatePicker[] = [
//     { label: 'Today', value: 'today' },
//     { label: 'Yesterday', value: 'yesterday' },
//     { label: 'Last 7 days', value: 'last_7_days' },
//     { label: 'Last 14 days', value: 'last_14_days' },
//     { label: 'Last 28 days', value: 'last_28_days' },
//     { label: 'This Month', value: 'this_month' },
//     { label: 'This Quarter', value: 'this_quarter' },
//   ];
//   const optionHandler = (value: string) => {
//     console.log(value);
//   };
//   return (
//     <DatePicker
//       advanceView={<AdvancedOption options={options} optionHandler={optionHandler} />}
//       selected={selectedDate}
//       onDateSelected={data => setSelectedDate(data.date)}
//     />
//   );
// };
