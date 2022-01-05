import React from 'react';
import { Props, useDayzed } from 'dayzed';
import { Calendar } from './components';

export type MultipleDatePickerProps = Omit<Props, 'monthsToDisplay'>;

export const MultiDatePicker = (props: MultipleDatePickerProps) => {
  const dayzedData = useDayzed({ ...props, monthsToDisplay: 2 });

  return <Calendar {...dayzedData} />;
};
