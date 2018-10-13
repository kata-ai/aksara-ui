import * as React from 'react';
import { setAddon, storiesOf, StoryDecorator } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

import RootWrapper from '../../../.storybook/components/Wrapper';

import {
  Wrapper,
  Content,
  Topbar,
  SidebarAndContent,
  Sidebar,
  SidebarMain,
  SidebarSub
} from '../src';

setAddon(JSXAddon);

const StoryWrapper: StoryDecorator = storyFn => (
  <RootWrapper noPadding>{storyFn()}</RootWrapper>
);

const story = storiesOf('Layout', module).addDecorator(StoryWrapper);

story.addWithJSX('default', () => (
  <Wrapper>
    <Topbar
      leftContent={
        <div style={{ width: '64px', textAlign: 'center' }}>Logo</div>
      }
    />
    <SidebarAndContent hasTop>
      <Sidebar hasTop collapsed>
        <SidebarMain>Menu</SidebarMain>
      </Sidebar>
      <Content>Content</Content>
    </SidebarAndContent>
  </Wrapper>
));

story.addWithJSX('with SidebarSub', () => (
  <Wrapper>
    <Topbar
      leftContent={
        <div style={{ width: '64px', textAlign: 'center' }}>Logo</div>
      }
    />
    <SidebarAndContent hasTop>
      <Sidebar hasTop>
        <SidebarMain>Menu</SidebarMain>
        <SidebarSub titleElement={<h2>SidebarSubTitle</h2>}>
          SidebarSubContent
        </SidebarSub>
      </Sidebar>
      <Content>Content</Content>
    </SidebarAndContent>
  </Wrapper>
));
