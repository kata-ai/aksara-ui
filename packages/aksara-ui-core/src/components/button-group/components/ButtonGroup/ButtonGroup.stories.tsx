import * as React from 'react';

import ButtonGroup from './ButtonGroup';
import { SystemWrapper } from '../../../../utils/storybook';
import { Button } from '../../../button';
import { Box } from '../../../../foundations';

const readme = require('../../README.md');

export default {
  title: 'Core|Components/Button Group',
  component: ButtonGroup,
  decorators: [SystemWrapper],
  parameters: {
    notes: { markdown: readme },
  },
};

export const BasicExample = () => {
  return (
    <Box p="md">
      <ButtonGroup segmented size={32}>
        <Button variant="outline">Cancel</Button>
        <Button variant="outline">Save</Button>
      </ButtonGroup>
    </Box>
  );
};
