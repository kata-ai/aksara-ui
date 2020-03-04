import * as React from 'react';

import { ComponentBlock, SystemWrapper, SystemBlock } from '../../utils/storybook';
import Circle from './components/Circle';

const readme = require('./README.md');

export default {
  title: 'Core|Components/Loading',
  component: [Circle],
  decorators: [SystemWrapper],
  parameters: {
    notes: { markdown: readme },
  },
};

export const BasicExample = () => (
  <SystemBlock title="Loading" subtitle="Renders a spinner to indicate loading state">
    <ComponentBlock title="Circle">
      <Circle />
    </ComponentBlock>
  </SystemBlock>
);
