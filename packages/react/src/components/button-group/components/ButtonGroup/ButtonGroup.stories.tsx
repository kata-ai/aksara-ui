import * as React from 'react';
import { Story } from '@storybook/react';
import { IconChevronDown, IconPlus } from '@aksara-ui/icons';

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

export const Segmented: Story<ButtonGroupProps> = args => {
  const [selected, setSelected] = React.useState('');

  return (
    <ButtonGroup {...args}>
      <Button selected={selected === 'page1'} onClick={() => setSelected('page1')}>
        Label
      </Button>
      <Button selected={selected === 'page2'} onClick={() => setSelected('page2')}>
        Label
      </Button>
    </ButtonGroup>
  );
};
Segmented.args = {
  size: 'md',
  segmented: true,
  fullWidth: false,
};

export const SegmentedWithIcon: Story<ButtonGroupProps> = args => {
  const [selected, setSelected] = React.useState('');

  return (
    <ButtonGroup {...args}>
      <Button icon={IconPlus} selected={selected === 'page1'} onClick={() => setSelected('page1')}>
        Label
      </Button>
      <Button icon={IconPlus} selected={selected === 'page2'} onClick={() => setSelected('page2')}>
        Label
      </Button>
    </ButtonGroup>
  );
};
SegmentedWithIcon.args = Segmented.args;

export const SegmentedDisclosure: Story<ButtonGroupProps> = args => {
  const [selected, setSelected] = React.useState('');

  return (
    <ButtonGroup {...args}>
      <Button
        icon={IconChevronDown}
        iconPosition="right"
        selected={selected === 'page1'}
        onClick={() => setSelected('page1')}
      >
        Label
      </Button>
      <Button
        icon={IconChevronDown}
        iconPosition="right"
        selected={selected === 'page2'}
        onClick={() => setSelected('page2')}
      >
        Label
      </Button>
    </ButtonGroup>
  );
};
SegmentedDisclosure.args = Segmented.args;
