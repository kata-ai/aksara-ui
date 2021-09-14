import * as React from 'react';
import { Text } from '../Text';

import Anchor from './Anchor';

export default {
  title: 'Core/Typography/Anchor',
  component: Anchor,
};

export const Example = () => (
  <Text>
    <Anchor target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=P_mQpbCSQOo" scale={400}>
      We are making AI technology accessible to everyone
    </Anchor>
  </Text>
);
