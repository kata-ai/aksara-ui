import React from 'react';
import { DateObj, Props, useDayzed } from 'dayzed';
import { Calendar } from './components';

// TODO
// make 2 interface for picker and range

interface DatePickerTypePickerProps extends DatePickerImplPickerProps {
  type: 'picker';
}
interface DatePickerTypeRangeProps extends DatePickerImplRangeProps {
  type: 'range';
}
export interface DatePickerImplPickerProps extends DatePickerProps {
  selected?: Date;
  onChange?(value: Date): void;
}
export interface DatePickerImplRangeProps extends DatePickerProps {
  selected?: Date[];
  onChange?(value: Date[]): void;
}

// eslint-disable-next-line import/prefer-default-export
export interface DatePickerProps extends Omit<Props, 'onDateSelected' | 'monthsToDisplay' | 'selected'> {
  advanceView?: React.ReactNode;
  onClose?: () => void;
  multiDatePicker?: boolean;
}

const CalendarPicker = ({ multiDatePicker, onChange, advanceView, ...props }: DatePickerImplPickerProps) => {
  const [dateValue, setDateValue] = React.useState<Date>();
  const onDateSelected = (selectedDate: DateObj) => {
    setDateValue(selectedDate.date);
  };
  const updateHandler = () => {
    if (dateValue && onChange) {
      onChange(dateValue);
    }
  };
  const dayzedData = useDayzed({
    ...props,
    selected: dateValue,
    monthsToDisplay: multiDatePicker ? 2 : 1,
    onDateSelected,
  });
  return (
    <Calendar
      onUpdate={multiDatePicker ? () => updateHandler : undefined}
      selected={dateValue ? [dateValue] : undefined}
      advanceView={advanceView}
      {...dayzedData}
    />
  );
};
const CalendarRangePicker = ({ multiDatePicker, onChange, advanceView, ...props }: DatePickerImplRangeProps) => {
  const [dateValue, setDateValue] = React.useState<Date[]>([]);
  const onDateSelected = (selectedDate: DateObj) => {
    if (!dateValue.length || dateValue.length === 2) {
      setDateValue([selectedDate.date]);
    } else {
      if (selectedDate.date.getTime() === dateValue[0].getTime()) {
        return;
      }
      if (new Date(dateValue[0]) > selectedDate.date) {
        setDateValue([selectedDate.date, dateValue[0]]);
      } else {
        setDateValue([dateValue[0], selectedDate.date]);
      }
    }
  };
  const dayzedData = useDayzed({
    ...props,
    selected: dateValue,
    monthsToDisplay: multiDatePicker ? 2 : 1,
    onDateSelected,
  });

  const updateHandler = () => {
    if (dateValue && onChange) {
      onChange(dateValue);
    }
  };

  return (
    <Calendar
      onUpdate={multiDatePicker ? () => updateHandler : undefined}
      selected={dateValue}
      advanceView={advanceView}
      {...dayzedData}
    />
  );
};

export const DatePicker: (props: DatePickerTypePickerProps | DatePickerTypeRangeProps) => React.ReactElement =
  props => {
    const { type, ...accordionProps } = props;
    const pickerProps = accordionProps as DatePickerImplPickerProps;
    const rangeProps = accordionProps as DatePickerTypeRangeProps;

    // React.useEffect(() => {
    //   if (selected) {
    //     if (Array.isArray(selected)) {
    //       setDateValue(selected);
    //     } else {
    //       setDateValue([selected]);
    //     }
    //   }
    // }, [selected]);
    // if range
    // value need to be ordered from start to end date
    // then set as string
    // if click again, then reset value first then set first value again

    // if single date picker
    // value will directyly set to dateValue
    // React.useEffect(() => {
    //   if (dateValue && type === 'picker' && onChange) {
    //     onChange(dateValue);
    //     if (onClose) onClose();
    //   }
    // }, [dateValue]);
    // TODO

    if (type === 'range') {
      return <CalendarRangePicker {...rangeProps} />;
    }
    return <CalendarPicker {...pickerProps} />;

    // TODO
    // handle range state value
    // handle selected state

    // useEffect
    // every value change
    // execute callback
    // callback : (data:Object)=>void
    // range : {start:Date,end:Date}
    // single: Date
  };
