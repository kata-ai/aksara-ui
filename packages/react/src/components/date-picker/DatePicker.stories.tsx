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
              placeholder="Select Date"
              readOnly
              inputSize={'md'}
              value={selectedDate && Intl.DateTimeFormat('en-US').format(selectedDate)}
              width="100%"
              pr={36}
            />
            <InputIcon icon={IconCalendar} iconPosition="right" iconText="calendar" />
          </InputGroup>
        </PopoverTrigger>
        <PopoverContent sideOffset={4} placement={'bottom'} align={'end'} onOpenAutoFocus={e => e.preventDefault()}>
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
export const InputMultipleDateRangePicker = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date[] | undefined>();
  return (
    <Stack spacing="xs">
      <FormLabel htmlFor="textDummy">Date Input</FormLabel>
      <Popover>
        <PopoverTrigger>
          <InputGroup width="100%" maxWidth={360}>
            <InputText
              id="textDummy"
              name="textDummy"
              placeholder="Select Date"
              readOnly
              inputSize={'md'}
              value={
                selectedDate &&
                `${Intl.DateTimeFormat('en-US').format(selectedDate[0])} - ${Intl.DateTimeFormat('en-US').format(
                  selectedDate[1]
                )}`
              }
              width="100%"
              pr={36}
            />
            <InputIcon icon={IconCalendar} iconPosition="right" iconText="calendar" />
          </InputGroup>
        </PopoverTrigger>
        <PopoverContent sideOffset={4} placement={'bottom'} align={'end'} onOpenAutoFocus={e => e.preventDefault()}>
          <DatePicker
            type="range"
            multiDatePicker
            selected={selectedDate}
            onChange={date => {
              console.log(date);
              setSelectedDate(date);
            }}
          />
        </PopoverContent>
      </Popover>
    </Stack>
  );
};

interface DatePickerState {
  selectedDate?: Date[];
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
  payload?: Date[] | undefined;
}
function dateReducer(state: DatePickerState, action: DatePickerAction) {
  const today = new Date();
  switch (action.type) {
    case DatePickerKind.UPDATE: {
      return { ...state, selectedDate: action.payload };
    }
    case DatePickerKind.TODAY: {
      return { ...state, selectedDate: [today, today] };
    }
    case DatePickerKind.YESTERDAY: {
      const yesterday = new Date();
      yesterday.setDate(today.getDate() - 1);
      return { ...state, selectedDate: [yesterday, today] };
    }
    case DatePickerKind.LAST_7_DAYS: {
      const last7Days = new Date();
      last7Days.setDate(today.getDate() - 7);
      return { ...state, selectedDate: [last7Days, today] };
    }
    case DatePickerKind.LAST_14_DAYS: {
      const last14Days = new Date();
      last14Days.setDate(today.getDate() - 14);
      return { ...state, selectedDate: [last14Days, today] };
    }
    case DatePickerKind.LAST_28_DAYS: {
      const last28Days = new Date();
      last28Days.setDate(today.getDate() - 28);
      return { ...state, selectedDate: [last28Days, today] };
    }
    case DatePickerKind.THIS_MONTH: {
      const startThisMonth = new Date(today.getFullYear(), today.getMonth(), 1, 0);
      const endThisMonth = new Date(startThisMonth.getFullYear(), startThisMonth.getMonth() + 1, 0, 0);
      return { ...state, selectedDate: [startThisMonth, endThisMonth] };
    }
    case DatePickerKind.THIS_QUARTER: {
      const startThisQuater = new Date(today.getFullYear(), Math.floor(today.getMonth() / 3) * 3, 1, 0);
      const endThisQuater = new Date(
        startThisQuater.getFullYear(),
        (Math.floor(startThisQuater.getMonth() / 3) + 1) * 3,
        0,
        0
      );
      return { ...state, selectedDate: [startThisQuater, endThisQuater] };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
const options: OptionAdvancedDatePicker[] = [
  { label: 'Today', value: DatePickerKind.TODAY },
  { label: 'Yesterday', value: DatePickerKind.YESTERDAY },
  { label: 'Last 7 days', value: DatePickerKind.LAST_7_DAYS },
  { label: 'Last 14 days', value: DatePickerKind.LAST_14_DAYS },
  { label: 'Last 28 days', value: DatePickerKind.LAST_28_DAYS },
  { label: 'This Month', value: DatePickerKind.THIS_MONTH },
  { label: 'This Quarter', value: DatePickerKind.THIS_QUARTER },
];

export const AdvancedDatePickerRange = () => {
  const [{ selectedDate }, dispatch] = React.useReducer(dateReducer, { selectedDate: undefined });

  const optionHandler = (value: DatePickerKindValue) => {
    dispatch({ type: value });
  };
  return (
    <DatePicker
      advanceView={<AdvancedOption options={options} optionHandler={optionHandler} />}
      type="range"
      date={selectedDate?.[1]}
      selected={selectedDate}
      multiDatePicker
      onChange={date => {
        console.log(date);
        dispatch({ type: DatePickerKind.UPDATE, payload: date });
      }}
    />
  );
};

export const InputAdvancedDatePickerRange = () => {
  const [{ selectedDate }, dispatch] = React.useReducer(dateReducer, { selectedDate: undefined });
  const optionHandler = (value: DatePickerKindValue) => {
    dispatch({ type: value });
  };
  return (
    <Stack spacing="xs">
      <FormLabel htmlFor="textDummy">Date Input</FormLabel>
      <Popover>
        <PopoverTrigger>
          <InputGroup width="100%" maxWidth={360}>
            <InputText
              id="textDummy"
              name="textDummy"
              placeholder="Select Date"
              readOnly
              inputSize={'md'}
              value={
                selectedDate &&
                `${Intl.DateTimeFormat('en-US').format(selectedDate[0])} - ${Intl.DateTimeFormat('en-US').format(
                  selectedDate[1]
                )}`
              }
              width="100%"
              pr={36}
            />
            <InputIcon icon={IconCalendar} iconPosition="right" iconText="calendar" />
          </InputGroup>
        </PopoverTrigger>
        <PopoverContent sideOffset={4} placement={'bottom'} align={'end'} onOpenAutoFocus={e => e.preventDefault()}>
          <DatePicker
            advanceView={<AdvancedOption options={options} optionHandler={optionHandler} />}
            type="range"
            date={selectedDate?.[1]}
            selected={selectedDate}
            multiDatePicker
            onChange={date => {
              console.log(date);
              dispatch({ type: DatePickerKind.UPDATE, payload: date });
            }}
          />
        </PopoverContent>
      </Popover>
    </Stack>
  );
};
