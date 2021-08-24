import * as React from 'react';
import { Story } from '@storybook/react';
import { IconStar } from '@aksara-ui/icons';

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
      <Button variant="secondary">Cancel</Button>
      <Button variant="primary">Save</Button>
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
      <Button icon={IconStar} selected={selected === 'page1'} onClick={() => setSelected('page1')}>
        Label
      </Button>
      <Button icon={IconStar} selected={selected === 'page2'} onClick={() => setSelected('page2')}>
        Label
      </Button>
    </ButtonGroup>
  );
};
Selectable.args = {
  size: 'md',
  segmented: false,
  fullWidth: false,
};
