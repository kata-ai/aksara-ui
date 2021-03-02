import * as React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Tabs, { TabsProps } from './Tabs';
import TabList from './TabList';
import Tab from './Tab';
import TabPanels from './TabPanels';
import TabPanel from './TabPanel';

export default {
  title: 'Core/Components/Tabs',
  component: Tabs,
} as Meta;

const Template: Story<TabsProps> = args => (
  <Tabs {...args}>
    <TabList>
      <Tab>Tab Item 1</Tab>
      <Tab>Tab Item 2</Tab>
      <Tab>Tab Item 3</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <p>one!</p>
      </TabPanel>
      <TabPanel>
        <p>two!</p>
      </TabPanel>
      <TabPanel>
        <p>three!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
);

export const BasicExample = Template.bind({});
BasicExample.args = {};

export const ExampleWithDefaultIndex = Template.bind({});
ExampleWithDefaultIndex.args = {
  ...BasicExample.args,
  defaultIndex: 2,
};
