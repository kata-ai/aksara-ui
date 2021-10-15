import * as React from 'react';
import SubHeader from './SubHeader';

export default {
  title: 'Core/Components/Page Header/Sub Header',
  component: SubHeader,
};

export const StickSubHeader = () => {
  return <SubHeader label="Title" variant="stick" />;
};

export const StandSubHeader = () => {
  return <SubHeader label="Title" variant="stand" />;
};
