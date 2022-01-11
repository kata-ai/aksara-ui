import { IconCalendar } from '@aksara-ui/icons';
import * as React from 'react';
import { Stack } from '../../layout';
import { FormLabel, InputGroup, InputIcon, InputText } from '../form';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';
import { DatePicker } from './DatePicker';
import { AdvancedOption, OptionAdvancedDatePicker } from './AdvancedOption';

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
interface DatePickerState {
  selectedDate?: Date;
}
// eslint-disable-next-line no-shadow
enum DatePickerKind {
  UPDATE = 'UPDATE',
  TODAY = 'TODAY',
  YESTERDAY = 'YESTERDAY',
  LAST_7_DAYS = 'LAST_7_DAYS',
  LAST_14_DAYS = 'LAST_14_DAYS',
  LAST_28_DAYS = 'LAST_28_DAYS',
  THIS_MONTH = 'THIS_MONTH',
  THIS_QUARTER = 'THIS_QUARTER',
}

type DatePickerKindValue = `${DatePickerKind}`;
interface DatePickerAction {
  type: DatePickerKindValue;
  payload?: Date | undefined;
}
function dateReducer(state: DatePickerState, action: DatePickerAction) {
  switch (action.type) {
    case DatePickerKind.UPDATE: {
      return { ...state, selectedDate: action.payload };
    }
    case DatePickerKind.TODAY: {
      return { ...state, selectedDate: new Date() };
    }
    case DatePickerKind.YESTERDAY: {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      return { ...state, selectedDate: yesterday };
    }
    case DatePickerKind.LAST_7_DAYS: {
      const last7Days = new Date();
      last7Days.setDate(last7Days.getDate() - 7);
      return { ...state, selectedDate: last7Days };
    }
    case DatePickerKind.LAST_14_DAYS: {
      const last14Days = new Date();
      last14Days.setDate(last14Days.getDate() - 14);
      return { ...state, selectedDate: last14Days };
    }
    case DatePickerKind.LAST_28_DAYS: {
      const last28Days = new Date();
      last28Days.setDate(last28Days.getDate() - 28);
      return { ...state, selectedDate: last28Days };
    }
    case DatePickerKind.THIS_MONTH: {
      const thisMonth = new Date();
      thisMonth.setDate(1);
      return { ...state, selectedDate: thisMonth };
    }
    case DatePickerKind.THIS_QUARTER: {
      const thisQuater = new Date();
      thisQuater.setMonth(Math.floor(thisQuater.getMonth() / 3) * 3);
      thisQuater.setDate(1);
      return { ...state, selectedDate: thisQuater };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export const AdvancedDatePicker = () => {
  const [{ selectedDate }, dispatch] = React.useReducer(dateReducer, { selectedDate: undefined });

  const options: OptionAdvancedDatePicker[] = [
    { label: 'Today', value: DatePickerKind.TODAY },
    { label: 'Yesterday', value: DatePickerKind.YESTERDAY },
    { label: 'Last 7 days', value: DatePickerKind.LAST_7_DAYS },
    { label: 'Last 14 days', value: DatePickerKind.LAST_14_DAYS },
    { label: 'Last 28 days', value: DatePickerKind.LAST_28_DAYS },
    { label: 'This Month', value: DatePickerKind.THIS_MONTH },
    { label: 'This Quarter', value: DatePickerKind.THIS_QUARTER },
  ];
  const optionHandler = (value: DatePickerKindValue) => {
    // TODO useReducer to handle state update
    console.log('value', value);
    dispatch({ type: value });
  };
  return (
    <DatePicker
      advanceView={<AdvancedOption options={options} optionHandler={optionHandler} />}
      type="picker"
      date={selectedDate}
      selected={selectedDate}
      multiDatePicker
      onChange={date => {
        console.log(date);
        dispatch({ type: DatePickerKind.UPDATE, payload: date });
      }}
    />
  );
};
