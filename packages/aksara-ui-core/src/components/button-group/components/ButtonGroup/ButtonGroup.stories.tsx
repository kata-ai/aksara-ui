import * as React from 'react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import ButtonGroup, { ButtonGroupProps } from './ButtonGroup';
import { SystemWrapper } from '../../../../utils/storybook';
import { Button } from '../../../button';

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
    <ButtonGroup
      segmented={boolean('Segmented', false)}
      fullWidth={boolean('Full Width', false)}
      size={select<number>('Button Size', options, defaultValue) as ButtonGroupProps['size']}
    >
      <Button variant="outline">Cancel</Button>
      <Button variant="outline">Save</Button>
    </ButtonGroup>
  );
};

export const Selectable = () => {
  const [selected, setSelected] = React.useState('');

  return (
    <ButtonGroup
      segmented={boolean('Segmented', false)}
      fullWidth={boolean('Full Width', false)}
      size={select<number>('Button Size', options, defaultValue) as ButtonGroupProps['size']}
    >
      <Button variant="outline" selected={selected === 'page1'} onClick={() => setSelected('page1')}>
        Page 1
      </Button>
      <Button variant="outline" selected={selected === 'page2'} onClick={() => setSelected('page2')}>
        Page 2
      </Button>
      <Button variant="outline" selected={selected === 'page3'} onClick={() => setSelected('page3')}>
        Page 3
      </Button>
    </ButtonGroup>
  );
};
