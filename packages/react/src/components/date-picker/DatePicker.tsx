import { DateObj, Props, useDayzed } from 'dayzed';
import React from 'react';
import { Calendar } from './components';

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

const CalendarPicker = ({ multiDatePicker, onChange, advanceView, selected, ...props }: DatePickerImplPickerProps) => {
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
  React.useEffect(() => {
    if (selected) {
      setDateValue(selected);
    }
  }, [selected]);
  React.useEffect(() => {
    if (dateValue && !multiDatePicker && onChange) {
      onChange(dateValue);
    }
  }, [dateValue]);
  return (
    <Calendar
      onUpdate={multiDatePicker ? updateHandler : undefined}
      selected={dateValue ? [dateValue] : undefined}
      advanceView={advanceView}
      {...dayzedData}
    />
  );
};
const CalendarRangePicker = ({
  multiDatePicker,
  onChange,
  advanceView,
  selected,
  ...props
}: DatePickerImplRangeProps) => {
  const [dateValue, setDateValue] = React.useState<Date[]>([]);
  React.useEffect(() => {
    if (selected) {
      setDateValue(selected);
    }
  }, [selected]);
  const onDateSelected = (selectedDate: DateObj) => {
    if (!dateValue.length || dateValue.length === 2) {
      setDateValue([selectedDate.date]);
    } else {
      if (selectedDate.date.toDateString() === dateValue[0].toDateString()) {
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
      if (dateValue.length === 1) {
        onChange([dateValue[0], dateValue[0]]);
      } else {
        onChange(dateValue);
      }
    }
  };

  return (
    <Calendar
      onUpdate={multiDatePicker ? updateHandler : undefined}
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

    if (type === 'range') {
      return <CalendarRangePicker {...rangeProps} />;
    }
    return <CalendarPicker {...pickerProps} />;
  };
