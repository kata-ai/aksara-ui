import * as React from 'react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import ButtonGroup, { ButtonGroupProps } from './ButtonGroup';
import { SystemWrapper } from '../../../../utils/storybook';
import { Button } from '../../../button';
import { Box } from '../../../../foundations';

const readme = require('../../README.md');

export default {
  title: 'Core|Components/Button Group',
  component: ButtonGroup,
  decorators: [withKnobs, SystemWrapper],
  parameters: {
    notes: { markdown: readme },
  },
};

const options = {
  32: 32,
  40: 40,
};
const defaultValue = 32;

export const BasicExample = () => {
  return (
    <Box p="md">
      <ButtonGroup
        segmented={boolean('Segmented', false)}
        fullWidth={boolean('Full Width', false)}
        size={select<number>('Button Size', options, defaultValue) as ButtonGroupProps['size']}
      >
        <Button variant="outline">Cancel</Button>
        <Button variant="outline">Save</Button>
      </ButtonGroup>
    </Box>
  );
};
