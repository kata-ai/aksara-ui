import * as React from 'react';

import Popover from './Popover';
import { Button } from '../../button';
import { Card } from '../../../foundations';

export default {
  title: 'Core/Components/Popover',
  component: Popover,
};

export const BasicExample = () => {
  return (
    <Popover
      trigger={
        <Button block variant="primary">
          Toggle Popover
        </Button>
      }
    >
      <Card mt="xs" p="md" style={{ width: 250 }} elevation={3}>
        This is a popover
      </Card>
    </Popover>
  );
};
