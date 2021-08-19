import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import { Box } from '../../../layout';
import Pill, { PillProps } from './Pill';

export default {
  title: 'Core/Components/Pill',
  component: Pill,
} as Meta;

const Template: Story<PillProps> = args => (
  <Box display="flex">
    <Pill {...args}>Keyword item 1</Pill>
  </Box>
);

export const BasicExample = Template.bind({});
BasicExample.args = {
  variant: 'default',
};

export const ClosableExample = Template.bind({});
ClosableExample.args = {
  variant: 'default',
  closable: true,
  onClose: action('pill-close'),
};
