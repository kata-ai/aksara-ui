import * as React from 'react';

import { SystemWrapper } from '../../../utils/storybook';
import Circle from './Circle';

export default {
  title: 'Core|Components/Loading/Circle',
  component: [Circle],
  decorators: [SystemWrapper],
};

export const Example = () => <Circle />;
