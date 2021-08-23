import * as React from 'react';
import { Story } from '@storybook/react';

import ButtonGroup, { ButtonGroupProps } from './ButtonGroup';
import { Button } from '../../../button';

export default {
  title: 'Core/Components/Button Group',
  component: ButtonGroup,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    segmented: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
};

export const BasicExample: Story<ButtonGroupProps> = args => {
  return (
    <ButtonGroup {...args}>
      <Button variant="outline">Cancel</Button>
      <Button variant="outline">Save</Button>
    </ButtonGroup>
  );
};
BasicExample.args = {
  size: 'md',
  segmented: false,
  fullWidth: false,
};

export const Selectable: Story<ButtonGroupProps> = args => {
  const [selected, setSelected] = React.useState('');

  return (
    <ButtonGroup {...args}>
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
Selectable.args = {
  size: 'md',
  segmented: false,
  fullWidth: false,
};
