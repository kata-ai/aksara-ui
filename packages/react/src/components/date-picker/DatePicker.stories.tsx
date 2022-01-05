import * as React from 'react';
import { SingleDatepicker } from './SingleDatePicker';

export default {
  title: 'Core/Components/Date Picker',
  component: SingleDatepicker,
};

export const SingleDatePicker = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>();
  return <SingleDatepicker selected={selectedDate} onDateSelected={data => setSelectedDate(data.date)} />;
};
