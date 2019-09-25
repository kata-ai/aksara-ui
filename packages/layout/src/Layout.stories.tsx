import * as React from 'react';
import { storiesOf, StoryDecorator } from '@storybook/react';

import RootWrapper from '../../../.storybook/components/Wrapper';

import {
  AppRoot,
  Content,
  Topbar,
  SidebarAndContent,
  Sidebar,
  SidebarMain,
  SidebarMainMenu,
  SidebarSub
} from './';
import { Dashboard } from '../../dashboard/src';

const StoryWrapper: StoryDecorator = storyFn => (
  <RootWrapper noPadding layout>
    {storyFn()}
  </RootWrapper>
);

storiesOf('Components|Foundations/Layout', module)
  .addDecorator(StoryWrapper)
  .add('default', () => (
    <AppRoot>
      <Topbar
        logoContent={
          <a style={{ display: 'block', width: '64px', textAlign: 'center' }} href="/">
            <img src="https://via.placeholder.com/24x36" />
          </a>
        }
      />
      <SidebarAndContent hasTop>
        <Sidebar hasTop collapsed>
          <SidebarMain hasTop>
            <SidebarMainMenu icon="bot">Bot</SidebarMainMenu>
            <SidebarMainMenu icon="nlu">NLU</SidebarMainMenu>
          </SidebarMain>
        </Sidebar>
        <Content>
          <Dashboard
            isStarter
            title="Wicara Demo"
            headerContent={
              <p>
                This project is intended to test the look and feel of Wicara, as well as a
                development environment.
              </p>
            }
          >
            DashboardContent
          </Dashboard>
        </Content>
      </SidebarAndContent>
    </AppRoot>
  ))
  .add('with SidebarSub', () => (
    <AppRoot>
      <Topbar
        logoContent={
          <a style={{ display: 'block', width: '64px', textAlign: 'center' }} href="/">
            <img src="https://via.placeholder.com/24x36" />
          </a>
        }
      />
      <SidebarAndContent hasTop>
        <Sidebar hasTop>
          <SidebarMain hasTop>
            <SidebarMainMenu icon="bot">Bot</SidebarMainMenu>
            <SidebarMainMenu icon="nlu">NLU</SidebarMainMenu>
          </SidebarMain>
          <SidebarSub>
            <h2 className="mb-2">SidebarSubTitle</h2>
            <p>SidebarSubContent</p>
          </SidebarSub>
        </Sidebar>
        <Content>
          <Dashboard
            title="Wicara Demo"
            tooltip="This project is intended to test the look and feel of Wicara, as well as a development environment."
          >
            DashboardContent
          </Dashboard>
        </Content>
      </SidebarAndContent>
    </AppRoot>
  ));
