import React from 'react';
import { Props, useDayzed } from 'dayzed';
import { Calendar } from './components';

const Datepicker = (props: Props) => {
  let dayzedData = useDayzed(props);

  return <Calendar {...dayzedData} />;
};

export default Datepicker;
