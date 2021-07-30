import * as React from 'react';
import { Story } from '@storybook/react';
import { IconChevronLeft } from '@aksara-ui/icons';

import { Text, Box } from '../../../layout';
import { IconButton } from '../../button';
import Panel, { PanelProps } from './Panel';
import PanelHeader from './PanelHeader';
import PanelFooter from './PanelFooter';

export default {
  title: 'Core/Components/Panel/Panel',
  component: Panel,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'lg'],
      },
    },
  },
};

const Template: Story<PanelProps> = args => (
  <Panel {...args}>
    <PanelHeader title="Panel Title" />
    <Box flex="1 1 auto">inner</Box>
    <PanelFooter>
      <IconButton size={32}>
        <IconChevronLeft fill="currentColor" aria-hidden="true" />
      </IconButton>
      <Text ml="md" scale={200} fontWeight={500}>
        Collapse
      </Text>
    </PanelFooter>
  </Panel>
);

export const Example = Template.bind({});
Example.args = {
  size: 'sm',
};
