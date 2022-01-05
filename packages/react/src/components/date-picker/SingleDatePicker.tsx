import React from 'react';
import { Props, useDayzed } from 'dayzed';
import { Calendar } from './components';

// eslint-disable-next-line import/prefer-default-export
export const SingleDatepicker = (props: Props) => {
  const dayzedData = useDayzed(props);

  return <Calendar {...dayzedData} />;
};
