import * as React from 'react';
import CardHeader from './CardHeader';
import { SystemWrapper } from '../../../utils/storybook';

export default {
  title: 'Core|Components/Card/CardHeader',
  component: CardHeader,
  decorators: [SystemWrapper],
};

export const Example = () => {
  return <CardHeader>Card Heading</CardHeader>;
};
