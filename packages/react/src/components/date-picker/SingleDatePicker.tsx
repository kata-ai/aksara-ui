import React from 'react';
import { Props, useDayzed } from 'dayzed';
import { Calendar } from './components';

export type SingleDatePickerProps = Omit<Props, 'monthsToDisplay'>;

export const SingleDatepicker = (props: SingleDatePickerProps) => {
  const dayzedData = useDayzed(props);

  return <Calendar {...dayzedData} />;
};
