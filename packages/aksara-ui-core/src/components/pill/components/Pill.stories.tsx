import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box } from '../../../foundations';
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
BasicExample.args = {};

export const ClosableExample = Template.bind({});
ClosableExample.args = {
  closable: true,
  onClose: action('pill-close'),
};
