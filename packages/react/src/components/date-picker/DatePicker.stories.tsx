import { IconCalendar } from '@aksara-ui/icons';
import * as React from 'react';
import { Stack } from '../../layout';
import { FormLabel, InputGroup, InputIcon, InputText } from '../form';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';
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
        console.log(date);
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
        console.log(date);
        setSelectedDate(date);
      }}
    />
  );
};

export const MultipleDateRangePicker = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date[] | undefined>();
  return (
    <DatePicker
      type="range"
      multiDatePicker
      selected={selectedDate}
      onChange={date => {
        console.log(date);
        setSelectedDate(date);
      }}
    />
  );
};

export const InputSingleDatePicker = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>();
  return (
    <Stack spacing="xs">
      <FormLabel htmlFor="textDummy">Date Input</FormLabel>
      <Popover>
        <PopoverTrigger>
          <InputGroup width="100%" maxWidth={360}>
            <InputText
              id="textDummy"
              name="textDummy"
              placeholder="Type here..."
              readOnly
              inputSize={'md'}
              value={selectedDate && Intl.DateTimeFormat('en-US').format(selectedDate)}
              width="100%"
              pr={36}
            />
            <InputIcon icon={IconCalendar} iconPosition="right" iconText="calendar" />
          </InputGroup>
        </PopoverTrigger>
        <PopoverContent placement={'bottom'} align={'end'}>
          <DatePicker
            type="picker"
            selected={selectedDate}
            onChange={date => {
              setSelectedDate(date);
            }}
          />
        </PopoverContent>
      </Popover>
    </Stack>
  );
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
